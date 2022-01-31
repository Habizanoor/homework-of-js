function fahrenheitToCelsius(fahrenheit){
    let celsious =(fahrenheit - 32) * 5/9;
    return celsious;
}
const firstGiventemp = fahrenheitToCelsius(1);
console.log(firstGiventemp);

const secondGiventemp = fahrenheitToCelsius(7);
console.log(secondGiventemp);

const thirdGiventemp = fahrenheitToCelsius(100);
console.log(thirdGiventemp);

const forthGiventemp = fahrenheitToCelsius(67);
console.log(forthGiventemp);
