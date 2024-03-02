class Pong extends Phaser.Scene {
    constructor (){
        super({key: "Pong"})
        // this.planetas;
        // this.aleatorio;
    }

    preload(){
        this.load.image("ceu", "./assets/pong/ceu.png");
        this.load.image("playerAzul", "./assets/pong/players/playerAzul.png");
        this.load.image("playerRosa", "./assets/pong/players/playerRosa.png");
        this.load.image("estrelaAzul", "./assets/pong/estrelas/estrelaAzul.png");
        this.load.image("estrelaRosa", "./assets/pong/estrelas/estrelaRosa.png");
        this.load.image("detritos", "./assets/pong/detritos.png");
        this.load.image("planetaAmarelo", "./assets/pong/planetas/planetaAmarelo.png");
        this.load.image("planetaAzul", "./assets/pong/planetas/planetaAzul.png");
        this.load.image("planetaBege", "./assets/pong/planetas/planetaBege.png");
        this.load.image("planetaRosa", "./assets/pong/planetas/planetaRosa.png");
        this.load.image("planetaTerra", "./assets/pong/planetas/planetaTerra.png");
        this.load.image("planetaVermelho", "./assets/pong/planetas/planetaVermelho.png");
    }

    create(){
        this.add.image(400, 300, "ceu");
        this.add.image(50, 300, "playerAzul").setAngle(-90).setScale(0.7);
        this.add.image(750, 300, "playerRosa").setAngle(90).setScale(0.7);
        this.add.image(200, 50, "estrelaAzul").setScale(0.8);
        this.add.image(600, 50, "estrelaRosa").setScale(0.8);
        this.add.image(400, 300, "detritos");
        // this.planetas = ["planetaAmarelo", "planetaAzul", "planetaBege", "planetaRosa", "planetaTerra", "planetaVermelho"];
        // this.aleatorio = 0;
        this.add.image(400, 300, "planetaAzul").setScale(0.5);

        
    }

    update(){
        
    }
}