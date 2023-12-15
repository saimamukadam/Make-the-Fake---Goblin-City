class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    preload(){
        // load visuals
        this.load.path = './assets/' // saves typing

        // temp hero sprite
        this.load.spritesheet('hero', 'hero-sheet.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        // goblin sprite
        this.load.spritesheet('goblin', 'goblin-sheet.png', {
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

        this.sound.play('laugh', {volume: 4.5}); // made it louder than bg music so player can get chills
        this.sound.play('bgmusic');

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

        // goblin animations: walking
        this.anims.create({
            key: 'goblin-walk-down',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('goblin', { start: 0, end: 3 }),
        })
        this.anims.create({
            key: 'goblin-walk-right',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('goblin', { start: 4, end: 7 }),
        })
        this.anims.create({
            key: 'goblin-walk-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('goblin', { start: 8, end: 11 }),
        })
        this.anims.create({
            key: 'goblin-walk-up',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('goblin', { start: 12, end: 15 }),
        })


        // add background image
        this.map = this.add.image(0,0, 'map').setOrigin(0)

        // add new Hero to scene (scene, x, y, key, frame, direction)
        this.hero = new Hero(this, 200, 150, 'hero', 0, 'down')

        this.goblin1 = new Goblins(this, 100, 50, 'goblin')
        this.goblin2 = new Goblins(this, 50, 100, 'goblin')
        this.goblin3 = new Goblins(this, 350, 275, 'goblin')
        this.goblin4 = new Goblins(this, 500, 400, 'goblin')

        this.goblin1.play('goblin-walk-down')
        this.goblin2.play('goblin-walk-right')
        this.goblin3.play('goblin-walk-left')
        this.goblin4.play('goblin-walk-up')


        this.cameras.main.setBounds(0, 0, this.map.width, this.map.height)
        this.cameras.main.startFollow(this.hero, false, 0.5, 0.5) // normalized btwn lag and cam following exactly

        this.physics.world.setBounds(0, 0, this.map.width, this.map.height)

        // setup keyboard input
        this.keys = this.input.keyboard.createCursorKeys()
        this.keys.HKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H)
        this.keys.FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)

        // enable scene reload key
        this.reload = this.input.keyboard.addKey('R')


        // debug key listener (assigned to D key)
        /*
        this.input.keyboard.on('keydown-D', function() {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }, this)
        */

        // update instruction text
        document.getElementById('info').innerHTML = '<strong> Arrows: move | SPACE: attack | SHIFT: dash attack | F: spin attack | H: hurt (knockback) | R: restart </strong>'

    }

    update(){

        // scene switching / restart
        if(Phaser.Input.Keyboard.JustDown(this.reload)) {
            this.scene.restart()
        }
        // make sure we step (ie update) the hero's state machine
        this.heroFSM.step()
        //this.goblinFSM.step()
    }
}