function smallestValue(first,second,third){
    if(first<second && first<third){
        return first;
    }
    else if(second<first && second<third){
        return second;
    }
    else{
        return third;
    }
}
const firstInput = smallestValue(10,13,20);
console.log(firstInput);

const secondInput = smallestValue(15,-1,20);
console.log(secondInput);
