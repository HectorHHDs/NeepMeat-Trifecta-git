// KubeJS Server Script: Asbestos Proximity (Player Tick)
const ASBESTOS_BLOCKS = [
    'neepmeat:asbestos',
    'neepmeat:asbestos_slab',
    'neepmeat:asbestos_wall',
    'neepmeat:asbestos_stairs'
];

const DETECTION_RANGE = 1;
let exposureData = {};
const allowedRespirators = [
    'createbigcannons:gas_mask',
    'industrialupgrade:crafting_elements/crafting_97_element',
    'industrialupgrade:armour/hazmathemet',
    'survival_instinct:gas_mask_helmet',
    'survival_instinct:hazmat_helmet',
    'survival_instinct:gas_mask_leggings',
    'industrialupgrade:armour/hazmat_helmet',
    'scguns:anthralite_respirator',
    'scguns:netherite_respirator',
    'scguns:exo_suit_helmet'
];

let slotType = 'head';

PlayerEvents.tick(event => {
    const { player, level } = event;

    // Check exactly once every 20 ticks (1 second) to save performance
    if (level.time % 20 != 0) return;

    const id = player.uuid.toString();

    // Check for Gas Mask (Immunity)
    if (allowedRespirators.includes(player.headArmorItem.id)) {
        if (player.headArmorItem.id != "scguns:exo_suit_helmet") {
            if (exposureData[id]) delete exposureData[id];
            return;
        }
        if (player.headArmorItem.id == "scguns:exo_suit_helmet") {

            let nbt = player.headArmorItem.nbt;
            if (!nbt) return;

            // Check 2: Does ExoSuitUpgrades exist?
            let exoUpgrades = nbt.getCompound('ExoSuitUpgrades');
            if (exoUpgrades && !exoUpgrades.empty) {
                
                // Check 3: Get the list and verify it's not null
                let upgradeList = exoUpgrades.getList('Upgrades', 10);
                if (upgradeList != null) {
                    
                    // Use a standard for loop for better compatibility
                    for (let i = 0; i < upgradeList.size(); i++) {
                        let upgrade = upgradeList.get(i);
                        
                        let slot = upgrade.getInt('Slot');
                        let itemObj = upgrade.getCompound('Item');
                        let itemId = itemObj.getString('id');

                        if (slot == 2 && itemId == "scguns:gas_mask_module") {
                            if (exposureData[id]) delete exposureData[id];
                            return;
                        }
                    }
                }
            }
        }
    }
    let hasCurioRespirator = false;
    if (player.getCuriosInventory()) {
        player.getCuriosInventory().getStacksHandler(slotType).ifPresent(handler => {
            let stacks = handler.getStacks();
            for (let i = 0; i < stacks.getSlots(); i++) {
                let stack = stacks.getStackInSlot(i);
                if (!stack.empty && allowedRespirators.includes(stack.id)) {
                    hasCurioRespirator = true; // Set the flag
                }
            }
        });
    }

    // Now check the flag to reset exposure if a Curio respirator is found
    if (hasCurioRespirator) {
        if (exposureData[id]) delete exposureData[id];
        return;
    }



    let foundAsbestos = false;

    // Proximity detection loop
    for (let x = -DETECTION_RANGE; x <= DETECTION_RANGE; x++) {
        for (let y = -DETECTION_RANGE; y <= DETECTION_RANGE; y++) {
            for (let z = -DETECTION_RANGE; z <= DETECTION_RANGE; z++) {
                let block = level.getBlock(player.blockX + x, player.blockY + y, player.blockZ + z);
                if (ASBESTOS_BLOCKS.includes(block.id)) {
                    foundAsbestos = true;
                    break;
                }
            }
            if (foundAsbestos) break;
        }
        if (foundAsbestos) break;
    }

    if (foundAsbestos) {
        // Track exposure (increment by 20 ticks)
        exposureData[id] = (exposureData[id] || 0) + 20;
        let exposure = exposureData[id];

        // Slowness (immediate)
        player.potionEffects.add('minecraft:slowness', 40, 1, false, false);

        // Nausea (after 5 seconds / 100 ticks)
        if (exposure >= 100) {
            player.potionEffects.add('minecraft:nausea', 160, 1, false, false);
        }
        
        // Poison (after 15 seconds / 300 ticks)
        if (exposure >= 300) {
            player.potionEffects.add('minecraft:poison', 300, 1, false, false);
        }
    } else {
        // Clear data if they are no longer near asbestos
        if (exposureData[id]) delete exposureData[id];
    }
});

// Cleanup data when player leaves
PlayerEvents.loggedOut(event => {
    delete exposureData[event.player.uuid.toString()];
});
