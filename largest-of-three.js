function maxValue(first, second, third){
    if (first>second && first>third){
        return first;
    }
    else if(second>first && second>third){
        return second;
    }
    else{
        return third;
    }
}
const firstInput=maxValue(10,22,36);
console.log(firstInput);

const secondInput=maxValue(5,89,88);
console.log(secondInput);