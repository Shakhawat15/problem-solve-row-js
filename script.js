// 1. Print number from 1 to 10
let i;
let numbers = ''
for(i = 1; i <= 10; i++) {
    numbers += i + ' ';
    document.getElementById('p1').innerHTML = numbers;
}