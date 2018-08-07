// Isto é um comentário

/*
    Isto é um comentário de multiplas linhas
*/

//Diferentes padrões em variaveis 
var idade_pessoa;
var IdadePessoa;
var idadePessoa = 0;
var quant = 0;
var soma = 0;
var quantv = 0;
var quantn = 0;
var media = 0;

idadePessoa = prompt("Informe uma idade, ou zero para finalizar:");

    while (idadePessoa < 0){
        idadePessoa = prompt("Idade invalida, digite novamente: ")
    }idadePessoa > 0;
    
        while (idadePessoa > 0){
            quant++;
            idadePessoa = parseInt(idadePessoa);
            soma = soma + idadePessoa;
            if (idadePessoa > 18){
                quantv++;
            }
            if (idadePessoa < 18){
                quantn++;
            }
            idadePessoa = prompt("Digite a proxima idade");
            }idadePessoa = 0;
        
            media = soma / quant;
            //document.write("Quantidade digitada: "+quant+" ,soma das idades: "+soma+" ,media das idades: "+media+ " ,quantidade de pessoas abaixo dos 18 anos: "+quantn+ " ,quantidade de pessoas acima dos 18 anos: "+quantv);
            document.getElementById('teste').innerHTML= "A quantidade de idades digitadas foram: "+quant+ " pessoas";
            document.getElementById('teste1').innerHTML= "A soma das idades foi: "+soma+ " anos";
            document.getElementById('teste2').innerHTML= "A média de todas as idades é: "+media.toFixed(2)+" anos";
            document.getElementById('teste3').innerHTML= "A quantidade de pessoas com mais de 18 anos é: "+quantv+ " pessoas";
            document.getElementById('teste4').innerHTML= "A quantidade de peesias com menos de 18 anos é: "+quantn+ " pessoas";
               
            console.log(

                document.querySelectorAll(".teste1")
            )

            //document.getElementById('nissan').innerHTML='Versa';


