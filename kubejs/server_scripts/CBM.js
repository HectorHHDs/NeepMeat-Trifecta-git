ServerEvents.recipes(event => {
event.recipes.createMixing({ fluid: 'neepmeat:animal_feed', amount: 40500 }, [
  '5x biomancy:nutrient_paste',
  { fluid: 'neepmeat:blood', amount: 20250 }
]).heated()
})
ServerEvents.recipes(event => {
event.recipes.createMixing({ fluid: 'neepmeat:blood', amount: 20250 }, [
  'neepmeat:blood_bubble',
  { fluid: 'minecraft:water', amount: 20250 }
])
})
ServerEvents.recipes(event => {
event.recipes.createMixing({ fluid: 'dimdoors:eternal_fluid', amount: 162000 }, [
  'neepmeat:advanced_integrator',
  'neepmeat:statue',
  { fluid: 'neepmeat:blood', amount: 20250 },
  'industrialupgrade:alloydust/vitalum'
])
})

ServerEvents.recipes(event => {
event.recipes.createMixing('neepmeat:meat_steel_ingot', [
  'neepmeat:raw_meat_brick',
  'minecraft:iron_ingot',
  { fluid: 'minecraft:lava', amount: 8100 }
]).heated()
})
ServerEvents.recipes(event => {
event.recipes.createMixing('neepmeat:whisper_brass_ingot', [
  'neepmeat:whisper_flour',
  'minecraft:copper_ingot',
  { fluid: 'minecraft:lava', amount: 8100 }
]).heated()
})

ServerEvents.recipes(event => {
  const meatToPaste = {
    'minecraft:beef': 3,
    'minecraft:cooked_beef': 8,
    'minecraft:porkchop': 3,
    'minecraft:cooked_porkchop': 8,
    'minecraft:chicken': 2,
    'minecraft:cooked_chicken': 6,
    'minecraft:mutton': 2,
    'minecraft:cooked_mutton': 6,
    'minecraft:salmon': 2,
    'minecraft:cooked_salmon': 6,
    'minecraft:cod': 2,
    'minecraft:cooked_cod': 5,
    'minecraft:rabbit': 3,
    'minecraft:cooked_rabbit': 5,
    'minecraft:tropical_fish': 1,
    'chestcavity:raw_human_organ_meat': 3,
    'chestcavity:cooked_human_organ_meat': 4,
    'chestcavity:raw_man_meat': 3,
    'chestcavity:cooked_man_meat': 4,
    'chestcavity:raw_human_sausage': 5,
    'chestcavity:cooked_human_sausage': 9,
    'chestcavity:raw_rich_human_sausage': 5,
    'chestcavity:cooked_rich_human_sausage': 9,
    'anthropophagy:flesh': 3,
    'anthropophagy:cooked_flesh': 8,
    'anthropophagy:corrupt_flesh': 3,
    'chestcavity:muscle': 2,
    'chestcavity:rotten_appendix': 4,
    'chestcavity:rotten_heart': 4,
    'chestcavity:rotten_intestine': 4,
    'chestcavity:rotten_kidney': 4,
    'chestcavity:rotten_liver': 4,
    'chestcavity:rotten_spleen': 4,
    'chestcavity:rotten_stomach': 4,
    'farmersdelight:minced_beef': 2,
    'farmersdelight:beef_patty': 4,
    'farmersdelight:chicken_cuts': 1,
    'farmersdelight:cooked_chicken_cuts': 3,
    'farmersdelight:bacon': 2,
    'farmersdelight:cooked_bacon': 4,
    'farmersdelight:ham': 5,
    'farmersdelight:cooked_ham': 10,
    'farmersdelight:cod_slice': 1,
    'farmersdelight:cooked_cod_slice': 3,
    'farmersdelight:salmon_slice': 1,
    'farmersdelight:cooked_salmon_slice': 3,
    'farmersdelight:mutton_chops': 1,
    'farmersdelight:cooked_mutton_chops': 3,
    'chestcavity:raw_organ_meat': 2,
    'chestcavity:cooked_organ_meat': 3,
    'chestcavity:raw_butchered_meat': 2,
    'chestcavity:cooked_butchered_meat': 3,
    'chestcavity:raw_alien_organ_meat': 2,
    'chestcavity:cooked_alien_organ_meat': 3,
    'chestcavity:raw_alien_meat': 2,
    'chestcavity:cooked_alien_meat': 3,
    'chestcavity:raw_dragon_organ_meat': 2,
    'chestcavity:cooked_dragon_organ_meat': 3,
    'chestcavity:raw_dragon_meat': 2,
    'chestcavity:cooked_dragon_meat': 3,
    'neepmeat:raw_meat_brick': 2,
    'neepmeat:cooked_meat_brick': 3
  }

  Object.entries(meatToPaste).forEach(([meat, count]) => {
    event.recipes.createMixing(Item.of('biomancy:nutrient_paste', count), [
      meat,
      { fluid: 'neepmeat:work_fluid', amount: 4050 }
    ]).heated()
  })
})
