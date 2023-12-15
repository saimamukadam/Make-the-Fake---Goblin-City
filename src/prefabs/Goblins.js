class Goblins extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, direction) {
        super(scene, x, y, texture, frame) // call Sprite parent class
        scene.add.existing(this) // add Hero to existing scene
        scene.physics.add.existing(this) // add physics body to scene

        this.body.setSize(this.width / 2, this.height / 2)
        this.body.setCollideWorldBounds(true)

        // set custom Goblin properties
        this.direction = direction 
        this.goblinVelocity = 50    // in pixels
    }

    update(){
        //move goblins

        this.goblin1.position.y -= 50;
        // wrap around
        if(this.goblin1.position.x <= 0 - this.goblin1.width) {
            this.reset();
        }

        this.goblin2.position.x += 50;
        // wrap around
        if(this.goblin2.position.x <= 0 - this.goblin2.width) {
            this.reset();
        }

        this.goblin3.position.x -= 50;
        // wrap around
        if(this.goblin3.position.x <= 0 - this.goblin3.width) {
            this.reset();
        }

        this.goblin4.position.y += 50;
        // wrap around
        if(this.goblin4.position.x <= 0 - this.goblin4.width) {
            this.reset();
        }
    }

}