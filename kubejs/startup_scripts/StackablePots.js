ItemEvents.modification(event => {
    // List all potion types you want to stack (e.g., 16 or 64)
    const potions = [
        'minecraft:potion',
        'minecraft:splash_potion',
        'minecraft:lingering_potion'
    ];

    potions.forEach(potionId => {
        event.modify(potionId, item => {
            item.maxStackSize = 16; // Sets them to stack like Ender Pearls
        });
    });
});
