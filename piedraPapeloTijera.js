var opc1 = "piedra";
var opc2 = "papel";
var opc3 = "tijera";

var resultado = function (a,b){
    if (a===opc1 && b===opc3){
        console.log("Piedra le gana a tijera");
    }else if (a===opc1 && b===opc2){
        console.log("Piedra pierde contra papel");
    }else if (a===opc2 && b===opc3){
        console.log("Papel pierde contra tijera");
    }else if (a===opc2 &&b===opc1){
        console.log("Papel gana contra piedra");
    }else if (a===opc3 && b===opc1){
        console.log("Tijera pierde contra piedra");
    }else if (a===opc3 && b===opc2){
        console.log("Tijera gana contra papel");
    }else{
        console.log("EMPATE");
    }
}
