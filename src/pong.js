class Pong extends Phaser.Scene {
    constructor (){
        super({key: "Pong"})
        this.planetas;
        this.aleatorio;
        this.bola;
        this.placarAzul;
        this.placarRosa;
        this.playerAzul;
        this.playerRosa;
        this.pontosAzul = 0;
        this.pontosRosa = 0;
        this.teclado;
        this.velocidadeX = 350;
        this.velocidadeY;
        this.sentido;
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

        this.playerAzul = this.physics.add.sprite(50, 300, "playerAzul").setScale(0.7);
        this.playerRosa = this.physics.add.sprite(750, 300, "playerRosa").setScale(0.7);

        this.playerAzul.setCollideWorldBounds(true);
        this.playerRosa.setCollideWorldBounds(true);

        this.playerAzul.setImmovable(true);
        this.playerRosa.setImmovable(true);

        this.add.image(200, 50, "estrelaAzul").setScale(0.8);
        this.add.image(600, 50, "estrelaRosa").setScale(0.8);

        this.placarAzul = this.add.text(190, 35, this.pontosAzul, {fontSize: '35px', fill: '#ffffff'});
        this.placarRosa = this.add.text(590, 35, this.pontosRosa, {fontSize: '35px', fill: '#ffffff'});

        this.add.image(400, 300, "detritos");

        this.planetas = ["planetaAmarelo", "planetaAzul", "planetaBege", "planetaRosa", "planetaTerra", "planetaVermelho"];
        this.aleatorio = Phaser.Math.RND.between(0, 5);

        this.bola = this.physics.add.sprite(400, 300, this.planetas[this.aleatorio]).setScale(0.5);
        this.sentido = Phaser.Math.RND.between(-1, 1);
        this.velocidadeY = Phaser.Math.RND.between(-350, 350);
        this.bola.setVelocity(this.sentido*this.velocidadeX, this.velocidadeY);
        this.bola.setBounce(1);
        this.bola.setCollideWorldBounds(true);

        this.teclado = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.bola, this.playerAzul, this.trocarBola, null, this);
        this.physics.add.collider(this.bola, this.playerRosa, this.trocarBola, null, this);

        
    }

    update(){
        if (this.teclado.up.isDown){
            this.playerAzul.setVelocityY(-this.velocidadeX);
        }
        else if (this.teclado.down.isDown){
            this.playerAzul.setVelocityY(this.velocidadeX);
        }
        else {
            this.playerAzul.setVelocity(0);
        }

        if (this.bola.setVelocity > this.velocidadeX) {
            this.bolsa.setVelocity(this.velocidadeX);
        } else if (this.bola.setVelocity < -this.velocidadeX) {
            this.bola.setVelocity(-this.velocidadeX);
        }

        if (this.bola.body.x < this.playerAzul.body.x){
            this.pontuacaoRosa();
        }
        if (this.bola.body.x > this.playerRosa.body.x){
            this.pontuacaoAzul();
        }

        // this.playerRosa.setPositionY(this.bola.setPositionY);
        // // if(this.bola.blocked.left){
        // //     console.log(1)
        // // }

        
    }

    trocarBola(){
        this.aleatorio = Phaser.Math.RND.between(0, 5);
        this.bola.setTexture(this.planetas[this.aleatorio]);
    }

    pontuacaoRosa(){
        this.bola.setPosition(400, 300);
        this.velocidadeY = Phaser.Math.RND.between(-350, 350);
        this.bola.setVelocity(this.velocidadeX, this.velocidadeY)
        this.pontosRosa += 1;
        this.placarRosa.setText(this.pontosRosa);
    }
    pontuacaoAzul(){
        this.bola.setPosition(400, 300);
        this.velocidadeY = Phaser.Math.RND.between(-350, 350);
        this.bola.setVelocity(this.velocidadeX, this.velocidadeY)
        this.pontosAzul += 1;
        this.placarAzul.setText(this.pontosAzul);
    }
}