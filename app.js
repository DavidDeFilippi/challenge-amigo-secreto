// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.querySelector("#amigo").value;
    if(nombre == null || nombre == undefined || nombre == ""){
        alert("Debes ingresar un nombre");
    }else{
        amigos.push(nombre);
        console.log(amigos);
        document.querySelector("#amigo").value = "";
    }

    updateListaAmigos();
}

function updateListaAmigos() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}`;
    }
}

function sortearAmigo() {

    if(amigos.length > 0){
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.querySelector("#resultado").innerHTML = `<li>${sorteado}</li>`;
        
    }else{

        alert("Debes agregar amigos para poder sortear");
        
    }
}      