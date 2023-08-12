// let jogador = {
//     nome: "Neymar",
//     posicao: "Atacante",
//     numGols: 400
// }

const Jogador = function(nome, posicao, numGols) {
    Nome = nome,
    Posicao = posicao,
    Gols = numGols

    this.getNome = function(){
        return Nome
    }
    this.getPos = function(){
        return Posicao
    }
    this.getGol = function(){
        return Gols
    }
}

const Neymar = new Jogador("Neymar", "Atacante", 400)
console.log(Neymar.getNome())
const Renato = new Jogador("Renato", "Meio campo", 80)
console.log(Renato.getNome())
