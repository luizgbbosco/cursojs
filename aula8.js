function verifica(){
    var x = document.getElementById('numero').value;
    try{
        if(x == '') throw 'Informe um valor';
    if(isNaN(x)) throw 'Você precisa informar um numero';
    x = Number(x);
    if (x < 10 || x > 20) throw 'Informe um numero entre 10 e 20';

    document.getElementById('msg').innerHTML = 'Perfeito! Você digitou o numero: '+x;

} catch(erro){
    document.getElementById('msg').innerHTML = 'Erro: '+erro;
} finally{
    document.getElementById('numero').value = '';
}
}