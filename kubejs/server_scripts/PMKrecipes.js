ServerEvents.recipes(event => {
  // Remove and replace Mystical Agriculture recipes
  event.remove({ mod: 'mysticalagriculture', output: 'minecraft:iron_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'minecraft:diamond' })
  event.remove({ mod: 'mysticalagriculture', output: 'minecraft:gold_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'minecraft:redstone' })
  event.remove({ mod: 'mysticalagriculture', output: 'minecraft:lapis_lazuli' })
  event.remove({ mod: 'mysticalagriculture', output: 'minecraft:netherite_ingot' })
  
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:aluminum_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:tin_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:silver_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:lead_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:nickel_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:platinum_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:titanium_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:chrome_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:iridium_ingot' })
  
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:bronze_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:brass_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:invar_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:tungsten_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'minecraft:copper_ingot' })
  
  event.remove({ mod: 'mysticalagriculture', output: 'create:zinc_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'create:electrum_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:electrum_ingot' })
  
  event.remove({ mod: 'mysticalagriculture', output: 'ad_astra:steel_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'create:brass_ingot' })
  event.remove({ mod: 'mysticalagriculture', output: 'techreborn:steel_ingot' })

  event.remove({ mod: 'orbital_railgun', output: 'orbital_railgun:orbital_railgun' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_white' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_orange' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_magenta' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_light_blue' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_yellow' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_lime' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_pink' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_gray' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_light_gray' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_cyan' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_purple' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_blue' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_brown' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_green' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_red' })
  event.remove({ mod: 'compact_storage', output: 'compact_storage:backpack_black' })
  event.remove({ mod: 'modern_industrialization', output: 'modern_industrialization:quantum_chestplate' })
  event.remove({ mod: 'modern_industrialization', output: 'modern_industrialization:quantum_sword' })
  event.remove({ mod: 'modern_industrialization', output: 'modern_industrialization:quantum_helmet' })
  event.remove({ mod: 'modern_industrialization', output: 'modern_industrialization:quantum_leggings' })
  event.remove({ mod: 'modern_industrialization', output: 'modern_industrialization:quantum_boots' })
  event.remove({mod: 'neepmeat', output: 'techreborn:aluminum_ingot' })
  event.remove({mod: 'techreborn', output: 'techreborn:aluminum_ingot' })

    event.shaped(Item.of('orbital_railgun:orbital_railgun', 1), [
    'XYX',
    'YVY',
    'OOO'
  ], {
    O: 'industrialupgrade:crafting_elements/crafting_534_element',
    X: 'industrialupgrade:itemingots/orichalcum',
    Y: 'dimdoors:eternal_fluid_bucket',
    V: 'ae2:singularity'
  })
})

