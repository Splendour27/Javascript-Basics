// Area of rectangle
function calculateArea(length, width)
{
    return length * width;
}

console.log(calculateArea(6, 10));
output :60

console.log(calculateArea(4, 8));
output : 32

console.log(calculateArea(8, 12));
output : 96


// Greeting Message
function greet(Splendour) {
    return "Good day, Miss," + Splendour + ", How are you doing today? ";
}

console.log(greet("Splendour"));
 Good day, Miss,Splendour, How are you doing today? 

function greet(Glory) {
    return "Good day, Miss," + Glory + ", How are you doing today? ";
}

function greet(Emmanuel) {
    return "Good day, Mr," + Emmanuel + ", How are you doing today? ";
}

console.log(greet("Glory"));
 Good day, Miss,Glory, How are you doing today? 

console.log(greet("Emmanuel"));
 Good day, Mr,Emmanuel, How are you doing today? 

 
 // Sum of Numbers
 function sumNumbers(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(sumNumbers([12, 65, 1, 46, 5]));
 129

console.log(sumNumbers([12,45,3,2,10]));
 72


 // Loops
 for (let i = 1; i <= 10; i ++) {
    console.log(i);
}
1
2
3
4
5
6
7
8
9
10

let i = 1; while (i <= 10) {
    console.log(i);
    i++;
}
1
2
3
4
5
6
7
8
9
10

// Sum of Numbers in an Array

function sumForArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumForArray([9, 8, 7, 6, 5]));
35

function sumArrayWhile(numbers) {
    let sum = 0;
    let i = 0;
    while (i <
           numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}

console.log(sumArrayWhile([6, 7, 5, 3, 2]));
23


// Even or Odd Numbers
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOrOdd(4));
Even

console.log(checkEvenOrOdd(3));
Odd


// A Loop that prints the Elements of an Array
let array = ["sandals", "skirts", "bed", "laptops"];


for (let i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }
sandals
skirts
bed
laptops

let j = 0; while (j < array.length) {
    console.log(array[j]);
    j++;
}
sandals
skirts
bed
laptops
3


// Grade Calculator
function gradeCalculator(score) {
    if (score >= 70) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else if (score >= 40) {
        return "D";
    } else if (score >= 30) {
        return "E";
    } else if (score >= 20) {
        return "F";
    }
}

console.log(gradeCalculator(70));
A

console.log(gradeCalculator(60));
B

console.log(gradeCalculator(50));
C

console.log(gradeCalculator(40));
D

console.log(gradeCalculator(30));
E

console.log(gradeCalculator(20));
F