const months = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let fecha = prompt("Indica tu fecha de nacimiento con el siguiente formato dd/mm/aaaa ");

let day = fecha.substring(0,2);
if (day.charAt(0)==0){
    day=day.charAt(1);
}
day = Number(day);

let month = fecha.substring(3,5);
if (month.charAt(0)==0){
    month=month.charAt(1);
}
month = Number(month);

//Hacemos el calculo de los dias de diferencia con respecto a la fecha actual
//Si el numerop sale positivo es el resultado que esperamos
//Si el numerop sale negativo es porque aun no hemos cumpliod años este año y hacer que invertir el cálculo

let dias=(Date.now()-Date.parse(`${months[month-1]} ${day}, ${new Date().getFullYear()}`))/1000/60/60/24;

if (dias>0){
    console.log(Math.round(dias));
}else{
    console.log(Math.round(365+dias));
}
