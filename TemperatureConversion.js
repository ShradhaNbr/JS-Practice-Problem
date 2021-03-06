//Program to convert the temperatures 
const prompt = require('prompt-sync')();

function convert_CelsiustoFahreinheit(celsius) {
    degF = (9/5) * celsius + 32;
    console.log("Celsius to Fahreinheit conversion value is: " +degF);
}

function convert_FahreinheittoCelsius(fahreinheit) {
    degC = ( fahreinheit - 32 ) * ( 5 / 9 );
    console.log("Fahreinheit to Celsius conversion value is: " +degC);
}


let option = prompt("Enter option: 1. Celsius to Fahreinheit 2. Fahreinheit to Celsius : ");

switch(Number(option)) {

    case 1:
        let celsius = prompt('Enter the temperature range within 0*C to 100*C: ');
        if ( celsius >= 0 && celsius <= 100 ) {
            convert_CelsiustoFahreinheit(celsius);
        }       
        else {
            console.log("Please enter within the range");
        }
        break;

    case 2:
        let fahreinheit = prompt('Enter the temperature range within 32*F to 212*F: ');
        if ( fahreinheit >= 32 && fahreinheit <= 212 ) {
            convert_FahreinheittoCelsius(fahreinheit);
        }       
        else {
            console.log("Please enter within the range");
        }
        break;
    default:
        console.log("Invalid Option");
        }