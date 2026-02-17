EntityEvents.spawned('minecraft:player', event => {
    // run logic immediately when they join or change dimensions
})

ServerEvents.tick(event => {
    // Only run every 100 ticks (5 seconds)
    if (event.server.tickCount % 100 == 0) {
        
        event.server.players.forEach(player => {
            // Check if player is in Limbo
            if (player.level.dimension == 'dimdoors:limbo') {
                
                let isRestricted = player.tags.contains('restricted')
                let lacksRailgun = !player.inventory.contains('orbital_railgun:orbital_railgun')

                // If either condition is true, banish them
                if (isRestricted || lacksRailgun) {
                    
                    // 1. Teleport to Overworld (Y=400)
                    player.teleportTo('minecraft:overworld', 0, 400, 0, 0, 0)
                    
                    // 2. Apply Effects
                    player.potionEffects.add('minecraft:darkness', 200, 0, false, false)
                    event.server.runCommandSilent(`execute at ${player.username} run playsound dimdoors:white_void player ${player.username} ~ ~ ~ 1 1`)
                    
                    // 3. Notify Player based on the specific reason
                    if (isRestricted) {
                        player.tell(Text.red('The Ancient One is retreating...'))
                    } else if (lacksRailgun) {
                        player.tell(Text.red('You do not meet the requirements to meet The Ancient One.'))
                    }
                }
            }
        })
    }
})


ItemEvents.rightClicked('orbital_railgun:orbital_railgun', event => {
    const { player, level } = event
    
    // Only start the timer if they are in Limbo and don't have a timer/tag yet
    if (level.dimension == 'dimdoors:limbo') {
        if (!player.persistentData.limboTimer && !player.tags.contains('restricted')) {
            player.persistentData.limboTimer = 2400 // 120 seconds
            player.tell(Text.darkRed("The Ancient One has noticed your presence."))
        }
    }
})

// 2. The Global Countdown (Still required to process the time)
PlayerEvents.tick(event => {
    const { player } = event

    if (player.persistentData.limboTimer > 0) {
        player.persistentData.limboTimer--

        // UI Feedback
        if (player.level.dimension == 'dimdoors:limbo' && player.persistentData.limboTimer % 20 == 0) {
            let secondsLeft = Math.ceil(player.persistentData.limboTimer / 20)
            player.setStatusMessage(Text.warning(`⚠️ Extraction in: ${secondsLeft}`))
        }

        // Apply Restriction
        if (player.persistentData.limboTimer <= 0) {
            player.addTag('restricted')
            player.teleportTo('minecraft:overworld', 0, 400, 0, 0, 0)
                    
            // 2. Apply Effects
            player.potionEffects.add('minecraft:darkness', 200, 0, false, false)
            player.playSound('dimdoors:white_void')
            player.tell(Text.red('The Ancient One\'s manifestation has weakened...'))
            player.persistentData.limboTimer = null
        }
    }
})

FTBQuestsEvents.customReward('1FCB9624194532DD', event => {
    const { player, server } = event
    const sounds = ['1', '9', '5', '3']

    // 1. Show the text
    player.paint({
        mkultra_text: {
            type: 'text',
            text: 'Sequence Started',
            x: 0, y: -20,
            scale: 1.5, // Optional: makes it slightly larger
            alignX: 'center', alignY: 'center',
            draw: 'ingame'
        }
    })
    
    // 2. Play the sounds
    sounds.forEach((sound, index) => {
        event.server.scheduleInTicks(index * 20, _ => {
            // Using the exact command you confirmed works
            event.server.runCommandSilent(`execute at ${player.username} run playsound neepmeat:repeater/english/${sound} player ${player.username} ~ ~ ~ 1 1`)
        })
    })

    // 3. Remove the text after the sequence is finished
    // (Last sound starts at 60 ticks, so we remove at 80 ticks / 4 seconds)
    event.server.scheduleInTicks(80, _ => {
        player.paint({mkultra_text: {visible: false}})
        // OR use the direct remove method:
        // player.paint.remove('mkultra_text')
    })
})

FTBQuestsEvents.customReward('0EAAC37EA3935403', event => {
    const { player, server } = event
    const sounds = ['1', '9', '7', '3']

    // 1. Show the text
    player.paint({
        mkultra_text: {
            type: 'text',
            text: 'Sequence Ending',
            x: 0, y: -20,
            scale: 1.5, // Optional: makes it slightly larger
            alignX: 'center', alignY: 'center',
            draw: 'ingame'
        }
    })
    
    // 2. Play the sounds
    sounds.forEach((sound, index) => {
        event.server.scheduleInTicks(index * 20, _ => {
            // Using the exact command you confirmed works
            event.server.runCommandSilent(`execute at ${player.username} run playsound neepmeat:repeater/english/${sound} player ${player.username} ~ ~ ~ 1 1`)
        })
    })

    // 3. Remove the text after the sequence is finished
    // (Last sound starts at 60 ticks, so we remove at 80 ticks / 4 seconds)
    event.server.scheduleInTicks(80, _ => {
        player.paint({mkultra_text: {visible: false}})
        // OR use the direct remove method:
        // player.paint.remove('mkultra_text')
    })
})