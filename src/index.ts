let cantidadButacas: number = Number(
  prompt("ingrese la cantidad de butacas del cine")
);
let butacas: boolean[] = new Array(cantidadButacas);
let butacasLibres: number = 0;
let butacasOcupadas: number = 0;

function cargarVector(vectorButacas: boolean[], cantidadButacas: number) {
  for (let indice: number = 0; indice < cantidadButacas; indice++) {
    vectorButacas[indice] = Boolean(Math.floor(Math.random() * (2 - 0) + 0));
  }
}

function informarButacas(vInformar: boolean[], cantidadInformar: number) {
  for (let indice: number = 0; indice < cantidadInformar; indice++) {
    if (vInformar[indice] === true) {
      butacasOcupadas++;
    } else if (vInformar[indice] === false) {
      butacasLibres++;
    }
  }
}

cargarVector(butacas, cantidadButacas);
informarButacas(butacas, cantidadButacas);
console.log("La cantidad de Butacas libres es: " + butacasLibres);
console.log("La cantidad de Butacas ocupadas es: " + butacasOcupadas);
