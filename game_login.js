 function logIn(){

   Nome1=document.getElementById("jogador1").value
   Nome2=document.getElementById("jogador2").value

localStorage.setItem("key1" , Nome1 )
localStorage.setItem("key2" , Nome2)


window.location="game.html"
   

 }