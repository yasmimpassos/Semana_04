class GameOver extends Phaser.Scene {
    constructor (){
        super({key: "GameOver"})
    }
    init(data) {
        this.resultado = data.resultado;
    }

    preload(){
        this.load.image("fundo", "./assets/pong/ceu.png");
        this.load.image("botao", "./assets/pong/restart.png");
    }

    create(){
        this.add.image(400, 300, "fundo");
        this.botao = this.add.image(400, 350, "botao");
        this.botao.setInteractive();

        this.botao.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
          });

        this.botao.on("pointerout", () => {
            this.input.setDefaultCursor("default");
          });
          
        this.botao.on("pointerdown", () => {
            this.scene.start('Pong');
            this.scene.stop('TelaInicial');
                });
            
        if (this.resultado === "ganhou"){
            this.add.text(240, 250, "Você ganhou", {fontSize: '50px', fill: '#ffffff'});
        }
        if (this.resultado === "perdeu"){
            this.add.text(240, 250, "Você perdeu", {fontSize: '50px', fill: '#ffffff'});
        }
    }
    
    update(){

    }
}