// "GOBLIN CITY"
// ...a remake of the fake game from Yu Yu Hakusho
// Designed by: Saima Mukadam
// Started on: 12/3/23

// PHASER'S MAJOR COMPONENTS
// 1. Finite State Machines
// 2. Cameras
// 3. Physics systems (Arcade)
// 4. animations
// 5. 

// PREMISE:
//  - The Hero is in a goblin-infested swamp and must kill all goblins to win. If a goblin touches the Hero, the
//    Hero dies and GAME OVER screen plays. If the Hero wins, a YOU WIN screen plays

// Background Music: Chosic
// Sound Effects: Pixabay

// what I just finished: "whoosh" sound effects on Swing state and Circular swing state
// where I left off: 

'use strict'

const config = {
    parent: 'phaser-game',  // for info text
    type: Phaser.WEBGL,     // for tinting
    width: 400,
    height: 300,
    pixelArt: true,
    zoom: 2,
    physics: {
        default: "arcade",
        arcade: {
            //debug: true
        }
    },
    scene: [ Menu, Play ]
}

const game = new Phaser.Game(config)

let cursors
let { height, width } = game.config

// reserve keyboard vars
let keySPACE;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;