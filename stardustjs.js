
var irradiance = 0.0;
var currentPower = 0.0;
var maxPower = 0.0; 
var calculate = document.getElementById("calculate"); 

//irradiance = document.getElementById("irr").value;
//currentPower = document.getElementById("curr").value;
//maxPower = document.getElementById("max").value; 


calculate.addEventListener("click", onClick, false);

document.getElementById("test").textContent = currentPower; 

function onClick(e){
    whatClicked = this.id;
    if(whatClicked == "calculate"){
        irradiance = document.getElementById("irr").value;
        currentPower = document.getElementById("curr").value;
        maxPower = document.getElementById("max").value;
        calcDeg(irr, curr, max);
    }
}
function calcDeg(irr, curr, max){
    var stdIrr = 1000;
    var operatingEff = ((stdIrr*curr)/(irr*max)) * 100;
    var degredation = 100 - operatingEff;
}
var buttons = document.getElementsByClassName("btn");
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", onClick, false);
}
