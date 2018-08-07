//Mensagem de timeout e interval, com botões que as cancelam  
var msgCancelT = setTimeout(msg, 5000);
function msg(){
    console.log("mensagem");
}

var msgCancelI = setInterval(msgI, 2000);
function msgI(){
    console.log("Mensagem com intervalo");
}


