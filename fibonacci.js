// normal formula
/*const fibo = [0,1];
for(let i = 2; i < 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);
console.log("function starts");*/
// using function 
function fibonacci(number){
    
    if (typeof number != 'number'){
        return 'enter a number';
    }
    else if( number < 2){
        return 'enter a number larger than 1';
    }
    else{
        const fibo = [0,1];
        for(let i=2;i<=number;i++){
            // fibonacci formula
            // nth = (n-1)th + (n-2)th 
            fibo[i] = fibo[i-1] + fibo[i-2];
        }
        return fibo;
    }
    
    
}
const firstInput = fibonacci(-1);
console.log(firstInput);

const secondInput = fibonacci('5');
console.log(secondInput);

const thirdInput = fibonacci(5);
console.log(thirdInput);

const forthInput = fibonacci("one");
console.log(forthInput);

const fifthInput = fibonacci("hey");
console.log(fifthInput);

const sixthInput = fibonacci(13);
console.log(sixthInput);