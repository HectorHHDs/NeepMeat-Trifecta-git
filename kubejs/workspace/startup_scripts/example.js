// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', event => {
  event.create('token').displayName('Trifecta Token').maxStackSize(16).glow(true).fireResistant(true).tooltip('Seems to be a medium for transmutation')
})

