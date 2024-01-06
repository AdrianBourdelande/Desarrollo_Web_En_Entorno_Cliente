const formulario = document.querySelector("form");

formulario.addEventListener('change', (e) =>{
    const mes = Number(formulario[0].value.split('-')[1]);
    console.log(mes);
    const dia = Number(formulario[0].value.split('-')[2]);
    console.log(dia);
    console.log(formulario[0].value);
    if((mes==3&&dia>15)||mes==4||mes==5||(mes==6&&dia<=15)){
        console.log('Es PRIMAVERA'); 
        document.body.style.backgroundColor = 'pink';
    }
    if((mes==6&&dia>15)||mes==7||mes==8||(mes==9&&dia<=15)){
        console.log('Es VERANO');       
        document.body.style.backgroundColor = 'yellow'; 
    }
    if((mes==9&&dia>15)||mes==10||mes==11||(mes==12&&dia<=15)){
        console.log('Es OTOñO');  
        document.body.style.backgroundColor = 'brown';      
    }
    if((mes==12&&dia>15)||mes==1||mes==2||(mes==3&&dia<=15)){
        console.log('Es INVIERNO');  
        document.body.style.backgroundColor = 'blue';      
    }
});