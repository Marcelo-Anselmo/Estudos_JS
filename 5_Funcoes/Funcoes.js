function presente (dinheiro, valor) {
    if(dinheiro < valor) {
        return "Não vai dar pra comprar"
    }else {
        return "Você precisa realmente fazer essa compra?"
    }
}

let r = presente(100, 90)
console.log(r)
