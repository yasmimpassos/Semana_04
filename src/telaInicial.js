class TelaInicial extends Phaser.Scene {
    constructor (){
        super({key: "TelaInicial"})
    }

    preload(){
        this.load.image("fundo", "./assets/pong/ceu.png");
        this.load.image("botao", "./assets/pong/botao.png");
    }

    create(){
        this.add.image(400, 300, "fundo");
        this.add.text(190, 250, "Pong Galáctico", {fontSize: '50px', fill: '#ffffff'});
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
    }

    update(){

    }
}