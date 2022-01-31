function simpleInterest(principle,interestRate,timeInYear){
    let sI=(principle * interestRate * timeInYear) / 100 ;
    return sI; 
}

const firstPersonInterst = simpleInterest(27,30,2);
console.log(firstPersonInterst);

const secondPersonInterst = simpleInterest(56,60,1);
console.log(secondPersonInterst);

const thirdPersonInterst = simpleInterest(27,30,3);
console.log(thirdPersonInterst);

const forthPersonInterst = simpleInterest(70,30,4);
console.log(forthPersonInterst);

const fifthPersonInterst = simpleInterest(29,50,3);
console.log(fifthPersonInterst);
