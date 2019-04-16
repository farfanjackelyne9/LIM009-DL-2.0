/* Manejo del DOM */
const containerCharacters=document.getElementById("container-characters");

const data=()=>{
fetch('https://raw.githubusercontent.com/farfanjackelyne9/LIM009-DL-2.0/master/src/data/potter.json')
.then(res=>res.json())
.then(datos=>{
    paintData(datos)
})
}
data();
const paintData=(datos)=>{
    let newData="";
    for(let i=0;i<datos.length;i++){
       newData += `
       <section class="col-xs-6 col-md-4 col-sm-6 col-lg-4">
       <img  class="col-xs-6" src="${datos[i].image}">
       </img>
       </section>`; 
    }
 containerCharacters.innerHTML=newData;
}