var newColor;
var maquinaG;
function changeImage(newColor) {
    //var elem = document.getElementById('imagens');

    if(newColor == 'Piedra'){
        document.getElementById('imagens').src="https://www.tekcrispy.com/wp-content/uploads/2018/11/Herramientas-de-Piedra-P-640x409.jpg";
        jugador = 'Piedra';
    }
    if(newColor == 'Papel'){
        document.getElementById('imagens').src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRryD0VdldI1nqzCkLf32JMy160-yZzeKJy6w&usqp=CAU";
        jugador = 'Papel';
    }
    if(newColor == 'Tijeras'){
        document.getElementById('imagens').src="https://images-na.ssl-images-amazon.com/images/I/318J5mHXGTL._AC_.jpg";
        //document.getElementById('intento').style.color = blue;
        //document.getElementById("itemC").innerHTML = "";
        jugador = 'Tijeras';
    }
}

function changeImagePC() {
    //var elem = document.getElementById('imagens');
    var maquina = Math.random();
    if(maquina <= 0.33){
        maquinaG = "Piedra"
        //document.getElementById('intento').style.display = 'none';
    }
    if(maquina > 0.33 && maquina < 0.67){
        maquinaG = "Tijeras"
    }
    if(maquina > 0.66){
        maquinaG = "Papel"
    }

    if(maquinaG == 'Piedra'){
        document.getElementById('imagensxd').src="https://www.tekcrispy.com/wp-content/uploads/2018/11/Herramientas-de-Piedra-P-640x409.jpg";
    }
    if(maquinaG == 'Papel'){
        document.getElementById('imagensxd').src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRryD0VdldI1nqzCkLf32JMy160-yZzeKJy6w&usqp=CAU";
    }
    if(maquinaG == 'Tijeras'){
        document.getElementById('imagensxd').src="https://images-na.ssl-images-amazon.com/images/I/318J5mHXGTL._AC_.jpg";
    }

    validacion(jugador,maquinaG);
}

function validacion(jugadorX,maquinaGX){
    // var jugadorX = jugador;
    // var maquinaGX = maquinaG;
    //CASO EMPATE
    if(jugadorX === maquinaGX){
        document.getElementById('itemC').innerHTML = "😱 TIE 😱";       
    }
    //Casos perder
    if(jugadorX == "Papel" && maquinaGX == "Tijeras"){
        document.getElementById('itemC').innerHTML = "😭YOU LOSE😭";
    }
    if(jugadorX == "Piedra" && maquinaGX == "Papel"){
        document.getElementById('itemC').innerHTML = "😭YOU LOSE😭";
    }
    if(jugadorX == "Tijeras" && maquinaGX == "Piedra"){
        document.getElementById('itemC').innerHTML = "😭YOU LOSE😭";
    }
    //casos ganar
    if(maquinaGX == "Papel" && jugadorX == "Tijeras"){
        document.getElementById('itemC').innerHTML = "😎 YOU WIN! 😎";
    }
    if(maquinaGX == "Piedra" && jugadorX == "Papel"){
        document.getElementById('itemC').innerHTML = "😎 YOU WIN! 😎";
    }   
    if(maquinaGX == "Tijeras" && jugadorX == "Piedra"){
        document.getElementById('itemC').innerHTML = "😎 YOU WIN! 😎";
    }
}
