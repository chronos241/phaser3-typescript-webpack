import 'phaser';

import TestScene from './scenes/PlayScene';
import serviceworker from './serviceworker/Initializer';

serviceworker.Initializer.init();

const config:GameConfig = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 540,
    height: 960,
    resolution: 1, 
    backgroundColor: "#EDEEC9",
    scene: [
      TestScene
    ]
};

new Phaser.Game(config);
