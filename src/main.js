// "GOBLIN CITY"
// ...a remake of the fake game from Yu Yu Hakusho
// Designed by: Saima Mukadam
// Started on: 12/3/23

// Background Music: https://www.chosic.com/free-music/all/ 
// Sound Effects: floraphonic and Pixabay

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
    scene: [ Menu, Load, Play ]
}

const game = new Phaser.Game(config)

let cursors
let { height, width } = game.config

// reserve keyboard vars
let keySPACE;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;