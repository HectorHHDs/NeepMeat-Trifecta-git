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
  
  event.remove({ mod: 'mysticalagriculture', output: 'ad_astra:steel_ingot' })

  event.remove({ mod: 'orbital_railgun_enhanced', output: 'orbital_railgun_enhanced:orbital_railgun' })

    event.shaped(Item.of('orbital_railgun_enhanced:orbital_railgun', 1), [
    'XYX',
    'YVY',
    'OOO'
  ], {
    O: 'techreborn:uu_matter',
    X: 'mysticalagriculture:awakened_supremium_essence',
    Y: 'ae2:spatial_cell_component_16',
    V: 'ae2:singularity'
  })

  // Add replacement crafting recipes for ore variants
  event.shaped(Item.of('minecraft:iron_ore', 2), [
    'III',
    'III',
    'III'
  ], {
    I: 'mysticalagriculture:iron_essence'
  })

  event.shaped(Item.of('minecraft:diamond_ore', 1), [
    'DDD',
    'DDD',
    'DDD'
  ], {
    D: 'mysticalagriculture:diamond_essence'
  })

  event.shaped(Item.of('minecraft:gold_ore', 1), [
    'GGG',
    'GGG',
    'GGG'
  ], {
    G: 'mysticalagriculture:gold_essence'
  })

  event.shaped(Item.of('minecraft:redstone_ore', 2), [
    'RRR',
    'RRR',
    'RRR'
  ], {
    R: 'mysticalagriculture:redstone_essence'
  })

  event.shaped(Item.of('minecraft:lapis_ore', 2), [
    'LLL',
    'LLL',
    'LLL'
  ], {
    L: 'mysticalagriculture:lapis_lazuli_essence'
  })

  event.shaped(Item.of('minecraft:ancient_debris', 1), [
    'NNN',
    'NNN',
    'NNN'
  ], {
    N: 'mysticalagriculture:netherite_essence'
  })

  // Tech Reborn replacement recipes
  event.shaped(Item.of('techreborn:sodalite_ore', 2), [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'mysticalagriculture:aluminum_essence'
  })

  event.shaped(Item.of('techreborn:tin_ore', 2), [
    'TTT',
    'TTT',
    'TTT'
  ], {
    T: 'mysticalagriculture:tin_essence'
  })

  event.shaped(Item.of('techreborn:silver_ore', 1), [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: 'mysticalagriculture:silver_essence'
  })

  event.shaped(Item.of('techreborn:lead_ore', 2), [
    'LLL',
    'LLL',
    'LLL'
  ], {
    L: 'mysticalagriculture:lead_essence'
  })

  event.shaped(Item.of('techreborn:sheldonite_ore', 2), [
    'NNN',
    'NNN',
    'NNN'
  ], {
    N: 'mysticalagriculture:nickel_essence'
  })

  event.shaped(Item.of('techreborn:sheldonite_ore', 3), [
    'PPP',
    'PPP',
    'PPP'
  ], {
    P: 'mysticalagriculture:platinum_essence'
  })

  event.shaped(Item.of('techreborn:bauxite_ore', 2), [
    'TTT',
    'TTT',
    'TTT'
  ], {
    T: 'mysticalagriculture:titanium_essence'
  })

  event.shaped(Item.of('techreborn:yellow_garnet_gem', 2), [
    'CCC',
    'CCC',
    'CCC'
  ], {
    C: 'mysticalagriculture:chromium_essence'
  })

  event.shaped(Item.of('techreborn:iridium_ore', 2), [
    'III',
    'III',
    'III'
  ], {
    I: 'mysticalagriculture:iridium_essence'
  })

  // Create replacement recipes
  event.shaped(Item.of('create:zinc_ore', 2), [
    'ZZZ',
    'ZZZ',
    'ZZZ'
  ], {
    Z: 'mysticalagriculture:zinc_essence'
  })

  // Recipes for unused essences
  event.shaped(Item.of('minecraft:iron_ore', 1), [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: 'mysticalagriculture:steel_essence'
  })

  event.shaped(Item.of('techreborn:sheldonite_ore', 4), [
    'IIB',
    'IIB',
    'IIB'
  ], {
    I: 'mysticalagriculture:invar_essence',
    B: 'mysticalagriculture:tungsten_essence'
  })

  event.shaped(Item.of('minecraft:copper_ore', 1), [
    'EEE',
    'EEE',
    'EEE'
  ], {
    E: 'mysticalagriculture:electrum_essence'
  })

  event.shaped(Item.of('minecraft:copper_ore', 3), [
    'BBB',
    'BBB',
    'BBB'
  ], {
    B: 'mysticalagriculture:bronze_essence'
  })

  event.shaped(Item.of('minecraft:copper_ore', 3), [
    'BBB',
    'BBB',
    'BBB'
  ], {
    B: 'mysticalagriculture:brass_essence'
  })
  event.shaped(Item.of('minecraft:copper_ore', 2), [
    'BBB',
    'BBB',
    'BBB'
  ], {
    B: 'mysticalagriculture:copper_essence'
  })
})