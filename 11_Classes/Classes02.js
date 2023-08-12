class Jogador {
    constructor(nome, posicao, numGol){
        this.nome = nome
        this.posicao = posicao
        this.numGol = numGol
    }
    golsMarcados(){
        console.log(`O ${this.nome} já marcou ${this.numGol} gols em sua carreira`)
    }
}

const Neymar = new Jogador("Neymar", "Atacante", 400)
Neymar.golsMarcados()
const Rogerio = new Jogador("Rogério", "Meio Camp", 80)
Rogerio.golsMarcados()
const Marcelo = new Jogador("Marcelo", "Zagueiro", 200)
Marcelo.golsMarcados()