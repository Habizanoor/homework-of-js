// without function 
/*const array=[7,9,20,17,50,46];
let largest =array[0];
for(let i=0; i<array.length; i++){
    let element = array[i];
    if(element > largest){
        largest = element;
    }
}
console.log(largest);*/
function heighestArray(numbers){
    let largest = numbers[0];
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const firstInput = heighestArray([10,20,50,75,65,34,1]);
console.log(firstInput);

const secondInput = heighestArray([5,9,56,48,97,36,73,30]);
console.log(secondInput);