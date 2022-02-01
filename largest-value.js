function maxValue(first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}
const firstInput = maxValue(13,36);
console.log(firstInput);

const secondInput = maxValue(-7,100);
console.log(secondInput);