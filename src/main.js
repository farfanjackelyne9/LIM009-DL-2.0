/* Manejo del DOM */
const containerCharacters = document.getElementById("container-characters");


const getJson = () => {
  fetch('https://raw.githubusercontent.com/farfanjackelyne9/LIM009-DL-2.0/master/src/data/potter.json')
    .then(response => response.json())
    .then(data => {
      const totalData = data;
      dataPotter(totalData);
    });
};
getJson();
const dataPotter = (valuesPotter) => {
  const paintData = (datos) => {
    let newData = "";
    datos.forEach((element) => {
      newData += `
        <section id="box-characters" class="col-xs-6 col-md-4 col-sm-6 col-lg-4">
         <section id="box-act">`;
      if (element.house === "Gryffindor") {
        newData += `<div ><img class="bander" src="imagenes/bandera-roja.JPG"</div>`;
      }
      if (element.house === "Slytherin") {
        newData += `<div ><img class="bander" src="imagenes/bandera-verde.JPG"</div>`;
      }
      if (element.house === "Ravenclaw") {
        newData += `<div ><img class="bander" src="imagenes/bandera-azul.JPG"</div>`;
      }
      if (element.house === "Hufflepuff") {
        newData += `<div ><img class="bander" src="imagenes/bandera-amarilla.JPG"</div>`;
      }
      if (element.house === "") {
        newData += `<div ><img class="bander" src="imagenes/bandera-vacia.JPG"</div>`;
      }
      newData += `</br><img  id="img-act" src="${element.image}"></img></br>
           <strong><p class="tittle-box">${element.name}</p></strong>
           <p class="tittle-box">${element.house}</p></br>
         <div><img class="icon" src="icono/icono-especies.jpeg"></img>Especie</br><strong><p class="data">${element.species}</p></strong></br>`;
      if (element.hogwartsStudent === true) {
        newData += `</br><img class="icon" src="icono/icono-estudiantes.jpeg">Rol</br><strong><p class="data">${"Estudiante"}</p></strong></br>`;
      }
      if (element.hogwartsStudent === false) {
        newData += `</br><img class="icon" src="icono/icono-estudiantes.jpeg">Rol</br><strong><p class="data">${"Staff"}</p></br></strong>`;
      }
      if (typeof element.yearOfBirth === "number") {
        newData += `</br><img class="icon" src="icono/icono-edad.jpeg">Edad</br><strong><p class="data">${2019 - element.yearOfBirth}</p></strong></br>`;
      } else {
        newData += `</br><img class="icon" src="icono/icono-edad.jpeg">Edad</br><strong><p class="data">${"No encontrado"}</p></strong></br>`;
      }
      newData += `</br><img class="icon" src="icono/icono-actores.jpeg">Actor</br><strong><p class="data">${element.actor}</p></strong></br></br>
         </div>
         </section>
        </section>`;
    });
    containerCharacters.innerHTML = newData;
  };
  paintData(valuesPotter);
  const home = document.getElementsByClassName("casa");
  for (let i = 0; i < home.length; i++) {
    home[i].addEventListener("change", () => {
      let valor = home[i].value;
      if (valor === "Gryffindor") {
        let gryff = window.filterHom(valuesPotter, valor);
        paintData(gryff);
      }
      if (valor === "Slytherin") {
        let slyth = window.filterHom(valuesPotter, valor);
        paintData(slyth);
      }
      if (valor === "Ravenclaw") {
        let raven = window.filterHom(valuesPotter, valor);
        paintData(raven);
      }
      if (valor === "Hufflepuff") {
        let huffl = window.filterHom(valuesPotter, valor);
        paintData(huffl);
      }
    });
  }

  const gen = document.getElementsByClassName("genero");

  for (let i = 0; i < gen.length; i++) {
    gen[i].addEventListener("change", () => {
      let valor = gen[i].value;
      if (valor === "female") {
        let fem = window.filterGen(valuesPotter, valor);
        paintData(fem);
      } else if (valor === "male") {
        let male = window.filterGen(valuesPotter, valor);
        paintData(male);
      }
    });
  }
  const rol = document.getElementsByClassName("rol");

  for (let i = 0; i < rol.length; i++) {
    rol[i].addEventListener("change", () => {
      let valor = rol[i].value;
      if (valor === "student") {
        let stud = window.filterStud(valuesPotter);
        paintData(stud);
      } else if (valor === "staff") {
        let staff = window.filterStaff(valuesPotter);
        paintData(staff);
      }
    });
  }
  let newYear = [];
  for (let i = 0; i < valuesPotter.length; i++) {
    if (typeof valuesPotter[i].yearOfBirth === "number") {
      newYear.push(valuesPotter[i]);
    }
  }
  document.getElementById("btnD").addEventListener("click", () => {
    paintData(window.sortData(newYear));
  });
  document.getElementById("btnA").addEventListener("click", () => {
    paintData(window.sortData(newYear).reverse());
  });
};