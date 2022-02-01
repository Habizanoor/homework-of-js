function smallestValue(first, second){
    if(first < second){
        return first;
    }
    else{
        return second;
    }
}
const firstInput = smallestValue(50,76);
console.log("smallest value is",firstInput);

const secondInput = smallestValue(13,25);
console.log("smallest value is",secondInput);