function gpaCalculator(marks){
    if(marks >= 80){
        return 'A+';
    }
    else if(marks >= 70 && marks <= 79){
        return 'A';
    }
    else if(marks >= 60 && marks <= 69){
        return 'A-';
    }
    else if(marks >= 50 && marks <= 59){
        return 'B';

    }
    else if(marks >= 40 && marks <= 49){
        return 'C';
    }
    else if(marks >= 33 && marks <= 39){
        return 'D';
    }
    else{
        return 'F';
    }
}
const banglaMarks = 80;
console.log(gpaCalculator(banglaMarks));

const mathMarks = 90;
console.log(gpaCalculator(mathMarks));

const physicsMarks = 70;
console.log(gpaCalculator(physicsMarks));

const biologyMarks = 75;
console.log(gpaCalculator(biologyMarks));

const englishMarks = 69;
console.log(gpaCalculator(englishMarks));

