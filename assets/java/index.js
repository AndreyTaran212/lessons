/*
let userNumber = prompt('введите число:');
 userNumber*=userNumber;
 console.log(userNumber);
*/
/*
let firstNuber = prompt('input number');
firstNuber = parseFloat(firstNuber);
let  secondNumber = prompt('Input second');
secondNumber = parseFloat(secondNumber);
let sum = firstNuber + secondNumber;
sum = parseFloat(sum);
const avg = sum/2;

 alert(avg);
*/
/*
 let firstNumber = prompt('add lengh');
 firstNumber*=firstNumber;
 alert(firstNumber);
 */

/*
let km = prompt('enter kilometrs');
const mile = 0.621371*km;
alert (mile+'миль');
*/
/*
let a =prompt('enter a');
a = parseFloat(a);
let b = prompt('enter b');
b = parseFloat(b);
let x =b* -1 / a;
alert(x);
*/

const x = prompt('Input number');

if( isNaN(x)    ){

    alert("Value isn't number");

}
else {
    const  result = x % 2;


    if (result === 0){

        alert('Code in if');
    }
    else {
        alert('number is odd')
    }

}


console.log('Reset of program');
