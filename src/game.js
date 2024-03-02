var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Pong, TelaInicial],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: false },
            debug: false
        }
    }
};

var game = new Phaser.Game(config);