ServerEvents.tick(event => {
    if (event.server.tickCount % 50 != 0) return;

    event.server.players.forEach(player => {
        if (!player.persistentData.firstj) {
            player.persistentData.firstj = true;
            fadeWelcomeUI(player, 0, 5); 
        }
    });
});

function fadeWelcomeUI(player, alpha, step) {
    // Text Alpha (00-FF)
    let textHexAlpha = Math.floor(alpha).toString(16).padStart(2, '0');
    
    // Background Alpha (Scales 0-255 input to 0-230 for 90% max darkness)
    let bgAlphaDecimal = Math.floor(alpha * (180 / 255)); 
    let bgHexAlpha = bgAlphaDecimal.toString(16).padStart(2, '0');

    player.paint({
        // 1. The Overlay: Changed type to 'rectangle' for better 1.20.1 compatibility
        background_overlay: {
            type: 'rectangle',
            x: 0, y: 0,
            w: '$screenW', // Stretch to full screen width
            h: '$screenH', // Stretch to full screen height
            color: `#${bgHexAlpha}000000`, // Pure black with dynamic transparency
            draw: 'always'
        },
        // 2. The Text Elements
        welcome_top: {
            type: 'text', text: 'Welcome to N.E.E.P. Trifecta',
            scale: 2.5, color: `#${textHexAlpha}ff0000`,
            alignX: 'center', alignY: 'center', y: -40, draw: 'always'
        },
        welcome_bottom: {
            type: 'text', text: "Thank you for playing, " + player.username,
            scale: 1.5, color: `#${textHexAlpha}ffffff`,
            alignX: 'center', alignY: 'center', y: 0, draw: 'always'
        },
        welcome_info: {
            type: 'text', text: "Please remember to go into the \"MORE\" tab when generating your world to configure lostcities to \"rarecities\" for the intended experience.",
            scale: 0.8, color: `#${textHexAlpha}ffffff4b`,
            alignX: 'center', alignY: 'center', y: 40, draw: 'always'
        }
    });

    let nextAlpha = alpha + step;

    if (step > 0 && nextAlpha >= 255) {
        player.server.scheduleInTicks(100, () => fadeWelcomeUI(player, 255, -5));
    } 
    else if (step < 0 && nextAlpha <= 0) {
        player.paint({ 
            welcome_top: { remove: true }, 
            welcome_bottom: { remove: true }, 
            welcome_info: { remove: true },
            background_overlay: { remove: true }
        });
    } 
    else {
        player.server.scheduleInTicks(1, () => fadeWelcomeUI(player, nextAlpha, step));
    }
}
