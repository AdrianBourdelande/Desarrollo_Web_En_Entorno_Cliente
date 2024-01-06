const colorActuales = document.getElementById('colorActuales');
export const actualesContainer = document.getElementById('actualesContainer');


colorActuales.addEventListener('change', (e)=>{
    actualesContainer.style.backgroundColor = `${e.target.value}`;
})