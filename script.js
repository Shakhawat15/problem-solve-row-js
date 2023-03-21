// 1. Print number from 1 to 10
var i;
var numbers = ''
for(i = 1; i <= 10; i++) {
    numbers += i + ' ';
    document.getElementById('p1').innerHTML = numbers;
}

// 2. Print the odd numbers less than 100
var i;
var oddNumbers = ''
for(i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        oddNumbers += i + ' ';
        document.getElementById('p2').innerHTML = oddNumbers;
    }
}

// 3. Print the multiplication table with 7:
var i;
var rows = '';
for(i = 1; i <= 10; i++) {
    var result = '7 * ' + i + ' = ' + 7 * i;
    rows += result + '<br>';
    document.getElementById('p3').innerHTML = rows;
}

// 4. Print all the multiplication tables with numbers from 1 to 10:
var manyTables = ''; // change variable name to manyTables to reflect that we will have multiple tables
var a;
var j;

function printTable(number) {
  var table = '<div class="table-container">'; // wrap each table in a container div
  for (a = 1; a <= 10; a++) {
    var result = number * a;
    var row = '<div>' + number + ' * ' + a + ' = ' + result + '</div>';
    table += row;
  }
  table += '</div>'; // close the container div
  manyTables += table;
}

for (j = 1; j <= 10; j++) {
  printTable(j);
}

document.getElementById('p4').innerHTML = manyTables;


// 5. Calculate the sum of numbers from 1 to 10:
var i;
var sum = 0;
for(i = 1; i <= 10; i++) {
    sum += i;
    document.getElementById('p5').innerHTML = sum;
}