class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        let menuConfig = {
            fontFamily: 'Comic Sans',
            fontSize: 42,
            backgroundColor: '#000000',
            color: '#088F8F', // #6495ED
            align: 'center',
            padding: {
                top: 0,
                bottom: 0,
            },
            fixedWidth: 0
        }

        // menu text
        this.add.text(game.config.width/2, game.config.height/3.3 - borderUISize - borderPadding, '˗ˋˏGOBLIN CITYˎˊ˗', menuConfig).setOrigin(0.5);
        
        menuConfig.color = '#6F8FAF';
        menuConfig.fontSize = 16;
        this.add.text(game.config.width/2, game.config.height/2.75, 'INSTRUCTIONS:', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = 12;
        this.add.text(game.config.width/2, game.config.height/2.35, 'KILL GOBLINS, TRY NOT TO DIE', menuConfig).setOrigin(0.5);

        menuConfig.fontSize = 16;
        this.add.text(game.config.width/2, game.config.height/1.95, 'CONTROLS:', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = 11;
        this.add.text(game.config.width/2, game.config.height/1.75, 'ARROW KEYS TO MOVE | SPACE/SHIFT/F TO ATTACK | R TO RESTART', menuConfig).setOrigin(0.5);

        menuConfig.color = '#ADD8E6';
        menuConfig.fontSize = 11;
        this.add.text(game.config.width/2, game.config.height/1.52, '♱ PRESS (SPACE) TO START ♱', menuConfig).setOrigin(0.5);

        menuConfig.color = '#D3D3D3';
        menuConfig.fontSize = 9;
        this.add.text(game.config.width/2, game.config.height/1.33, '🕷 REMAKE OF THE FAKE GAME FROM YU YU HAKUSHO 🕷', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.245, 'DESIGNED BY: SAIMA MUKADAM', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.17, 'MUSIC BY: CHOSIC', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.11, 'ASSETS BY: OSMOSE AND PIXELJAMJAR', menuConfig).setOrigin(0.5);


        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) { // start game
            this.scene.start('playScene');
        }
    }
}