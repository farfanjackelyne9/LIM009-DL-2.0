/* Manejo del DOM */
const containerCharacters = document.getElementById("container-characters");

const data = () => {
  fetch('https://raw.githubusercontent.com/farfanjackelyne9/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res => res.json())
    .then(datos => {
      paintData(datos)
    });
};
data();
const paintData = (datos) => {
  let newData = "";
  for (let i = 0; i < datos.length; i++) {
    newData += `<img  id="img-act" src="${datos[i].image}"></img>
           <strong><p>${datos[i].name}</p></strong>
           <p>${datos[i].house}</p>
           Especie</br>
           <strong>${datos[i].species}</strong></br>`
    if (datos[i].hogwartsStudent === true) {
      newData += `Rol</br><strong>${"Estudiante"}</strong>`
    }
    if (datos[i].hogwartsStudent === false) {
      newData += `Rol</br><strong>${"Staff"}</br></strong>`
    }
    if (typeof datos[i].yearOfBirth === "number") {
      newData += `<div>Edad</br><strong>${2019 - datos[i].yearOfBirth}</strong></div>`;
    } else {
      newData += `<div>Edad</br><strong>${"No encontrado"}</strong></div>`;
    }
    newData += `Actor</br><strong>${datos[i].actor}</strong>`;
  }
  containerCharacters.innerHTML = newData;
};