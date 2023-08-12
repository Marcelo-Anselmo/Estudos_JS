        const peso = parseFloat(prompt("Qual o seu peso atual: "))
        const altura = parseFloat(prompt("Qual a sua altura atual: "))

        const emc = peso / (altura * altura)
        //const emc = (p,a) => {return p/(a*a)}
        //let result = emc(peso,altura)

        let categoria

        if(emc < 18.5) {
            categoria = "Abaixo do peso"
        }else if(emc < 24.9){
            categoria = "Peso normal"
        }else if(emc < 29.9){
            categoria = "Sobrepeso"
        }else{
            categoria = "Obeso"
        }

        console.log(`Seu IMC é: ${emc.toFixed(2)}`)
        console.log(`Categoiria: ${categoria}`)
