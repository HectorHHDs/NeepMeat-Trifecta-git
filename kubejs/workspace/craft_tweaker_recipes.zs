#modloaded crafttweaker

// Remove Mystical Agriculture ingot recipes (by essence inputs)
craftingTable.removeByInput(<item:mysticalagriculture:iron_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:diamond_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:gold_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:redstone_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:lapis_lazuli_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:netherite_essence>);

craftingTable.removeByInput(<item:mysticalagriculture:aluminum_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:tin_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:silver_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:lead_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:nickel_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:platinum_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:titanium_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:chromium_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:iridium_essence>);

craftingTable.removeByInput(<item:mysticalagriculture:bronze_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:brass_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:invar_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:tungsten_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:copper_essence>);

craftingTable.removeByInput(<item:mysticalagriculture:zinc_essence>);
craftingTable.removeByInput(<item:mysticalagriculture:electrum_essence>);

craftingTable.removeByInput(<item:mysticalagriculture:steel_essence>);

// Remove original orbital railgun recipe
recipes.removeByName("orbital_railgun_enhanced:orbital_railgun");

// Orbital Railgun recipe
craftingTable.addShaped("orbital_railgun_enhanced_recipe", <item:orbital_railgun_enhanced:orbital_railgun>, [
	[<item:mysticalagriculture:awakened_supremium_essence>, <item:ae2:spatial_cell_component_16>, <item:mysticalagriculture:awakened_supremium_essence>],
	[<item:ae2:spatial_cell_component_16>, <item:ae2:singularity>, <item:ae2:spatial_cell_component_16>],
	[<item:techreborn:uu_matter>, <item:techreborn:uu_matter>, <item:techreborn:uu_matter>]
]);

// Iron Ore replacement
craftingTable.addShaped("iron_ore_from_essence", <item:minecraft:iron_ore> * 2, [
	[<item:mysticalagriculture:iron_essence>, <item:mysticalagriculture:iron_essence>, <item:mysticalagriculture:iron_essence>],
	[<item:mysticalagriculture:iron_essence>, <item:mysticalagriculture:iron_essence>, <item:mysticalagriculture:iron_essence>],
	[<item:mysticalagriculture:iron_essence>, <item:mysticalagriculture:iron_essence>, <item:mysticalagriculture:iron_essence>]
]);

// Diamond Ore replacement
craftingTable.addShaped("diamond_ore_from_essence", <item:minecraft:diamond_ore>, [
	[<item:mysticalagriculture:diamond_essence>, <item:mysticalagriculture:diamond_essence>, <item:mysticalagriculture:diamond_essence>],
	[<item:mysticalagriculture:diamond_essence>, <item:mysticalagriculture:diamond_essence>, <item:mysticalagriculture:diamond_essence>],
	[<item:mysticalagriculture:diamond_essence>, <item:mysticalagriculture:diamond_essence>, <item:mysticalagriculture:diamond_essence>]
]);

// Gold Ore replacement
craftingTable.addShaped("gold_ore_from_essence", <item:minecraft:gold_ore>, [
	[<item:mysticalagriculture:gold_essence>, <item:mysticalagriculture:gold_essence>, <item:mysticalagriculture:gold_essence>],
	[<item:mysticalagriculture:gold_essence>, <item:mysticalagriculture:gold_essence>, <item:mysticalagriculture:gold_essence>],
	[<item:mysticalagriculture:gold_essence>, <item:mysticalagriculture:gold_essence>, <item:mysticalagriculture:gold_essence>]
]);

// Redstone Ore replacement
craftingTable.addShaped("redstone_ore_from_essence", <item:minecraft:redstone_ore> * 2, [
	[<item:mysticalagriculture:redstone_essence>, <item:mysticalagriculture:redstone_essence>, <item:mysticalagriculture:redstone_essence>],
	[<item:mysticalagriculture:redstone_essence>, <item:mysticalagriculture:redstone_essence>, <item:mysticalagriculture:redstone_essence>],
	[<item:mysticalagriculture:redstone_essence>, <item:mysticalagriculture:redstone_essence>, <item:mysticalagriculture:redstone_essence>]
]);

// Lapis Ore replacement
craftingTable.addShaped("lapis_ore_from_essence", <item:minecraft:lapis_ore> * 2, [
	[<item:mysticalagriculture:lapis_lazuli_essence>, <item:mysticalagriculture:lapis_lazuli_essence>, <item:mysticalagriculture:lapis_lazuli_essence>],
	[<item:mysticalagriculture:lapis_lazuli_essence>, <item:mysticalagriculture:lapis_lazuli_essence>, <item:mysticalagriculture:lapis_lazuli_essence>],
	[<item:mysticalagriculture:lapis_lazuli_essence>, <item:mysticalagriculture:lapis_lazuli_essence>, <item:mysticalagriculture:lapis_lazuli_essence>]
]);

// Ancient Debris replacement
craftingTable.addShaped("ancient_debris_from_essence", <item:minecraft:ancient_debris>, [
	[<item:mysticalagriculture:netherite_essence>, <item:mysticalagriculture:netherite_essence>, <item:mysticalagriculture:netherite_essence>],
	[<item:mysticalagriculture:netherite_essence>, <item:mysticalagriculture:netherite_essence>, <item:mysticalagriculture:netherite_essence>],
	[<item:mysticalagriculture:netherite_essence>, <item:mysticalagriculture:netherite_essence>, <item:mysticalagriculture:netherite_essence>]
]);

// Tech Reborn - Sodalite Ore
craftingTable.addShaped("sodalite_ore_from_essence", <item:techreborn:sodalite_ore> * 2, [
	[<item:mysticalagriculture:aluminum_essence>, <item:mysticalagriculture:aluminum_essence>, <item:mysticalagriculture:aluminum_essence>],
	[<item:mysticalagriculture:aluminum_essence>, <item:mysticalagriculture:aluminum_essence>, <item:mysticalagriculture:aluminum_essence>],
	[<item:mysticalagriculture:aluminum_essence>, <item:mysticalagriculture:aluminum_essence>, <item:mysticalagriculture:aluminum_essence>]
]);

// Tech Reborn - Tin Ore
craftingTable.addShaped("tin_ore_from_essence", <item:techreborn:tin_ore> * 2, [
	[<item:mysticalagriculture:tin_essence>, <item:mysticalagriculture:tin_essence>, <item:mysticalagriculture:tin_essence>],
	[<item:mysticalagriculture:tin_essence>, <item:mysticalagriculture:tin_essence>, <item:mysticalagriculture:tin_essence>],
	[<item:mysticalagriculture:tin_essence>, <item:mysticalagriculture:tin_essence>, <item:mysticalagriculture:tin_essence>]
]);

// Tech Reborn - Silver Ore
craftingTable.addShaped("silver_ore_from_essence", <item:techreborn:silver_ore>, [
	[<item:mysticalagriculture:silver_essence>, <item:mysticalagriculture:silver_essence>, <item:mysticalagriculture:silver_essence>],
	[<item:mysticalagriculture:silver_essence>, <item:mysticalagriculture:silver_essence>, <item:mysticalagriculture:silver_essence>],
	[<item:mysticalagriculture:silver_essence>, <item:mysticalagriculture:silver_essence>, <item:mysticalagriculture:silver_essence>]
]);

// Tech Reborn - Lead Ore
craftingTable.addShaped("lead_ore_from_essence", <item:techreborn:lead_ore> * 2, [
	[<item:mysticalagriculture:lead_essence>, <item:mysticalagriculture:lead_essence>, <item:mysticalagriculture:lead_essence>],
	[<item:mysticalagriculture:lead_essence>, <item:mysticalagriculture:lead_essence>, <item:mysticalagriculture:lead_essence>],
	[<item:mysticalagriculture:lead_essence>, <item:mysticalagriculture:lead_essence>, <item:mysticalagriculture:lead_essence>]
]);

// Tech Reborn - Sheldonite Ore (Nickel)
craftingTable.addShaped("sheldonite_ore_nickel_from_essence", <item:techreborn:sheldonite_ore> * 2, [
	[<item:mysticalagriculture:nickel_essence>, <item:mysticalagriculture:nickel_essence>, <item:mysticalagriculture:nickel_essence>],
	[<item:mysticalagriculture:nickel_essence>, <item:mysticalagriculture:nickel_essence>, <item:mysticalagriculture:nickel_essence>],
	[<item:mysticalagriculture:nickel_essence>, <item:mysticalagriculture:nickel_essence>, <item:mysticalagriculture:nickel_essence>]
]);

// Tech Reborn - Sheldonite Ore (Platinum)
craftingTable.addShaped("sheldonite_ore_platinum_from_essence", <item:techreborn:sheldonite_ore> * 3, [
	[<item:mysticalagriculture:platinum_essence>, <item:mysticalagriculture:platinum_essence>, <item:mysticalagriculture:platinum_essence>],
	[<item:mysticalagriculture:platinum_essence>, <item:mysticalagriculture:platinum_essence>, <item:mysticalagriculture:platinum_essence>],
	[<item:mysticalagriculture:platinum_essence>, <item:mysticalagriculture:platinum_essence>, <item:mysticalagriculture:platinum_essence>]
]);

// Tech Reborn - Bauxite Ore
craftingTable.addShaped("bauxite_ore_from_essence", <item:techreborn:bauxite_ore> * 2, [
	[<item:mysticalagriculture:titanium_essence>, <item:mysticalagriculture:titanium_essence>, <item:mysticalagriculture:titanium_essence>],
	[<item:mysticalagriculture:titanium_essence>, <item:mysticalagriculture:titanium_essence>, <item:mysticalagriculture:titanium_essence>],
	[<item:mysticalagriculture:titanium_essence>, <item:mysticalagriculture:titanium_essence>, <item:mysticalagriculture:titanium_essence>]
]);

// Tech Reborn - Yellow Garnet Gem
craftingTable.addShaped("yellow_garnet_gem_from_essence", <item:techreborn:yellow_garnet_gem> * 2, [
	[<item:mysticalagriculture:chromium_essence>, <item:mysticalagriculture:chromium_essence>, <item:mysticalagriculture:chromium_essence>],
	[<item:mysticalagriculture:chromium_essence>, <item:mysticalagriculture:chromium_essence>, <item:mysticalagriculture:chromium_essence>],
	[<item:mysticalagriculture:chromium_essence>, <item:mysticalagriculture:chromium_essence>, <item:mysticalagriculture:chromium_essence>]
]);

// Tech Reborn - Iridium Ore
craftingTable.addShaped("iridium_ore_from_essence", <item:techreborn:iridium_ore> * 2, [
	[<item:mysticalagriculture:iridium_essence>, <item:mysticalagriculture:iridium_essence>, <item:mysticalagriculture:iridium_essence>],
	[<item:mysticalagriculture:iridium_essence>, <item:mysticalagriculture:iridium_essence>, <item:mysticalagriculture:iridium_essence>],
	[<item:mysticalagriculture:iridium_essence>, <item:mysticalagriculture:iridium_essence>, <item:mysticalagriculture:iridium_essence>]
]);

// Create - Zinc Ore
craftingTable.addShaped("zinc_ore_from_essence", <item:create:zinc_ore> * 2, [
	[<item:mysticalagriculture:zinc_essence>, <item:mysticalagriculture:zinc_essence>, <item:mysticalagriculture:zinc_essence>],
	[<item:mysticalagriculture:zinc_essence>, <item:mysticalagriculture:zinc_essence>, <item:mysticalagriculture:zinc_essence>],
	[<item:mysticalagriculture:zinc_essence>, <item:mysticalagriculture:zinc_essence>, <item:mysticalagriculture:zinc_essence>]
]);

// Unused Essences - Iron Ore from Steel
craftingTable.addShaped("iron_ore_from_steel_essence", <item:minecraft:iron_ore>, [
	[<item:mysticalagriculture:steel_essence>, <item:mysticalagriculture:steel_essence>, <item:mysticalagriculture:steel_essence>],
	[<item:mysticalagriculture:steel_essence>, <item:mysticalagriculture:steel_essence>, <item:mysticalagriculture:steel_essence>],
	[<item:mysticalagriculture:steel_essence>, <item:mysticalagriculture:steel_essence>, <item:mysticalagriculture:steel_essence>]
]);

// Tech Reborn - Invar & Tungsten
craftingTable.addShaped("sheldonite_ore_invar_tungsten", <item:techreborn:sheldonite_ore> * 4, [
	[<item:mysticalagriculture:invar_essence>, <item:mysticalagriculture:invar_essence>, <item:mysticalagriculture:tungsten_essence>],
	[<item:mysticalagriculture:invar_essence>, <item:mysticalagriculture:invar_essence>, <item:mysticalagriculture:tungsten_essence>],
	[<item:mysticalagriculture:invar_essence>, <item:mysticalagriculture:invar_essence>, <item:mysticalagriculture:tungsten_essence>]
]);

// Copper Ore from Electrum
craftingTable.addShaped("copper_ore_from_electrum_essence", <item:minecraft:copper_ore>, [
	[<item:mysticalagriculture:electrum_essence>, <item:mysticalagriculture:electrum_essence>, <item:mysticalagriculture:electrum_essence>],
	[<item:mysticalagriculture:electrum_essence>, <item:mysticalagriculture:electrum_essence>, <item:mysticalagriculture:electrum_essence>],
	[<item:mysticalagriculture:electrum_essence>, <item:mysticalagriculture:electrum_essence>, <item:mysticalagriculture:electrum_essence>]
]);

// Copper Ore from Bronze
craftingTable.addShaped("copper_ore_from_bronze_essence", <item:minecraft:copper_ore> * 3, [
	[<item:mysticalagriculture:bronze_essence>, <item:mysticalagriculture:bronze_essence>, <item:mysticalagriculture:bronze_essence>],
	[<item:mysticalagriculture:bronze_essence>, <item:mysticalagriculture:bronze_essence>, <item:mysticalagriculture:bronze_essence>],
	[<item:mysticalagriculture:bronze_essence>, <item:mysticalagriculture:bronze_essence>, <item:mysticalagriculture:bronze_essence>]
]);

// Copper Ore from Brass
craftingTable.addShaped("copper_ore_from_brass_essence", <item:minecraft:copper_ore> * 3, [
	[<item:mysticalagriculture:brass_essence>, <item:mysticalagriculture:brass_essence>, <item:mysticalagriculture:brass_essence>],
	[<item:mysticalagriculture:brass_essence>, <item:mysticalagriculture:brass_essence>, <item:mysticalagriculture:brass_essence>],
	[<item:mysticalagriculture:brass_essence>, <item:mysticalagriculture:brass_essence>, <item:mysticalagriculture:brass_essence>]
]);

// Copper Ore from Copper
craftingTable.addShaped("copper_ore_from_copper_essence", <item:minecraft:copper_ore> * 2, [
	[<item:mysticalagriculture:copper_essence>, <item:mysticalagriculture:copper_essence>, <item:mysticalagriculture:copper_essence>],
	[<item:mysticalagriculture:copper_essence>, <item:mysticalagriculture:copper_essence>, <item:mysticalagriculture:copper_essence>],
	[<item:mysticalagriculture:copper_essence>, <item:mysticalagriculture:copper_essence>, <item:mysticalagriculture:copper_essence>]
]);