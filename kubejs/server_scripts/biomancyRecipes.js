ServerEvents.recipes(event => {
  // 1. Sinews
  event.shapeless('2x biomancy:mob_sinew', [
    'minecraft:porkchop',
    'minecraft:string'
  ]).id('kubejs:sinewss')

  // 2. Marrow (Damages Wooden Axe)
  event.shapeless('2x biomancy:mob_marrow', [
    'minecraft:bone',
    'minecraft:wooden_axe'
  ]).damageIngredient('minecraft:wooden_axe')
    .id('kubejs:marrow')

  // 3. Withered Marrow (Damages Stone Axe)
  event.shapeless('4x biomancy:withered_mob_marrow', [
    'minecraft:wither_skeleton_skull',
    'minecraft:stone_axe'
  ]).damageIngredient('minecraft:stone_axe')
    .id('kubejs:warrow')

  // 4. Mob Gland
  event.shapeless('2x biomancy:mob_gland', [
    'minecraft:spider_eye',
    'minecraft:string'
  ]).id('kubejs:ggland')

  // 5. Toxin Gland
  event.shapeless('1x biomancy:toxin_gland', [
    'minecraft:fermented_spider_eye',
    'minecraft:wheat_seeds'
  ]).id('kubejs:tgland')

  // 6. Volatile Gland
  event.shapeless('1x biomancy:volatile_gland', [
    'minecraft:gunpowder',
    'minecraft:blaze_powder'
  ]).id('kubejs:vgland')

  // 7. Claws (Damages Shears)
  event.shapeless('2x biomancy:mob_claw', [
    'minecraft:bone',
    'minecraft:shears'
  ]).damageIngredient('minecraft:shears')
    .id('kubejs:clawss')

  // 8. Flesh Bits
  event.shapeless('3x biomancy:flesh_bits', [
    'minecraft:porkchop',
    'minecraft:rotten_flesh'
  ]).id('kubejs:fleshyle')

  // 9. Bone Fragments (Damages Wooden Axe)
  event.shapeless('5x biomancy:bone_fragments', [
    'minecraft:bone',
    'minecraft:bone',
    'minecraft:wooden_axe'
  ]).damageIngredient('minecraft:wooden_axe')
    .id('kubejs:fragsment')

  // 10. Elastic Fibers
  event.shapeless('2x biomancy:elastic_fibers', [
    'minecraft:porkchop',
    'minecraft:string',
    'minecraft:porkchop',
    'minecraft:string',
    'minecraft:string'
  ]).id('kubejs:fibery')

  // 11. Mineral Fragment (Damages Stone Pickaxe)
  event.shapeless('2x biomancy:mineral_fragment', [
    'minecraft:iron_ingot',
    'minecraft:stone_pickaxe'
  ]).damageIngredient('minecraft:stone_pickaxe')
    .id('kubejs:angryfragee')

  // 12. Mob Fang (Damages Shears)
  event.shapeless('2x biomancy:mob_fang', [
    'minecraft:bone',
    'minecraft:bone',
    'minecraft:shears'
  ]).damageIngredient('minecraft:shears')
    .id('kubejs:fangy')
})