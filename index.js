//2.16
// let gallons = +prompt("Enter gallons");
// let miles;
// let totalMiles = 0;
// let totalGallons = 0;

// while (gallons != -1) {
//   totalgallons += gallons;
//   miles = +prompt("Enter miles");
//   totalmiles += miles;
//   gallons = +prompt("Enter gallons");
// }
// alert(totalmiles / totalgallons);

//2.17
// version 1
// let accountNumber = +prompt('Enter account number');
// let beginningBalance = 0;
// let totalCharges = 0;
// let totalCredits = 0;
// let creditLimit = 0;
// let newBalance = 0;

// if(accountNumber != -1) {
//     beginningBalance = +prompt('Enter begnning balance');
//     totalCharges = +prompt('Enter total charges');
//     totalCredits = +prompt('Enter total credits');
//     creditLimit = +prompt('Enter credt limits');
//     newBalance = beginningBalance + totalCharges - totalCredits;
// }

// (newBalance > totalCredits)
// 	? alert(`Account number: ${accountNumber}
// 	 		Credit limit: ${creditLimit}
// 	  		New balance ${newBalance}
// 	   		Credt limit exceeded`)
// 	: null

// version 2
// const calc(accountNumber, beginningBalance, totalCharges, totalCredits, creditLimit) => {
// 	const newBalance = beginningBalance + totalCharges - totalCredits;
// 	if(newBalance > totalCredits)
// 		console.log(`Account number: ${accountNumber}
// 					Credit limit: ${creditLimit}
// 					New balance ${newBalance}
// 					Credt limit exceeded
// 			`)
// }

// calc(100, 5394.78, 1000, 500, 5500)

//2.18
// const salary = 200;
// let grossSales = +prompt("Enter your sales amount");

// const count = (grossSales) => {
// 	return salary + (grossSales * 9 / 100)
// }

// console.log(count(5000))
// console.log(count(6000))
// console.log(count(7000))

//2.19

// let salary = 0;
// const count = (hours, rate) => {
// 	if(hours <= 40) {
// 		salary = hours * rate
// 	} else {
// 		return salary = 40 * rate + ( hours - 40 ) * rate * 1.5
// 	}
// }

// console.log(count(50, 10))

//2.20
// let counter = 0;
// let num = +prompt("Enter a number");
// let largest = 0;

// while (counter < 10) {
//     num = +prompt("Enter a number");
//     (largest < num) ? largest = num : counter++

// console.log(largest);

//2.21
// for(let i = 1; i <= 5; i++) {
// 	console.log(i, 10 * i, 100 * i, 1000 * i)
// }


//2.28
// let side =  +prompt('Enter the square side');
// let row = 0;
// let size = side;

// while(side > 0) {
//     row = size;
//     while(row > 0) {
//         if(size == side || side == 1 || row == 1 || row == size){
//            document.write("*")
//         }
//         else {
//             document.write('_');
//         }

//         row--;

//     }
//     document.write("<br>");
//     side--;

// }


//2․29

// const num = +prompt('Enter a 5 dgit number');
// const first = Math.floor(num / 10000);
// const second = Math.floor(num % 10000 / 1000);
// const fourth = Math.floor(num % 10000 % 1000 % 100 / 10);
// const fifth = num % 10000 % 1000 % 10;

// (first == fifth && second == fourth)
// 	? console.log('number is a palindrome')
// 	: console.log('number is not a palindrome')


//2.31
// let side = 8;
// let row = 0;
// while (side > 0) {
//   row = 8;
//   if (side % 2 !== 0) {document.write("_");}

//   while (row > 0) {
//     document.write("* ");
//     row--;
//   }
//   document.write("<br />");
//   side--;
// }

// 2.33

// let radius = +prompt('Enter the radius');
// let pi = 3.14159;
// console.log("The diameter is " + radius * 2 );
// console.log("The circumference is " + radius * 2 * pi);
// console.log("The area is " + radius * radius * pi)

//2.35
// const a = +prompt('Enter first number');
// const b = +prompt('Enter second number');
// const c = +prompt('Enter third number');

// (c * c == a * a + b * b)
// 	? console.log('can be sides of a triangle')
// 	: console.log("can't be sides of a triangle")

//2.36

// do {
//     let a = +prompt('Enter first number');
//     let b = +prompt('Enter second number');
//     let c = +prompt('Enter third number');
// }
//  while ( a <= 0 || b <= 0 || c <= 0 );
// ( c * c == a * a + b * b )
// ? console.log('are sides of a triangle')
// : console.log("are not sides of a triangle")

//2․38
// const factorial = (num) => {
//     let result = 1;
//     for (let i = 2; i <= num; i++)
//         result *= i;
//     return result;
// }

// console.log(factorial(5))

//b
// let n = 0;
// let fact = 1;
// let accuracy = 10;
//  Math.E= 1;

//  while ( n < accuracy ) {
//  fact *= n;
//  Math.E += 1 / fact;
// n++
// }
// console.log(Math.E)

//2.40
// let sum = 0;
// let number = +prompt("Enter the number of values to be summed");
// let value = 0;

// for (let i = 1; i <= number; i++) {
//   value = +prompt("Enter a value: ");
//   sum += value;
// }

// console.log(`Sum of the ${number} values is ${sum}`);

//2.43

// let number = +prompt("Enter the number of values");
// let value = 0;
// let min = +prompt("Enter a value");

//  for ( let i = 2; i <= number; i++ ) {
//    value = +prompt("Enter next value")

//  if ( value < min ){
//  	min = value;
// 		}
//  }

//  console.log(min)

//2.44

// let multi = 1;
// for(let i = 3; i <= 15; i += 2) {
//     multi *= i;
// }
// console.log(multi)

//2.46

// let amount;
// let principal = 1000;

// for (let rate = 5; rate <= 10; rate++) {
//   console.log(
//     "Interest Rate: " + rate / 100 + "\n" + "Year   Amount on deposit"
//   );

//   for (let year = 1; year <= 10; year++) {
//     amount = Math.floor(principal * Math.pow(1 + rate / 100, year));
//     console.log(year + "        " + amount);
//   }
//   console.log("\n");
// }

//2.47

// for(let i = 0; i <= 10; i++) {
//     for(let j = 0; j < i; j++) {
//         document.write('*');

//     }
//     document.write('<br />')
// }

// document.write('<br />')


//2.48

// let number = 0;

// for (let i = 1; i <= 5; i++) {
//   number = +prompt("Enter 5 numbers between 1 and 30: ");
//   for (let j = 1; j <= number; j++) {
//       document.write("*")
//     };
//   document.write("<br />");
// }

//2.55
// let count = 0;
// let c;
// let ab;
// for (let i = 1; i <= 500; i++) {
//   for (let j = 1; j <= 500; j++) {
//     for (let k = 1; k <= 500; k++) {
//       c = k * k;
//       ab = i * i + j * j;
//       if (c == ab) {
//         console.log(i, j, k);
//         count++;
//       }
//     }
//   }
// }

// console.log(count)


//2.57

// let x = 10, y = 6, a = 3, b = 3,
//  g = 5, Y = 1, i = 2, j = 9;
// ((!(x < 5) && !(y >= 7)) && (!((x < 5) || (y >= 7))))
// 	? console.log('equivalent')
// 	: console.log('not equivalet')

// //  !( a == b ) || !( g != 5 )
// if ((!(a == b) || !(g != 5)) && (!((a == b) && (g != 5)))) {
//     console.log('equivalent');
// }
// else {
//     console.log('not equivalet')
// }

// //!( ( x <= 8 ) && ( y > 4 ) )

// if (!((x <= 8) && (Y > 4)) && (!((x <= 8) || (Y > 4)))) {
//     console.log('equivalent');
// }
// else {
//     console.log('not equivalet')
// }

// // !( ( i > 4 ) || ( j <= 6 ) )

// if( !(( i > 4 ) || ( j <= 6 ) && (!(( i > 4 ) && ( j <= 6 )) )))
//  {
//     console.log('equivalent');
// }
// else {
//     console.log('not equivalet')
// }

//2.58
// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5 - i; j++) {
//         document.write('_')
//     }
//     for(let k = 1; k <= 2 * i - 1; k++) {
//         document.write('*')
//     }
//     document.write('<br />')
// }
// for(let i = 4; i >= 1; i--) {
//     for(let j = 1; j <= 5 - i; j++) {
//         document.write('_')
//     }
//     for(let k = 1; k <= 2 * i - 1; k++) {
//         document.write('*')
//     }
//     document.write('<br />')
// }

//2.59

// let size = +prompt('Enter an odd number for a diamond');
// for(let i = 1; i <= size; i += 2){
//     for(let j = (size - i) / 2; j > 0; j--) {
//         document.write('_')
//     }
//     for(let k = 1; k <= i; k++) {
//         document.write('*')
//     }
//     document.write('<br />')
// }
// for(let i = size; i >= 0; i -= 2) {
//     for(let j = (size - i) / 2; j > 0; j--) {
//         document.write('_')
//     }
//     for(let k = 1; k <= i; k++) {
//         document.write('*')
//     }
//     document.write('<br />')
// }

//3.20 page 268

// const multiple = (num1, num2) => {
// (num2 % num1 === 0)
// ? console.log(`${num2} is a multiple of  ${num1}`)
// : console.log(`${num2} is not a multiple of  ${num1}`)
// }

// multiple(3, 12)

//3.21

// let num = +prompt('Enter a number');

// const isEven = (num) => {
//     while(num != -1) {
// (num % 2) ? console.log(num + ' is even') : console.log(num + ' is odd')
//         num = +prompt('Enter a number');
//     }

// }
// isEven(num)

//3.22

// let side = +prompt('Enter number');

// const square = (side) => {
//     for(let i = 0; i < side; i++) {
//         for(let j = 0; j < side; j++){
//         document.write('*')
//     }
//         document.write('<br />')
//     }
// }

// square(side)

//3.25

// const quotient = (a, b) => a / b

// const remainder = (a, b) => a % b

// let number = +prompt('Enter an integer between 1 and 32767');
// let divisor = 10000;

// while( number >=  1) {
//     if(number >= divisor) {
//         console.log(Math.floor(quotient(number, divisor)));
//         number = remainder( number, divisor );
//         divisor = quotient( divisor, 10 );
//     } else {
//         divisor = quotient( divisor, 10 );
//     }
// }

//3.26

// let hours = +prompt('Enter hours');
// let minutes = +prompt('Enter minutes');
// let seconds = +prompt('Enter seconds');
// let temp = 0;

// const calcTime = (hours, minutes, seconds) => {
//     return 3600 * ( hours >= 12 ? hours - 12 : hours ) + 60 * minutes + seconds;

// }

// temp = calcTime(hours, minutes, seconds);

//  hours = +prompt('Enter hours');
//  minutes = +prompt('Enter minutes');
//  seconds = +prompt('Enter seconds');

//3.27
// const toCelcius = num => Math.round(5 / 9 * (num - 32))

// const toFarenheit = num => Math.round(9 / 5 * (num + 32))

//  for ( let i = 0; i <= 100; i++ ){
// console.log(`${i} Celcius is equivalent to ${toFarenheit(i)} farenheit` )
// }
//  for ( let j = 32; j <= 212; j++ ) {
//     console.log(`${j} Farenheit is equivalent to ${toCelcius(j)} celcius`)
// }

//3.30
// const isPrime = num => {
// if (num < 2) {
// 	return false
// }
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
// 			return false
// 		}
//   }
//   return true;
// }


//3.31

// const reverseNumber = number => {
//     let revNumber = 0;
//     while (number > 0) {
//       revNumber = (revNumber * 10) + (number % 10);
//       number = Math.floor(number / 10);
//     }
//     return revNumber;
//   }

//3.32

// function gcd(a, b) {
//     if (a == 0){
//     		return b;
//		}
// while (b != 0) {
//     if (a > b)
//         a = a - b;
//     else
//         b = b - a;
// }
// return a;
// }

// console.log(gcd(9999, 27))

//3.33

// function qualityPoints(average) {
//     if(average >= 90 && average <= 100) {
//         return 4;
//     } else if(average >= 80 && average < 90) {
//         return 3;
//     } else if(average >= 70 && average < 80) {
//         return 2;
//     } else if( average >= 60 && average < 70){
//         return 1;
//     } else if( average < 60) {
//         return 0
//     }
// }

// console.log(qualityPoints(60));
// console.log(qualityPoints(70))
// console.log(qualityPoints(89))
// console.log(qualityPoints(100))

//3.35

// let x = +prompt("Enter first number");
// let y = +prompt("Enter second number");

// let response = +prompt("How much is" + x + " * " + y);

// while (response != -1 && response != x * y) {
//   response = +prompt("No, please try again");
// }

// while (response != -1) {
//   console.log("Very good");
//   x = +prompt("Enter first number");
//   y = +prompt("Enter second number");
//   response = +prompt("How much is" + x + " * " + y);
// }

//3.37

// let x = 0;
// let y = 0;
// let response = 0;

// let rightAns = 0;
// let wrongAns = 0;

// for(let i = 0; i < 5; i++) {

//     x = +prompt("Enter first number");
//     y = +prompt("Enter second number");

//    response = +prompt(`How much is ${x} * ${y}`);
//    (response != x * y) ? wrongAns++ : rightAns++;

// }
// (rightAns / (rightAns + wrongAns) < 0.75 )
// 	? console.log("Please ask your instructor for extra help.")
// 	: null

//3.42
// const Hanoi = (n, start,  end,  temp) => {
// 	if (n === 0) {
// 		return;
// 	} else {
// 		Hanoi(n - 1, start,  temp,  end)
// 		console.log(`Move disk ${n} from pilar ${start} to pilar ${end}`)
//         Hanoi(n - 1, temp, end, start)
// 	}
// }

//     let n = 4
//     towerOfHanoi(n, 'A', 'C', 'B')

