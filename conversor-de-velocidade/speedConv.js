function convertSpeed() {
    //pegar dados do input.
    var num = document.getElementById("num")
    //converter para Number.
    var n = Number(num.value)
    //Fazer a conta e obter o resultado.
    var result = n / 3.6
    //pegar as informações da id resposta.
    var res = document.getElementById("resposta")
    //Editar os dados já presentes no id resposta, e preenche com os novos dados desejados.
    res.innerHTML = `A sua velocidade é de ${n} KM/h e de ${result.toFixed(2)} m/s`
}