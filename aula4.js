//Arrays
var pessoa = ['Luiz', 'Borges' , '21'];
var cidades = ['Uberaba', 'Uberlandia'  ];
var carros = ['Palio', 'Gol', 'Uno', 'Ferrari'];
var frutas = ['Melancia', 'Banana', 'Laranja'];
document.write(pessoa[0]);

//Objetos
var pessoa1 = {
    nome:'Luiz',
    sobrenome: 'Borges',
    idade: '21',
    correr: function(){alert('correndo')}
};

alert('A idade de ' +pessoa1.nome+ ' é ' +pessoa1.idade+ ' anos');

//Adiciona um elemento no final 
cidades.push('Ituiutaba');
//Adiciona um elemento no inicio
cidades.unshift('Sacramento');

console.log(cidades.toString());
console.log(cidades.length);
console.log(pessoa.join(' - '));

//Remove o ultimo elemento
carros.pop();
//Remove o primeiro elemento
carros.shift();

console.log(carros.join(' , '));

//Coloca em ordem alfabetica
frutas.sort();
//Coloca o array ao contrario
//frutas.reverse();

console.log(frutas.toString());
