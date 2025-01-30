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
}