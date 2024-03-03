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
        this.load.spritesheet('moeda','./assets/pong/moeda.png', {frameWidth: 66, frameHeight: 57});
    }


    create(){
        this.add.image(400, 300, "ceu");

        var posicaoMoedaX = Phaser.Math.RND.between(174, 676);
        var posicaoMoedaY = Phaser.Math.RND.between(50, 550);

        var moeda = this.physics.add.sprite(posicaoMoedaX, posicaoMoedaY, 'moeda');

        // Evento de coletar moedas
        // this.physics.add.overlap(this.bola, moeda, function(){
        //     posicaoMoedaX = Phaser.Math.RND.between(174, 676);
        //     posicaoMoedaY = Phaser.Math.RND.between(50, 550);
        //     this.moeda.setVisible(false);
        //     this.moeda.setPosition(posicaoMoedaX, posicaoMoedaY);

        //     if (movimento === "vindo"){
        //         this.pontosRosa += 1;
        //         this.placarRosa.setText(this.pontosRosa);
        //     } else if (movimento === "indo"){
        //         this.pontosAzul += 1;
        //         this.placarAzul.setText(this.pontosAzul);
        //     }

        //         moeda.setVisible(true);
        //     });

        this.anims.create({
            key: 'girar',
            frames: this.anims.generateFrameNumbers('moeda', { start: 0, end: 5}),
            frameRate: 10, //quantidade de frames em 1 segundo
            repeat: -1 //-1 indica repetição contínua
        });

        //poderia usar apenas passarinho.play??
        moeda.anims.play('girar', true);

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
        this.sentido = (Math.random()> 0.5)?1 :-1;
        this.velocidadeY = Phaser.Math.RND.between(-350, 350);
        this.bola.setVelocity(this.sentido*this.velocidadeX, this.velocidadeY);
        this.bola.setBounce(1);
        this.bola.setCollideWorldBounds(true);

        this.teclado = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.bola, this.playerAzul, this.trocarBolaIndo, null, this);
        this.physics.add.collider(this.bola, this.playerRosa, this.trocarBolaVindo, null, this);

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

        if (this.bola.body.x <= 0){
            this.pontuacaoRosa();
        }
        if (this.bola.body.x >= 745){
            this.pontuacaoAzul();
        }
        this.delay = (this.bola.body.velocity.y > 0)? -100 : 100;
        this.playerRosa.body.velocity.setTo(this.bola.body.velocity.y + this.delay);
        this.playerRosa.setVelocityX(0);
       
    }

    trocarBolaIndo(){
        this.aleatorio = Phaser.Math.RND.between(0, 5);
        this.bola.setTexture(this.planetas[this.aleatorio]);
        var movimento = "indo"
    }

    trocarBolaVindo(){
        this.aleatorio = Phaser.Math.RND.between(0, 5);
        this.bola.setTexture(this.planetas[this.aleatorio]);
        var movimento = "vindo"
    }

    pontuacaoRosa(){
        while(this.pontosRosa < 5){
        this.bola.setPosition(400, 300);
        this.velocidadeY = Phaser.Math.RND.between(-350, 350);
        this.bola.setVelocity(this.velocidadeX, this.velocidadeY)
        this.pontosRosa += 1;
        this.placarRosa.setText(this.pontosRosa);
        }
    
        if (this.pontosRosa = 5){
            const resultado = "perdeu";
            this.pontosRosa = 0;
            this.pontosAzul = 0;
            this.scene.start('GameOver', { resultado: resultado}); // inicia a cena telaCadastro
            this.scene.stop('Pong');
        }
    }

    pontuacaoAzul(){
        while(this.pontosAzul < 5){
        this.bola.setPosition(400, 300);
        this.velocidadeY = Phaser.Math.RND.between(-350, 350);
        this.bola.setVelocity(this.velocidadeX, this.velocidadeY)
        this.pontosAzul += 1;
        this.placarAzul.setText(this.pontosAzul);
        }

        if (this.pontosAzul = 5){
            const resultado = "ganhou";
            this.pontosRosa = 0;
            this.pontosAzul = 0;
            this.scene.start('GameOver', { resultado: resultado}); // inicia a cena telaCadastro
            this.scene.stop('Pong');
        }
    }
}