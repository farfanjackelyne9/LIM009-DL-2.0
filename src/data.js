/* Manejo de data */
const filterGen = (datos, condition) => {
  let newData = datos.filter((dato) => dato.gender === condition);
  return newData;
};

const filterHom = (datos, condition) => {
  let newData = datos.filter((dato) => dato.house === condition);
  return newData;
};

const filterStud = (datos) => {
  let newData = datos.filter((dato) => dato.hogwartsStudent === true);
  return newData;
};

const filterStaff = (datos) => {
  let newData = datos.filter((dato) => dato.hogwartsStaff === true);
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