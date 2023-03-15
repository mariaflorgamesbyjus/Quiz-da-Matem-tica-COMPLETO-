shhshs1 = localStorage.getItem("key1")
hshssh2 = localStorage.getItem("key2")
P1 = 0
P2 = 0

document.getElementById("lo").innerHTML = shhshs1
document.getElementById("la").innerHTML = hshssh2

document.getElementById("pergunttador").innerHTML = shhshs1 + " pergunta"
document.getElementById("iddeles").innerHTML = hshssh2 + " resposta"

document.getElementById("pontuação01").innerHTML = P1 + "  pontos"
document.getElementById("pontuation02").innerHTML = P2 + "  pontos"

function grande() {

    nome1 = Number(document.getElementById("n1").value)
    nome2 = Number(document.getElementById("n2").value)
    resultado = nome1 * nome2
    texto = '<input type= "text" id="resposta"><br><button onclick= "chaves()" class="btn btn-success">enviar agora.</button> '
    document.getElementById("output").innerHTML = texto



}
var chutenatrave = "hshssh2"
function chaves() {

    VariaveldoChaves =Number(document.getElementById("resposta").value)
if (VariaveldoChaves == resultado){

// é pontitos01 é pontitos ummmmmm anotado dia: 01/01/2001

if (chutenatrave == "hshssh2" ){

P2 ++ 

document.getElementById("pontuation02").innerHTML = P2 + "  pontos"
// se não for o jogador 2...



}

else{
    P1 ++ 

document.getElementById("pontuação01").innerHTML = P1 + "  pontos"
}

}
if (chutenatrave == "hshssh2" ) {
    chutenatrave = "outronomequeesquecidenovo"

    document.getElementById("pergunttador").innerHTML = hshssh2 + " pergunta"
document.getElementById("iddeles").innerHTML = shhshs1 + " resposta"

} else {
    
    chutenatrave = "hshssh2"

    document.getElementById("pergunttador").innerHTML = shhshs1 + " pergunta"
document.getElementById("iddeles").innerHTML = hshssh2 + " resposta"



}

}






