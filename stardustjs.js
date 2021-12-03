
var irradiance = 0.0;
var currentPower = 0.0;
var maxPower = 0.0; 
var degradation = 0.0; 

function calcDeg(){
    irradiance = document.getElementById("irr").value;
    currentPower = document.getElementById("curr").value;
    maxPower = document.getElementById("max").value;
    degradation = 1 -((currentPower * 1000)/(maxPower * irradiance));
    degradation = degradation.toFixed(3);
    document.getElementById("degradation").innerHTML = degradation;
}
