class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        let menuConfig = {
            fontFamily: 'Comic Sans',
            fontSize: 44,
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
        this.add.text(game.config.width/2, game.config.height/2.75 - borderUISize - borderPadding, '˗ˋˏGOBLIN CITYˎˊ˗', menuConfig).setOrigin(0.5);
        
        menuConfig.color = '#6F8FAF';
        menuConfig.fontSize = 22;
        this.add.text(game.config.width/2, game.config.height/2.4, 'INSTRUCTIONS:', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = 16;
        this.add.text(game.config.width/2, game.config.height/2.1, 'TRY NOT TO DIE', menuConfig).setOrigin(0.5);

        menuConfig.color = '#ADD8E6';
        menuConfig.fontSize = 12;
        this.add.text(game.config.width/2, game.config.height/1.7, 'PRESS (SPACE) TO START', menuConfig).setOrigin(0.5);


        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) { // start game
            this.scene.start('playScene');
        }
    }
}