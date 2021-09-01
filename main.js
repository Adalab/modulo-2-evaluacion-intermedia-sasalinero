"use strict"

let contador = 0;

const cajaNumeroAleatorio = getRandomNumber(100);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);

}

console.log(cajaNumeroAleatorio);

const boton = document.querySelector(".prueba");

function handleClick() {

    let cajaNumero = document.querySelector(".numero").value;


    console.log(cajaNumero);

    if (cajaNumero > cajaNumeroAleatorio) {

        let resultado = document.querySelector(".indicacion");

        resultado.innerHTML = "Demasiado alto";

    }

    if (cajaNumero < cajaNumeroAleatorio) {

        let resultado = document.querySelector(".indicacion");

        resultado.innerHTML = "Demasiado bajo";

    }
    if (cajaNumeroAleatorio === parseInt(cajaNumero)) {

        let resultado = document.querySelector(".indicacion");

        resultado.innerHTML = "Has ganado campeona!!";

    }
    if (cajaNumero < 1 || cajaNumero > 100) {

        let resultado = document.querySelector(".indicacion");

        resultado.innerHTML = ("El número debe estar entre 1 y 100");

    }

    contador = contador + 1;

    document.querySelector(".intentos").value = ("Numero de intentos:" + contador);

}

boton.addEventListener("click", handleClick);