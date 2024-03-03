class TelaInicial extends Phaser.Scene {
    constructor (){
        super({key: "TelaInicial"})
    }

    preload(){
        this.load.image("fundo", "./assets/pong/ceu.png");
        this.load.image("botao", "./assets/pong/play.png");
    }

    create(){
        this.add.image(400, 300, "fundo");
        this.add.text(190, 170, "Pong Galáctico", {fontSize: '50px', fill: '#ffffff'});
        this.add.text(40, 250, "Para jogar utilize as setas verticais, \n" + 
        "movimentando o personagem azul para cima e para baixo \n" +
        "O jogo acaba quando algum player deixar a bola passar por ele, \n" +
    	"ou quando tiver mais de 5 pontos, \n" +
        "os pontos são feitos ao coletar moedas.", {fontSize: '20px', fill: '#ffffff'})
        this.botao = this.add.image(400, 400, "botao");
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