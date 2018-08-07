//Para que se utilize caracteres especias, deve ser utilizada a barra invertida.

var txt = 'Tomei um pé d\'água'

console.log(txt);
//Comando para ver a quantidade de caracteres.
console.log(txt.length);

//Procura dentro do string, e retorna a posição, caso utilize lastIndexOf ele buscara a ultima
console.log(txt.indexOf("pé"));

//Extrai o que foi buscado
console.log(txt.slice(0,5));

//Substitui alguma palavra dentro da string
console.log(txt.replace('Tomei', 'Levei'));

//Transforma a string em letras maiusculas ou minusculas.
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());

/*var quant = 0;
var quant10 =0;
    do {
        num = prompt("Digite um valor maior que zero, ou zero para finalizar:")
    }while (num > 0){
        quant++;
            if (num > 10){
                quant10 = quant10 + 1;
            }
    }
    alert("A quantidade de numeros digitados foram: " +quant);
    alert (quant10);*/

    var num = 5.556
    //Escolhe a quantidade de casas decimais aparecera do numero
    console.log("Numero arredondado para duas casas: " +num.toFixed(2));

    //Escolhe a quantidade de digitos, dependendo da situação o numero será arredondado
    console.log(num.toPrecision(2));



        