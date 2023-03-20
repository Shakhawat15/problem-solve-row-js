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
var j;
for(j = 1; j <= 2; j++) {
    printTable(j);
}

var manyTable;
var a
function printTable(number) {
    for(a = 1; a <= 10; a++) {
        var results = number + ' * ' + a + ' = ' + number * a;
        manyTable += results + '<br>';
        document.getElementById('p4').innerHTML = manyTable;
    }
}

// 5. Calculate the sum of numbers from 1 to 10:
var i;
var sum = 0;
for(i = 1; i <= 10; i++) {
    sum += i;
    document.getElementById('p5').innerHTML = sum;
}