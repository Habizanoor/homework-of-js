// without function 
/*let array = [5,7,9,-2,6];
let smallest = array[0];
for(let i=0; i<array.length; i++){
    let element = array[i];
    if (element<smallest){
         smallest = element;
    } 
}
console.log(smallest);*/

// using function 
function smallestArray(numbers){
    let smallest =numbers[0];
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        if (element<smallest){
            smallest = element;
        } 
    }
    return smallest;
}
const firstInput = smallestArray([15,40,60,39,13,11,5,59,87]);
console.log(firstInput);

const secondInput = smallestArray([-2,-17,9,-7,-16]);
console.log(secondInput);

const thirdInput = smallestArray([-2,-6,-8,-3]);
console.log(thirdInput);