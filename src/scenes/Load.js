class Load extends Phaser.Scene {
    /*
    constructor() {
        super('loadScene')
    }

    preload(){
        // load visuals
        this.load.path = './assets/' // saves typing

        // temp hero sprite
        this.load.spritesheet('hero', 'hero-sheet.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        // temp swamp background
        this.load.image('map', 'swamp.jpg')

        // load background music
        this.load.audio('bgmusic', 'GhostSurfRock.wav')

        // load sound effects
        this.load.audio('laugh', 'possessed-laugh.wav')
        this.load.audio('whoosh1', 'metal-whoosh.wav') // these metal whoosh sounds remind me of Hollow Knight
        this.load.audio('whoosh2', 'long-metal-whoosh.wav') // ^

    }
    
    create(){
        // hero animations: walking
        this.anims.create({
            key: 'walk-down',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
        })
        this.anims.create({
            key: 'walk-right',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('hero', { start: 4, end: 7 }),
        })
        this.anims.create({
            key: 'walk-up',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('hero', { start: 8, end: 11 }),
        })
        this.anims.create({
            key: 'walk-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('hero', { start: 12, end: 15 }),
        })

        // hero animations: swinging
        this.anims.create({
            key: 'swing-down',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('hero', { start: 16, end: 19 }),
        })
        this.anims.create({
            key: 'swing-up',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('hero', { start: 20, end: 23 }),
        })
        this.anims.create({
            key: 'swing-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('hero', { start: 24, end: 27 }),
        })
        this.anims.create({
            key: 'swing-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('hero', { start: 28, end: 31 }),
        })

        // hero animations: circular attack
        this.anims.create({
            key: 'circular-attack',
            frameRate: 24,
            repeat: 0, // animation does not repeat
            frames: this.anims.generateFrameNumbers('hero', {
                frames: [16, 16, 16, 17, 18, 24, 25, 26, 21, 22, 30, 29, 28, 18, 19, 19, 19]
            })
        })

        // proceed once loading completes
        this.scene.start('playScene')
        this.sound.play('laugh', {volume: 4.5}); // made it louder than bg music so player can get chills
        this.sound.play('bgmusic');
    }
    */
}