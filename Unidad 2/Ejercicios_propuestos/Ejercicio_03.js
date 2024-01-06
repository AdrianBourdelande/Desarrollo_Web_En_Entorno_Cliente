const formulario = document.querySelector("form");
const parrafo = document.getElementById("parrafo");
parrafo.style.border = '2px solid black';
// console.log(formulario);
formulario.addEventListener("change", (e) =>{
    parrafo.innerHTML = `RGB:${formulario.name=rangeR.value}/
    ${formulario.name=rangeG.value}/
    ${formulario.name=rangeB.value}`;
    parrafo.style.backgroundColor = `rgb(${formulario.name=rangeR.value},
        ${formulario.name=rangeG.value},${formulario.name=rangeB.value})`;
});