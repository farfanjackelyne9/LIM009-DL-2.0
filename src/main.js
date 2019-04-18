/* Manejo del DOM */
const containerCharacters = document.getElementById("container-characters");

const data = () => {
    fetch('https://raw.githubusercontent.com/farfanjackelyne9/LIM009-DL-2.0/master/src/data/potter.json')
        .then(res => res.json())
        .then(datos => {
            paintData(datos)
        })
}
data();
const paintData = (datos) => {
    let newData = "";
    for (let i = 0; i < datos.length; i++) {
        newData += `
        <section id="box-characters" class="col-xs-6 col-md-4 col-sm-6 col-lg-4">
         <section id="box-act">`
         if(datos[i].house === "Gryffindor" ){
          newData += `<div><img id="bander" src="imagenes/bandera-roja.JPG"</div>`
        }
        if(datos[i].house === "Slytherin" ){
          newData += `<div><img id="bander" src="imagenes/bandera-verde.JPG"</div>`
        }
        if(datos[i].house === "Ravenclaw" ){
          newData += `<div><img id="bander" src="imagenes/bandera-azul.JPG"</div>`
        }
        if(datos[i].house === "Hufflepuff" ){
          newData += `<div><img id="bander" src="imagenes/bandera-amarilla.JPG"</div>`
        }
         newData +=`<img  id="img-act" src="${datos[i].image}"></img>
           </br>
           <strong><p class="tittle-box">${datos[i].name}</p></strong>
           <p class="tittle-box">${datos[i].house}</p>
           </br>
         <div>
           Especie
           </br>
           <strong>${datos[i].species}</strong>
           </br>`
           if (typeof datos[i].yearOfBirth === "number") {
            newData += `<div>Edad</br><strong>${2019 - datos[i].yearOfBirth}</strong></div>`;
          } else {
            newData += `<div>Edad</br><strong>${"No encontrado"}</strong></div>`;
          }
           newData +=`Actor
           </br>
           <strong>${datos[i].actor}</strong>
         </div>
         </section>
        </section>`;
    }
    containerCharacters.innerHTML = newData;
}