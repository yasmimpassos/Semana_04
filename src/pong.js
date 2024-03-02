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

        this.pontuacaoAzul = 0;
        this.pontuacaoRosa = 0;

        this.playerAzul = this.add.image(50, 300, "playerAzul").setAngle(-90).setScale(0.7);
        this.playerRosa = this.add.image(750, 300, "playerRosa").setAngle(90).setScale(0.7);

        // this.playerAzul.setCollideWorldBounds(true);
        // this.playerRosa.setCollideWorldBounds(true);

        this.add.image(200, 50, "estrelaAzul").setScale(0.8);
        this.add.image(600, 50, "estrelaRosa").setScale(0.8);

        this.placarAzul = this.add.text(190, 35, this.pontuacaoAzul, {fontSize: '35px', fill: '#ffffff'});
        this.placarRosa = this.add.text(590, 35, this.pontuacaoRosa, {fontSize: '35px', fill: '#ffffff'});

        this.add.image(400, 300, "detritos");

        this.planetas = ["planetaAmarelo", "planetaAzul", "planetaBege", "planetaRosa", "planetaTerra", "planetaVermelho"];
        this.aleatorio = Phaser.Math.RND.between(0, 5);

        this.bola = this.add.image(400, 300, this.planetas[this.aleatorio]).setScale(0.5);

        this.teclado = this.input.keyboard.createCursorKeys();

        
    }

    update(){
        if (this.teclado.up.isDown){
            this.playerAzul.y -=10;
        }
        else if (this.teclado.down.isDown){
            this.playerAzul.y +=10;
        }
        
    }
}