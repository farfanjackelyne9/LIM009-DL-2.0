global.window = global;
require('../src/data');
require('./data.spec.js');
const inputGen = [{ name: "Hermayone", gender: "female"}, { name: "Harry Potter", gender: "male"}];
const conditionGen = "male";
const outputGen = [{ name: "Harry Potter", gender: "male"}];
const inputHom = [{ name: "Hermayone", house: "Gryffindor"}, { name: "Draco Malfoy", house: "Slytherin"}];
const conditionHom = "Slytherin";
const outputHom = [{ name: "Draco Malfoy", house: "Slytherin"}];
const inputStud = [{ name: "Draco Malfoy", hogwartsStudent: true}, { name: "Minerva McGonagall", hogwartsStudent: false }];
const conditionStud = "student";
const outputStud = [{ name: "Draco Malfoy", hogwartsStudent: true}];
const inputStaf = [{ name: "Draco Malfoy", hogwartsStaff: false}, { name: "Minerva McGonagall", hogwartsStaff: true }];
const conditionStaf = "staff";
const outputStaf = [{ name: "Minerva McGonagall", hogwartsStaff: true }];
const inputSort1 = [{ "yearOfBirth": 1990 }, { "yearOfBirth": 1800 }];
const outputSort1 = [{"yearOfBirth": 1800}, {"yearOfBirth": 1990}];
const inputSort2 = [{"yearOfBirth": 1800}, {"yearOfBirth": 1800}];
const outputSort2 = [{"yearOfBirth": 1800}, {"yearOfBirth": 1800}];
describe('filterGen', () => {
  it('debería ser una función', () => {
    expect(typeof Global.filterGen).toBe('function');
  });

  it('Esta funcion deberia filtrar por genero', () => {
    expect(Global.filterGen(inputGen, conditionGen)).toEqual(outputGen);
  });
});
describe('filterHom', () => {
  it('debería ser una función', () => {
    expect(typeof Global.filterHom).toBe('function');
  });

  it('Esta funcion deberia filtrar por casas', () => {
    expect(Global.filterHom(inputHom, conditionHom)).toEqual(outputHom);
  });
});
describe('filterStud', () => {
  it('debería ser una función', () => {
    expect(typeof Global.filterStud).toBe('function');
  });

  it('Esta funcion deberia filtrar por estudiantes', () => {
    expect(Global.filterStud(inputStud, conditionStud)).toEqual(outputStud);
  });
});
describe('filterStaff', () => {
  it('debería ser una función', () => {
    expect(typeof Global.filterStaff).toBe('function');
  });

  it('Esta funcion deberia filtrar por staff', () => {
    expect(Global.filterStaff(inputStaf, conditionStaf)).toEqual(outputStaf);
  });
});
describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof Global.sortData).toBe('function');
  });

  it('debería retornar un array ordenado ', () => {
    expect(Global.sortData(inputSort1)).toEqual(outputSort1);
  });

  it('debería retornar el mismo array ', () => {
    expect(Global.sortData(inputSort2)).toEqual(outputSort2);
  });
});
