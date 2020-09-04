//creando las variables




//creando los eventos


const botonNumeros = document.querySelectorAll('.numeros');
const botonOperacion = document.querySelectorAll('.operacion');
const botonIgual = document.querySelectorAll('.igual')[0];
const botonDelete = document.querySelectorAll('.delete')[0];
const resultado = document.querySelector('#muestra');

let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let siete = document.getElementById('siete');
let ocho = document.getElementById('ocho');
let nueve = document.getElementById('nueve');
let cero = document.getElementById('cero');

let operacion1 = '';
let operacion2 = '';
let operacionfinal = '';


uno.addEventListener('click', function() {
    resultado.textContent = `${resultado.textContent}${'1'}`;

})
dos.addEventListener('click', function() {
    resultado.textContent = `${resultado.textContent}${'2'}`;

})
tres.addEventListener('click', function() {
    resultado.textContent = `${resultado.textContent}${'3'}`;

})
cuatro.addEventListener('click', function() {
    resultado.textContent = `${resultado.textContent}${'4'}`;

})
cinco.addEventListener('click', function() {
    resultado.textContent = `${resultado.textContent}${'5'}`;

})
seis.addEventListener('click', function() {
    resultado.textContent = `${resultado.textContent}${'6'}`;

})
siete.addEventListener('click', function() {
    resultado.textContent = `${resultado.textContent}${'7'}`;

})
ocho.addEventListener('click', function() {
    resultado.textContent = `${resultado.textContent}${'8'}`;

})
nueve.addEventListener('click', function() {
    resultado.textContent = `${resultado.textContent}${'9'}`;

})
cero.addEventListener('click', function() {
    resultado.textContent = `${resultado.textContent}${'0'}`;

})

suma.onclick = function() {
    resultado.textContent = `${resultado.textContent}`;
    operacion1 = (resultado.textContent)
    operacionfinal = '+';
    calcular();
    limpiar();


}
resta.onclick = function() {
    resultado.textContent = `${resultado.textContent}`;
    operacionfinal = '-';
    operacion1 = resultado.textContent;
    calcular();
    limpiar();

}
multiplica.onclick = function() {
    resultado.textContent = `${resultado.textContent}`;
    operacionfinal = '*';
    operacion1 = resultado.textContent;
    calcular();

    limpiar();


}
divide.onclick = function() {
    resultado.textContent = `${resultado.textContent}`;
    operacionfinal = '/';
    operacion1 = resultado.textContent;
    calcular();

    limpiar();
}

botonIgual.addEventListener('click', function() {
    operacion2 = resultado.textContent;
    calcular();

})


botonDelete.addEventListener('click', function() {
    borrar();
})



function calcular() {

    let calculo;

    let valor1 = parseFloat(operacion1);


    let valor2 = parseFloat(operacion2);
    operando = operacionfinal;

    if (valor1 !== '') {


        switch (operando) {
            case '+':
                calculo = valor1 + valor2;

                break;

            case '-':
                calculo = valor1 - valor2;

                break;

            case '*':
                calculo = valor1 * valor2;

                break;

            case '/':
                calculo = valor1 / valor2;

                break;
            default:
                return;

        }
    }
    let resultadoConvertido = calculo.toString();

    console.log(resultadoConvertido.length);

    resultado.innerHTML = resultadoConvertido.slice(0, 12);



}






function limpiar() {
    resultado.textContent = '';
}

function borrar() {
    operacion1 = 0;
    operacion2 = 0;
    operacionfinal = '';
    resultado.textContent = '';


}