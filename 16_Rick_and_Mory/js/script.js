document.getElementById("card").style.setProperty("display", "none", "important") 

function Procurar(){
    document.getElementById("card").style.setProperty("display", "block", "important")

    let person = document.getElementById("person").value
    let finalURL = `https://rickandmortyapi.com/api/character/${person}`

    fetch(finalURL)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            let personImg = document.getElementById("personImg")
            let personName = document.getElementById("personName")
            let personGen = document.getElementById("personGen")
            let personLoc = document.getElementById("personLoc")
            let personStatus = document.getElementById("personStatus")
            let personSpecie = document.getElementById("personSpecie")

            personImg.src = data.image
            personName.innerHTML = data.name
            personGen.innerHTML = data.gender
            personLoc.innerHTML = data.location
            personStatus.innerHTML = data.status
            personSpecie.innerHTML = data.species
        })
}

function enterBuscar(){
    document.addEventListener('keydown', (event) => {
        if(event.key == "Enter"){
            Procurar();
        }
        
      });
}
enterBuscar();