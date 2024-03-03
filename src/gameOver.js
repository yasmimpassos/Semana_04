class GameOver extends Phaser.Scene {
    constructor (){
        super({key: "GameOver"})
    }

    preload(){

    }

    create(){
        this.add.text(200, 300, "Você perdeu", {fontSize: '50px', fill: '#ffffff'});
    }

    update(){

    }
}