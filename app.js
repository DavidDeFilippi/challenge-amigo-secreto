// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = ["David", "Flor", "Xavier", "Siria", "Maria", "Alejandro", "Alejandra"];
let isGirando = false;
let intervalGiro;
function agregarAmigo() {
    let nombre = document.querySelector("#amigo").value;
    if (nombre == null || nombre == undefined || nombre == "") {
        alert("Debes ingresar un nombre");
    } else {
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
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    clearInterval(intervalGiro);
    const botonSorteo = document.querySelector(".button-draw");
    botonSorteo.disabled = true;
    let segundos = 10;
    intervalGiro = setInterval(() => {
        document.querySelector("#cuerpo-tabla").innerHTML = "";
        if (amigos.length > 0) {
            const sorteados = amigos.sort(() => Math.random() - 0.5);
            const ultimo = sorteados[0];
            for (let i = 0; i < amigos.length; i++) {
                document.querySelector("#cuerpo-tabla").innerHTML += `<tr><td>${sorteados[i]}</td><td>${sorteados[i + 1] == undefined ? ultimo : sorteados[i + 1]}</td></tr>`;
            }

        }
    }, 300);

    // document.querySelector("#contador").textContent = `El sorteo termina en: ${segundos} segundos`;
    intervalSegundos = setInterval(() => {
        document.querySelector("#contador").textContent = `El sorteo termina en: ${segundos} segundos`;
        segundos--;
        console.log(segundos);
        if (segundos < 0) {
            clearInterval(intervalGiro);
            clearInterval(intervalSegundos);
            botonSorteo.disabled = false;
            document.querySelector("#contador").textContent = `Felicidades! El sorteo ha terminado.`;
        }

    }, 1000);

}