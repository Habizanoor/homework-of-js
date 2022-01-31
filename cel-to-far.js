function celsiusToFahrenheit(celsious){
     let fahrenheit = (celsious * 9/5) + 32;
    return fahrenheit;
}
const firstGiventemp = celsiusToFahrenheit(1);
console.log(firstGiventemp);

const secondGiventemp = celsiusToFahrenheit(0);
console.log(secondGiventemp);

const thirdGiventemp = celsiusToFahrenheit(7);
console.log(thirdGiventemp);

const forthGiventemp = celsiusToFahrenheit(32);
console.log(forthGiventemp);