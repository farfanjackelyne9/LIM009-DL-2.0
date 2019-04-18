/* Manejo del DOM */
const containerCharacters = document.getElementById("container-characters");

const data = () => {
  fetch('https://raw.githubusercontent.com/farfanjackelyne9/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res => res.json())
    .then(datos => {
      paintData(datos);
    });
};
data();
const paintData = (datos) => {
  let newData = "";
  for (let i = 0; i < datos.length; i++) {
    newData += `
        <section id="box-characters" class="col-xs-6 col-md-4 col-sm-6 col-lg-4">
         <section id="box-act">`;
    if (datos[i].house === "Gryffindor") {
      newData += `<div ><img class="bander" src="imagenes/bandera-roja.JPG"</div>`;
    }
    if (datos[i].house === "Slytherin") {
      newData += `<div ><img class="bander" src="imagenes/bandera-verde.JPG"</div>`;
    }
    if (datos[i].house === "Ravenclaw") {
      newData += `<div ><img class="bander" src="imagenes/bandera-azul.JPG"</div>`;
    }
    if (datos[i].house === "Hufflepuff") {
      newData += `<div ><img class="bander" src="imagenes/bandera-amarilla.JPG"</div>`;
    }
    if (datos[i].house === "") {
      newData += `<div ><img class="bander" src="imagenes/bandera-vacia.JPG"</div>`;
    }
    newData += `</br><img  id="img-act" src="${datos[i].image}"></img></br>
           <strong><p class="tittle-box">${datos[i].name}</p></strong>
           <p class="tittle-box">${datos[i].house}</p></br>
         <div><img class="icon" src="icono/icono-especies.jpeg"></img>Especie</br><strong><p class="data">${datos[i].species}</p></strong></br>`;
    if (datos[i].hogwartsStudent === true) {
      newData += `</br><img class="icon" src="icono/icono-estudiantes.jpeg">Rol</br><strong><p class="data">${"Estudiante"}</p></strong></br>`;
    }
    if (datos[i].hogwartsStudent === false) {
      newData += `</br><img class="icon" src="icono/icono-estudiantes.jpeg">Rol</br><strong><p class="data">${"Staff"}</p></br></strong>`;
    }
    if (typeof datos[i].yearOfBirth === "number") {
      newData += `</br><img class="icon" src="icono/icono-edad.jpeg">Edad</br><strong><p class="data">${2019 - datos[i].yearOfBirth}</p></strong></br>`;
    } else {
      newData += `</br><img class="icon" src="icono/icono-edad.jpeg">Edad</br><strong><p class="data">${"No encontrado"}</p></strong></br>`;
    }
    newData += `</br><img class="icon" src="icono/icono-actores.jpeg">Actor</br><strong><p class="data">${datos[i].actor}</p></strong></br></br>
         </div>
         </section>
        </section>`;
  }
  containerCharacters.innerHTML = newData;
};