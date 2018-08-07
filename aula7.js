
//IF
var num;

num = prompt("Digite o valor do numero:");

if(num > 0){
    alert("O numero é positivo, "+num);
} else if(num < 0){
    alert("O numero é negativo, "+num);
} else {
    alert("Você digitou zero.");
}

//SWITCH
var diaSemana = new Date().getDay();

switch (diaSemana){
    case 0:
        console.log("Hoje é domingo");
        break;
    case 6:
        console.log("Hoje é sabado");
        break;
    default:
        console.log("Hoje é um dia de segunda a sexta");
}

//FOR
var cidades = ['Uberaba', 'Uberlandia','Sacramento', 'Araguari'];
    for(i = 0; i < cidades.length; i++){
        console.log(cidades[i]);
    }

//WHILE

var times = ['Brasil', 'Argentina', 'Alemanha', 'Croacia', 'França'];
var cont = 0;
    while (cont < times.length){
        console.log(times[cont]);
        cont++;
    }

//DO

do {
    console.log(times[cont])
    cont++
}while(cont < times.length);
