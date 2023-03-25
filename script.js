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
  // "For loop" for iterate 1 to 10 numbers
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
