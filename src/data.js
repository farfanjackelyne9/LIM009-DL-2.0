/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterGen = (datos, condition) => {
  let newData = datos.filter(datos => datos.gender === condition);
  return newData;
};


const filterHom = (datos, condition) => {
  let newData = datos.filter(datos => datos.house === condition);
  return newData;
};


const filterStud = (datos) => {
  let newData = datos.filter(datos => datos.hogwartsStudent === true);
  return newData;
};


const filterStaff = (datos) => {
  let newData = datos.filter(datos => datos.hogwartsStaff === true);
  return newData;
};


const sortData = (datos) => {
  let order = datos.sort((a, b) => {
    if (a.yearOfBirth > b.yearOfBirth) {
      return 1;
    } else {
      return -1;
    }
  });
  return order;
};

window.Global = {
  filterStaff,
  filterStud,
  filterHom,
  filterGen,
  sortData,
};