/**
 * Solve some javaScript problem with row javaScript
 * Solved by: Md Shakhawat Hossen
 */


// 1. Print number from 1 to 10:
var numbers = '' // Declare numbers variable for store the numbers
// "For loop" for iterate 1 to 10 numbers
for (var i = 1; i <= 10; i++) {
  numbers += i + ' '; // Store 1 to 10 numbers with space in numbers variable
  // Print the output in html using innerHTML on "p1" id
  document.getElementById('p1').innerHTML = numbers;
}


// 2. Print the odd numbers less than 100:
var oddNumbers = '' // Declare oddNumbers variable for store the odd numbers
// "For loop" for iterate 1 to 100 numbers
for (var i = 1; i <= 100; i++) {
  // Check the number odd or even
  if (i % 2 === 1) {
    oddNumbers += i + ' '; // Store odd numbers with space in oddNumbers variable 1 to 100
    // Print the output in html using innerHTML on "p2" id
    document.getElementById('p2').innerHTML = oddNumbers;
  }
}


// 3. Print the multiplication table with 7:
var rows = ''; // Declare rows variable for store multiplication table rows
// "For loop" for iterate 1 to 10 numbers
for (var i = 1; i <= 10; i++) {
  var result = '7 * ' + i + ' = ' + 7 * i; // Declare result variable for store multiplication table 7 value
  rows += result + '<br>'; // Store result in rows variable
  // Print the output in html using innerHTML on "p3" id
  document.getElementById('p3').innerHTML = rows;
}


// 4. Print all the multiplication tables with numbers from 1 to 10:
var manyTables = ''; // Declare manyTables variable for store multiplication 1 to 10 tables rows 
/**
 * Create function to print the multiplication table
 * @param {Number} number 
 */
function printTable(number) {
  var table = '<div class="table-container">'; // Wrap each table in a container div
  // "For loop" for iterate 1 to 10 numbers
  for (var a = 1; a <= 10; a++) {
    var result = number * a; // Declare result variable for store table number and iterate number calculation
    var row = '<div>' + number + ' * ' + a + ' = ' + result + '</div>'; // Store result in rows variable
    table += row;
  }
  table += '</div>'; // Close the container div
  manyTables += table; // Store each table in the myTable variable
}

// "For loop" for iterate 1 to 10 table numbers 
for (var j = 1; j <= 10; j++) {
  // Invoke the printTable() function to pass the table number
  printTable(j);
}
// Print the output in html using innerHTML on "p4" id
document.getElementById('p4').innerHTML = manyTables;


// 5. Calculate the sum of numbers from 1 to 10:
var sum = 0; // Declare sum variable to store the 1 to 10 numbers summation
// "For loop" for iterate 1 to 10 numbers
for (var i = 1; i <= 10; i++) {
  sum += i; // Store the sum of numbers from 1 to 10 in the sum variable
}
// Print the output in html using innerHTML on "p5" id
document.getElementById('p5').innerHTML = sum;


// 6. Calculate 10!
var prod = 1; // Declare prod variable to store the 10 number's Factorial
// "For loop" for iterate 1 to 10 numbers
for (var i = 1; i <= 10; i++) {
  prod *= i; // Store the factorial of the 10 number in the prod variable
}
// Print the output in html using innerHTML on "p6" id
document.getElementById('p6').innerHTML = prod;


// 7. Calculate the sum of odd numbers grater than 10 and less than 30:
var sum = 0; // Declare sum variable to store the grater than 10 and less than 30 odd numbers summation
// "For loop" for iterate 1 to 10 numbers
for (var i = 10; i < 30; i++) {
  // Check the number odd or even
  if (i % 2 == 1) {
    sum += i; // If odd then add the number in the sum variable
  }
}
// Print the output in html using innerHTML on "p7" id
document.getElementById('p7').innerHTML = sum;


// 8. Create a function that will convert from Celsius to Fahrenheit:
/**
 * Create the function that will convert Celsius to Fahrenheit
 * @param {Number} celsius 
 * @returns Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32; // Formula to convert Celsius to Fahrenheit
}
// Invoke the celsiusToFahrenheit() function and store the result in the "fahrenheit" variable
var fahrenheit = celsiusToFahrenheit(20);
// Print the output in html using innerHTML on "p8" id
document.getElementById('p8').innerHTML = fahrenheit;


// 9. Create a function that will convert from Fahrenheit to Celsius:
/**
 * Create a function that will convert Fahrenheit to Celsius
 * @param {Number} fahrenheit 
 * @returns Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / (9 / 5); // Formula to convert Fahrenheit to Celsius
}
// Invoke the fahrenheitToCelsius() function and store the result in the "celsius" variable
var celsius = fahrenheitToCelsius(68);
// Print the output in html using innerHTML on "p9" id
document.getElementById('p9').innerHTML = celsius;


// 10. Calculate the sum of numbers in an array of numbers:
/**
 * Create function that will calculate the sum of numbers in an array of numbers
 * @param {Array} arr 
 * @returns All array element's sum
 */
function sumArray(arr) {
  var sum = 0; // Declare the sum variable to store the sum of array element
  // "For loop" for iterate 0 to array length numbers
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add the element of the array to the sum
  }
  return sum; // Return the sum of array element
}
var arr = [2, 4, 1, 5, 23, 59, 23, 54, 29]; // The array that we calculate in the sumArray function
// Invoke the sumArray() function and store the result in the "sum" variable
var sum = sumArray(arr);
// Print the output in html using innerHTML on "p10" id
document.getElementById('p10').innerHTML = sum;


// 11. Calculate the average of the numbers in an array of numbers:
function averageArray(arr) {
  var sum = 0; // Declare the sum variable to store the average of array element
  // "For loop" for iterate 0 to array length numbers
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add the element of the array to the average of the array element
  }
  return sum / arr.length; // Return the average of array element
}
var arr = [2, 4, 67, 13, 9, 5]; // The array that we calculate in the averageArray() function
// Invoke the averageArray() function and store the result in the "sum" variable
var avg = averageArray(arr);
// Print the output in html using innerHTML on "p11" id
document.getElementById('p11').innerHTML = avg;

// 12. Create a function that receive an array of numbers and returns an array containing only the positive numbers:
/**
 * 
 * @param {Array} arr 
 * @returns only positive number from the array
 */
function getPositives(arr) {
  return arr.filter(pNumber => pNumber >= 0); // Return the positive number from the array
}
var arr = [-2, 41, 2, 5, -10, -3, 13]; // The array that we calculate in the getPositives() function
// Invoke the getPositives() function and store the result
var positiveArray = getPositives(arr);
// Print the output in html using innerHTML on "p11" id
document.getElementById('p12').innerHTML = positiveArray;


// 13. Find the maximum number in an array of numbers:
var arr = [2, 4, 67, 13, 9, 5]; // The array that were we find the maximum number
var max = Math.max(...arr); // Store the maximum number in the array
// Print the output in html using innerHTML on "p13" id
document.getElementById('p13').innerHTML = max;


// 14. Print the first 10 Fibonacci numbers without recursion:
var f0 = 0, f1 = 1; // Declare the two variable calculate the first 10 fibonacci numbers
// Print the output in html using innerHTML on "p14" id
var outputDiv = document.getElementById("p14");

outputDiv.innerHTML += f0 + "<br>"; // Add the f0 data in outputDiv variable
outputDiv.innerHTML += f1 + "<br>"; // Add the f1 data in outputDiv variable
// "For loop" for iterate 2 to 10 numbers
for (var i = 2; i < 10; i++) {
  var fi = f1 + f0; // Store the first 10 fibonacci numbers in the "fi" variable
  outputDiv.innerHTML += fi + "<br>"; // Add the fi data in outputDiv variable

  f0 = f1; // Swap the "f1" variables value to "f0" variable
  f1 = fi; // Swap the "fi" variables value to "f1" variable
}


// 15. Create a function that will find the Fibonacci number using recursion:
/**
 * 
 * @param {Number} n 
 * @returns the given number Fibonacci
 */
function findFibonacci(n) {
  // Check the number by if condition
  if (n <= 1) {
    return n; // if number >= 1 then return the number
  } else {
    return findFibonacci(n-1) + findFibonacci(n-2); // the function recursively calls itself with n-1 and n-2 as arguments
  }
}
// Invoke the findFibonacci() function and store the result in n variable
var n = findFibonacci(5);
// Print the output in html using innerHTML on "p13" id
document.getElementById('p15').innerHTML = n;