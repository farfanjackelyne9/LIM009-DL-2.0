/* Manejo del DOM */
const containerCharacters = document.getElementById("container-characters");
const getJson = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const totalData = data;
      dataPotter(totalData);
    });
};
getJson('https://raw.githubusercontent.com/farfanjackelyne9/LIM009-DL-2.0/master/src/data/potter.json');
const dataPotter = (valuesPotter) => {
  const paintData = (datos) => {
    let newData = "";
    datos.forEach((element) => {
      newData += `
        <section id="box-characters" class="col-xs-6 col-md-4 col-sm-6 col-lg-4">
         <section id="box-act" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">`;
      if (element.house === "Gryffindor") {
        newData += `
        <div id="gry">
          <img class="bander" src="imagenes/bandera-roja.JPG">
        </div>`;
      }
      if (element.house === "Slytherin") {
        newData += `
        <div id="sly">
          <img class="bander" src="imagenes/bandera-verde.JPG">
        </div>`;
      }
      if (element.house === "Ravenclaw") {
        newData += `
        <div id="rav">
          <img class="bander" src="imagenes/bandera-azul.JPG">
        </div>`;
      }
      if (element.house === "Hufflepuff") {
        newData += `
        <div id="huf">
          <img class="bander" src="imagenes/bandera-amarilla.JPG">
        </div>`;
      }
      if (element.house === "") {
        newData += `
        <div >
          <img id="hollow" class="bander" src="imagenes/bandera-vacia.JPG">
        </div>`;
      }
      newData += `
      <div class="img-act1 col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <img  id="img-act" src="${element.image}">
      </div>
      <div class="caract col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p class="tittle-name">${element.name}</p>
        <p class="tittle-house">${element.house}</p>
      </div>
       <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
         <img class="icon" src="icono/icono-especies.jpeg">
       </div>  
       <div class="caract col-xs-9 col-sm-9 col-md-9 col-lg-9">
         <p class="sub-ti">Especie</p>
         <p class="data">${element.species}</p>
       </div>`;
      if (element.hogwartsStudent === true) {
        newData += `
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <img class="icon" src="icono/icono-estudiantes.jpeg">
      </div>
      <div class="caract col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <p class="sub-ti">Rol</p>
        <p class="data">Estudiante</p>
      </div>`;
      }
      if (element.hogwartsStudent === false) {
        newData += `
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"> 
        <img class="icon" src="icono/icono-estudiantes.jpeg">
        </div>
        <div class="caract col-xs-9 col-sm-9 col-md-9 col-lg-9">
         <p class="sub-ti">Rol</p>
         <p class="data">Staff</p>
         </div>`;
      }
      if (typeof element.yearOfBirth === "number") {
        newData += `
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"> 
        <img class="icon" src="icono/icono-edad.jpeg">
        </div>
        <div class="caract col-xs-9 col-sm-9 col-md-9 col-lg-9">
         <p class="sub-ti">Edad</p>
         <p class="data">${2019 - element.yearOfBirth}</p>
         </div>`;
      } else {
        newData += `
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"> 
        <img class="icon" src="icono/icono-edad.jpeg">
        </div>
        <div class="caract col-xs-9 col-sm-9 col-md-9 col-lg-9">
         <p class="sub-ti">Edad</p>
        <p class="data">No encontrado</p>
        </div>`;
      }
      newData += `
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"> 
        <img class="icon" src="icono/icono-actores.jpeg">
      </div>
      <div class="caract col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <p class="sub-ti">Actor</p>
        <p class="data">${element.actor}</p>
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
        let gryff = Global.filterHom(valuesPotter, valor);
        paintData(gryff);
      }
      if (valor === "Slytherin") {
        let slyth = Global.filterHom(valuesPotter, valor);
        paintData(slyth);
      }
      if (valor === "Ravenclaw") {
        let raven = Global.filterHom(valuesPotter, valor);
        paintData(raven);
      }
      if (valor === "Hufflepuff") {
        let huffl = Global.filterHom(valuesPotter, valor);
        paintData(huffl);
      }
    });
  }
  const gen = document.getElementsByClassName("genero");
  for (let i = 0; i < gen.length; i++) {
    gen[i].addEventListener("change", () => {
      let valor = gen[i].value;
      if (valor === "female") {
        let fem = Global.filterGen(valuesPotter, valor);
        paintData(fem);
      } else if (valor === "male") {
        let male = Global.filterGen(valuesPotter, valor);
        paintData(male);
      }
    });
  }
  const rol = document.getElementsByClassName("rol");
  for (let i = 0; i < rol.length; i++) {
    rol[i].addEventListener("change", () => {
      let valor = rol[i].value;
      if (valor === "student") {
        let stud = Global.filterStud(valuesPotter);
        paintData(stud);
      } else if (valor === "staff") {
        let staff = Global.filterStaff(valuesPotter);
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
    paintData(Global.sortData(newYear));
  });
  document.getElementById("btnA").addEventListener("click", () => {
    paintData(Global.sortData(newYear).reverse());
  });
};