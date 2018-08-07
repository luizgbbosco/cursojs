//Inserindo elementos em um ID
document.getElementById('teste').innerHTML= 'Insira o texto.';

//Buscando elementos por TAG
console.log(document.getElementsByTagName('p'));

//Buscando elementos pela classe
console.log(document.getElementsByClassName('exemplo'));

//Encontrando e mostrando a URL da pagina
var x = document.URL;
console.log(document.getElementsByClassName('demo').innerHTML=(x));

//Pesquisando a ultima modificação no codigo
var x = document.lastModified;
console.log(document.getElementsByClassName('teste1').innerHTML=(x));

//Pesquisando o titulo da pagina
var x = document.title;
console.log(document.getElementsByClassName('teste1').innerHTML=(x));

//Utilizando a função onclick 
function clicar(elementos){
    elementos.innerHTML='Obrigado';
}

//Alterando a cor de um elemento.
document.getElementById('teste').style.color='green';

//Verificando o tipo do arquivo
document.getElementById('texto').innerHTML= typeof "Olá" + "<br>" + typeof 13;