const bolsa = [
    "Notebook",
    "Mouse",
    "MousePad",
    "Celular",
    "Escova de Dentes",
    "Carregador",
    "Carteira"
]

for(let i = 0; i < bolsa.length; i = i++) {
    console.log(bolsa[i])
    if(bolsa[i] == "Carteira") break
}