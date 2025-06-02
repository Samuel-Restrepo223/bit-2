'use strict';

/* const $root = document.getElementById('root');

let cards = `
<div class="d-flex flex-wrap">
`;

fetch('file.json')
  .then((res) => res.json())
  .then((info) => {
    for (let i = 0; i < info.length; i++) {
      cards += `
<div class="card">
  <img class="card-img-top" src="https://github.com/${info[i].usernameGithub}.png" alt="Imagen de perfil de ${info[i].student}">
  <div class="card-body">
  <h5 class="card-title">${info[i].student}</h5>
  </div>
  <div class="card-body">
  <a href="https://github.com/${info[i].usernameGithub}" target="_blank" rel="noopener noreferrer" class="card-link">GitHub</a>
  </div>
</div>
      `;
    }
    cards += '</div>';
    $root.innerHTML = cards;
  }) */
const frase = prompt('por favor, escriba una frase');
let contador = 0;

for (const siclo of frase) {
  if(siclo === 'a' || 'á' || 'A')
    if(siclo === 'e' + 'é' + 'E')
      if(siclo === 'i' + 'í' + 'I')
        if( siclo === 'o' + 'ó' + 'O')
          if(siclo === 'u' + 'ú' + 'U')
 contador++
}

console.log(contador);
//console.log(siclo)














/* const $msg = document.getElementById('message');
const $form = document.getElementById('loginForm');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  login();
});

function login() {
  const username = $form.username.value;
  const password = $form.password.value;
  let message = '';
  if (username === 'pepa' && password === 'ABC123') {
    $msg.classList.add('success');
    message = 'Bienvenida';
    $form.style.display = 'none';
  } else {
    $msg.classList.add('warning');
    message = 'Acceso denegado';
  }
  $msg.textContent = message;
} */
 

//otro tema



/* function User(username, pasword) {
  if (username === 'pepa' && pasword  === 'ABC123') {
    console.log('Bienvenida.');
  }else{
  console.log('Acceso denegado.')
  }
} */

// worshp

/* let miArreglo = [];
miArreglo = [
  "Colombia", "México", "Argentina", "España", "Perú", "Chile", "Ecuador", "Venezuela", "Guatemala", "Cuba", 
];
console.log(miArreglo)
 for (let i = 0; i < miArreglo.length ; i++){
  console.log(miArreglo[i]);
 }; */

/* Jueguito */

/*  // Generar un número secreto aleatorio entre 1 y 5
const numeroSecreto = Math.floor(Math.random() * 5) + 1;
let intentosRestantes = 2;

function verificarIntento() {
  // Obtener el valor ingresado por el usuario
  const intentoUsuario = parseInt(document.getElementById('intentoUsuario').value);
  const mensajeElemento = document.getElementById('mensaje');

  // Validar que el usuario haya ingresado un número
  if (isNaN(intentoUsuario)) {
    mensajeElemento.textContent = 'Por favor, ingresa un número.';
    return; // Sale de la función si la entrada no es un número
  }

  // Validar que el número esté dentro del rango
  if (intentoUsuario < 1 || intentoUsuario > 5) {
    mensajeElemento.textContent = 'El número debe estar entre 1 y 5.';
    return; // Sale de la función si el número está fuera del rango
  }

  intentosRestantes--; // Reduce la cantidad de intentos restantes en 1

  // Verificar si el usuario adivinó correctamente
  if (intentoUsuario === numeroSecreto) {
    mensajeElemento.textContent = '¡Ganaste! Adivinaste el número secreto.';
    // Deshabilitar el botón para que no siga intentando
    document.querySelector('button').disabled = true;
    // Opcionalmente, podrías revelar el número secreto aquí
    // mensajeElemento.textContent += ` Era el ${numeroSecreto}.`;
  } else if (intentosRestantes > 0) {
    mensajeElemento.textContent = `Incorrecto. Te quedan ${intentosRestantes} intento(s).`;
  } else {
    mensajeElemento.textContent = `Perdiste, tuviste 2 intentos. El número secreto era ${numeroSecreto}.`;
    // Deshabilitar el botón
    document.querySelector('button').disabled = true;
  }

  // Limpiar el campo de entrada después de cada intento
  document.getElementById('intentoUsuario').value = ''; */


/* let miObjeto = {}
miObjeto = {
  nombre: 'Sofia',
  semestre: 5,
  edad: 24,
  puesto: 3,
}
console.log(miObjeto.nombre)
console.log(miObjeto.semestre)
console.log(miObjeto.edad)
console.log(miObjeto.puesto) */

/* function ex  (nombre, apellido) {
  const obj = {
    nombre,
    apellido,
  }
  return '(obj.nombre) (obj.apellido)';
}

let valorRetornado = ex();    
console.log('valor retornado:', valorRetornado); */


/* 
prompt('escriba su nombre y apellido')

let miObjeto = {
  name: prompt,
  lastname: prompt
};
console.log(prompt)
 */

/* Crear 4 funciones, cada una debe realizar una opereación aritmética básica
- (suma, resta, multiplicación y división)
- Cada función debe recibir 2 números y retornar el resultado según corresponda
- Solicitar al usuario que ingrese 2 números enteros
- Mostrarle al usuario el resultado de cada operación
Ej Entrada: 10 2
Ej Salida:
10 + 2 = 12 ...
*/

/*  function suma(numero1, numero2) {
return numero1 + numero2;
};

function resta(numero1, numero2) {
return numero1 - numero2;
};
function multiplicacion(numero1, numero2) {
return numero1 * numero2;
};
function dividir(num1, num2) {
  if (num2 === 0) {
    return "Error: No se puede dividir por cero.";
  } else {
    return num1 / num2;
  }
}

let num1 = parseInt(prompt("Por favor, ingresa el primer número entero:"));
let num2 = parseInt(prompt("Por favor, ingresa el segundo número entero:"));

let resultadoSuma = suma(num1 + num2)
console.log(num1 + num2);

let resultadoResta = suma(num1 - num2)
console.log(num1 - num2);

let resultadoMultiplicacion = suma(num1 * num2)
console.log(num1 * num2);

let resultadoDiv = suma(num1 / num2)
console.log(num1 / num2);          
 */


/* *Ejercicio 1: Calculadora de Área de un Rectángulo*

* *Consigna:*
    1.  Crea una función llamada calcularAreaRectangulo que reciba dos parámetros: base y altura.
    2.  La función debe calcular el área del rectángulo (base * altura).
    3.  La función debe retornar el resultado.
    4.  Solicita al usuario la base y la altura del rectángulo.
    5.  Muestra el resultado del cálculo al usuario.

* *Pista:* Similar a la suma, pero con multiplicación. Recuerda parseInt() para las entradas.
 */

/* function calcularAreaRectangulo(num1, num2) {
  return num1 * num2; 
}

let base = parseInt(prompt("Por favor escoja un numero para la base del rectanculo"))
let altura = parseInt(prompt("Por favor escoja un numero para la altura del rectanculo"))

let resultadoArea = calcularAreaRectangulo(base, altura);
console.log("la base del rectangulo es:", base, "la altura del rectangulo es:", altura, "y el area es:",  resultadoArea); 
console.log(resultadoArea); */

/* *Ejercicio 2: Conversor de Temperatura (Celsius a Fahrenheit)*

* *Consigna:*
    1.  Crea una función llamada celsiusToFahrenheit que reciba un parámetro: celsius.
    2.  La función debe convertir la temperatura de Celsius a Fahrenheit usando la fórmula: (Celsius * 9/5) + 32.
    3.  La función debe retornar el resultado.
    4.  Solicita al usuario una temperatura en grados Celsius.
    5.  Muestra la temperatura convertida en Fahrenheit al usuario.

* *Pista:* Necesitarás solo un parámetro para la función.
 */

/* function celsiusToFahrenheit(celsius) {
  return (celsius *9/5)+32;
}
let celsius = parseInt(prompt("Por favor escoja un numero para convertirlo de celcius a fahrenheit"));

let conversion = celsiusToFahrenheit(celsius);
console.log (conversion)
  */

/* *Ejercicio 3: Verificador de Número Par o Impar*

* *Consigna:*
    1.  Crea una función llamada esPar que reciba un parámetro: numero.
    2.  La función debe determinar si el número es par o impar.
    3.  Si el número es par, la función debe retornar true. Si es impar, debe retornar false.
    4.  Solicita al usuario un número entero.
    5.  Usa la función esPar para verificar si el número ingresado es par o impar y muestra un mensaje apropiado al usuario (ej: "El número X es par" o "El número Y es impar").

* *Pista:* El operador módulo (%) es muy útil aquí. numero % 2 te dará el resto de la división por 2. Si el resto es 0, es par.
 */

 //por terminar 

/*  *Ejercicio 4: Encontrar el Número Mayor*

* *Consigna:*
    1.  Crea una función llamada encontrarMayor que reciba dos parámetros: num1 y num2.
    2.  La función debe comparar los dos números y retornar el mayor de ellos.
    3.  Solicita al usuario que ingrese dos números.
    4.  Usa la función encontrarMayor para determinar cuál es el número más grande y muestra el resultado al usuario.

* *Pista:* Puedes usar una estructura if/else o el operador ternario para la comparación.
 */

/* function encontrarMayor(num1, num2) {
  if (num1 > num2){
    console.log(num1)
  }else(num2 < num1);{
    console.log(num2)
  }
}
let num1 = parseInt(prompt("Por favor ingrese un numero"))
let num2 = parseInt(prompt("Por favor ingrese un numero"))

let conversion = encontrarMayor(num1, num2);
console.log (conversion) */

