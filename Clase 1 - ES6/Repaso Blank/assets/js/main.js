/*
1) Const y Let (Block Scope) DONE
2) Arrow Functions DONE
3) Modules (Imports and Exports) DONE
4) Template Literals DONE

5) Classes (Constructor, Super, Setters and Getters) TODO

6) Default Parameters DONE
7) The Spread Operator DONE
8) Destructuring DONE
9) Rest Operator  DONE

10) map(), filter(), find(), reduce() para Arrays

11) Promesas, Async/Await
*/

//1) Const y Let (Block Scope)

// const nombre = "Juan";

if (true) {
  const miVar = 2;
  console.log("Ejemplo const", miVar);
}

// 2) Arrow Functions

// function sumar(a, b) {
//   return a + b
// }

// const sumar = (a, b) => {
//   return a + b
// }

//Declaracion de la funcion
const sumar = (a, b) => a + b; //Sugar syntax

// const sumar = (a, b) => {
//   const c = a + b;
//   return a + b
// }; // Sin Sugar syntax

const duplicado = (a) => a * 2;

const mensaje = () => console.log("Hola soy un mensaje");

//Invocación
console.log("Arrow Functions", sumar(5, 5), duplicado(10), mensaje());

//3) Modules (Imports and Exports)
import colors, { pencils } from "./colors.js";
console.log("Export/import", colors);

//4) Template Literals
const nombreUsuario = `Juan ${colors[0].name}`;
const apellidoUsuario = "Perez";
const trabajoUsuario = "Programador";

const markup = `
<div>
  <ul>
    <li>${nombreUsuario}</li>
  </ul>
</div>
`;

const mensajePresentacion =
  "Hola soy " +
  nombreUsuario +
  " " +
  apellidoUsuario +
  " y soy " +
  trabajoUsuario;
const mensajePresentacion2 = `Hola soy ${nombreUsuario} ${apellidoUsuario} y soy ${trabajoUsuario}`;
const mensajePresentacion3 = `Hola soy ${nombreUsuario}`;

console.log("template Literals", mensajePresentacion2);

//6) Default Parameters

const sumar2 = (a = 0, b = 8) => a + b;
console.log("default parameters", sumar2(10, 5), sumar2(1), sumar2());

const mostrarNombre = (nombre = "Juan") => console.log(nombre);
mostrarNombre(8);

//7) The Spread Operator

import actores, { peliculasCopadas } from "./libreriaAmiga.js";
console.log(peliculasCopadas, actores);

//Old school shit
let arrayFinal = [];
for (let index = 0; index < actores.length; index++) {
  arrayFinal.push(actores[index]);
}
for (let index = 0; index < peliculasCopadas.length; index++) {
  arrayFinal.push(peliculasCopadas[index]);
}

//New world order
//Con Arrays
const numbers = [1, 2, 3, 4];
const arrayFinalSpread = [...actores, ...peliculasCopadas, ...numbers];
console.log("Spread operator", arrayFinalSpread);
const batman = peliculasCopadas[0];
const datosExtraPeliculaBatman = {
  villano: "Guason",
  auto: "Batimovil",
};

//Con Objetos
const peliBatman = { ...batman, ...datosExtraPeliculaBatman };
console.log(peliBatman);

//Destructuring
//Old School
// const nombreBatman = peliculasCopadas[0].nombre
// const anioBatman = peliculasCopadas[0].anio
// console.log(nombreBatman)

//Objetos
const { nombre: nombreBatman, origen, anio } = peliculasCopadas[0];
console.log(nombreBatman, anio, origen);

//Arrays
const animalesDeLaGranja = ["Pato", "Chancho", "Vaca", "Conejo"];
const [pato, pos2, pos3] = animalesDeLaGranja;
console.log("Destructuring de la granja", pato, pos2, pos3);

//9) Rest Operator

const universidad = {
  name: "Umai",
  website: "https://multimedia.maimonides.edu",
  sedes: ["Caballito", "Centro", "Palermo"],
  director: "Alan",
};

const { name, director, website, ...restData } = universidad;
console.log("Rest Operator", name, restData, website);

const clima = {
  ciudad: "Buenos Aires",
  temperatura: 17,
  unidad: "Grados Celcius",
  pronostico: "Lluvioso",
};

const moreData = {
  country: 'Argentina'
}

const fullClima = {
  ...clima,
  ...moreData
}

const { ciudad, pronostico, unidad, ...temp } = fullClima;
console.log(temp)
const { temperatura } = temp;
console.log(
  `Hoy en la ciudad de ${ciudad} el pronostico está ${pronostico} hace ${temperatura} (${unidad})`
);

