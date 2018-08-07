var dt = new Date();

console.log(dt);
//Formas abreviadas para mostrar a data.
console.log(dt.toUTCString());
console.log(dt.toDateString());

//Formas de selecionar 
console.log(dt.getDate());
console.log(dt.getHours());
console.log(dt.getFullYear());

//Pode ser definida a data especifica atraves do set
//dt.setDate(17);
//console.log(dt);

function formataData(data = new Date()){
    var dia = data.getDate();
    var mes = data.getMonth()+1;
    var ano = data.getFullYear();

    if (dia.toString().length == 1 ) dia = '0'+dia;
    if (mes.toString().length == 1) mes = '0'+mes;
    
    return dia+'/'+mes+'/'+ano;
}

console.log(formataData());