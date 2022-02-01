// without function 
/*let array = [10,2,3,5,7,9]
let sum = 0;
for(let i=0; i<array.length; i++){
    sum = sum + array[i];

}
console.log(sum);*/
// using function
function sumArray(numbers){
    let sum =0;
    for(let i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
} 
const firstInput = sumArray([10,2,3,5,7,9]);
console.log(firstInput);

const secondInput = sumArray([5,9,11,56,86]);
console.log(secondInput);