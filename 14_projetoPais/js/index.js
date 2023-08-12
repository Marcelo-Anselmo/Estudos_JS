document.getElementById("card").style.setProperty("display", "none", "important")

function Procurar(){
    document.getElementById("card").style.setProperty("display", "block", "important")
    let pais = document.getElementById("pais").value
    let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    fetch(finalURL)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            let countrie = document.getElementById("countrieName")
            let capital = document.getElementById("capital")
            let cont = document.getElementById("cont")
            let pop = document.getElementById("pop")
            let flag = document.getElementById("imgFlag")

            flag.src = data[0].flags.svg
            countrie.innerText = data[0].altSpellings[1]
            capital.innerText = data[0].capital
            cont.innerText = data[0].continents
            pop.innerText = data[0].population


            // console.log(data[0])
            // console.log(data[0].altSpellings)
            // console.log(data[0].capital)
            // console.log(data[0].continents)
            // console.log(data[0].population)
        })
}