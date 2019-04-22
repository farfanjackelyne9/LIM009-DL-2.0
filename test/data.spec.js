global.window = global;
require('../src/data');
require('./data.spec.js');
const input = [{ edad: 30}, { edad: 29}];
describe('filterGen', () => {
  it('debería ser una función', () => {
    expect(typeof Global.filterGen).toBe('function');
  });

  it('Esta funcion deberia filtrar por genero', () => {
    expect(Global.filterGen([{ gender: "male"}, { gender: "female"}, { name: "Harry Potter", gender: "male"}], "")).toEqual([]); 
  });
});
describe('filterHom', () => {
  it('debería ser una función', () => {
    expect(typeof Global.filterHom).toBe('function');
  });

  it('Esta funcion deberia filtrar por casas', () => {
    expect(Global.filterHom([{ house: "Slytherin"}, { house: "Ravenclaw"}, { name: "Harry Potter", house: "Gryffindor"}], "")).toEqual([]); 
  });
});
describe('filterStud', () => {
  it('debería ser una función', () => {
    expect(typeof Global.filterStud).toBe('function');
  });

  it('Esta funcion deberia filtrar por estudiantes', () => {
    expect(Global.filterStud([{ estudiante: "Harry"}, { estudiante: "Hermayone"}], "")).toEqual([]); 
  });
});
describe('filterStaff', () => {
  it('debería ser una función', () => {
    expect(typeof Global.filterStaff).toBe('function');
  });

  it('Esta funcion deberia filtrar por staff', () => {
    expect(Global.filterStaff([{ staff: "Argus"}, { name: "Harry Potter", house: "Gryffindor"}], "")).toEqual([]); 
  });
});
describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof Global.sortData).toBe('function');
  });

  it('debería retornar un array ordenado ', () => {
    expect(Global.sortData(input)).toEqual(input);
  });
});
