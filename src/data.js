/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterGen = (datos, condition) => {
   let newData = [];
   for (let i = 0; i < datos.length; i++) {
      if (datos[i].gender === condition) {
         newData.push(datos[i]);
      }
   }
   return newData;
};
window.filterGen = filterGen;

const filterHom = (datos, condition) => {
   let newData = [];
   for (let i = 0; i < datos.length; i++) {
      if (datos[i].house === condition) {
         newData.push(datos[i]);
      }
   }
   return newData
};
window.filterHom = filterHom;

const filterStud = (datos) => {
   let newData = [];
   for (let i = 0; i < datos.length; i++) {
    if (datos[i].hogwartsStudent === true) {
      newData.push(datos[i]);
    }
  }
  return newData;
};
window.filterStud = filterStud;

const filterStaff = (datos) => {
  let newData = [];
  for (let i = 0; i < datos.length; i++) {
    if (datos[i].hogwartsStaff === true) {
      newData.push(datos[i]);
    }
  }
  return newData;
};
window.filterStaff = filterStaff;