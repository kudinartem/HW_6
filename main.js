//Task No1

function findDaysInMonth(month, year) {
   let monthNum =  new Date(Date.parse(month + " 1," + year)).getMonth() + 1;
   let yearNum = new Date(year, monthNum, 0).getDate();
   return `The Month has ${yearNum} days`;
}
console.log(findDaysInMonth('February', 2012));

//Task No2

let operandI = (i) => !isNaN(+(i));
let operationX = (x) => x == '+' || x == '-' || x == '*' || x == '/';
let result = 0;
let operation = prompt('Enter operator:');
while (operationX(operation) === false) {
   operation = prompt('Enter operator:');
};
let firstOperand = Number(prompt('Enter first number:'));
while (operandI(firstOperand) === false) {
   firstOperand = Number(prompt('Enter first number:'));
}; 
let secondOperand = Number(prompt('Enter second number:'))
while (operandI(secondOperand) === false) {
   secondOperand = Number(prompt('Enter second number:'))
}; 
switch (operation) {
   case '+':
      result = firstOperand + secondOperand;
      break;
   case '-':
      result = firstOperand - secondOperand;
      break;
   case '*':
      result = firstOperand * secondOperand;
      break;
   case '/':
      result = firstOperand / secondOperand;
      break;
}
console.log(`${firstOperand} ${operation} ${secondOperand} = ${result}`);

//Task No3

let checkAnagram = (firstWord, secondWord) => {
   firstWord = firstWord.toLowerCase().split('').sort().join('');
   secondWord = secondWord.toLowerCase().split('').sort().join('');
   return firstWord === secondWord;
};
console.log(checkAnagram('sleep', 'speel'));
console.log(checkAnagram('sLeEP', 'speel'));
console.log(checkAnagram('Hi', 'Bye'));