// Single line Comment
/*Multiline Comment */

// Value and variable
/*
let js  = 'amazing';
console.log(40+23+8-18);

console.log("Sahal")
console.log("19")

let firstName = 'Muhammad';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let Sahal_Nurdin = "SN";
let $function = 27;

let person = "Sahal";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Programmer";

console.log(myCurrentJob);
*/



// let digunakan untuk membuat variable baru
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 19);
console.log(typeof 'Sahal');

javascriptIsFun = 'YES!!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);    

year = 2003;
console.log(year);
console.log(typeof year)


console.log(typeof null);
console.log(typeof 18)
*/
// let, const, dan var
// const muncul di es6 (2015) es(ecmascript)
/*
let age = 19;
age = 20;
console.log(age)

const birthday = 2003;
*/
// birthday = 2004;
// console.log(birthday);
/*
var job = "Programmer";
job = "Scientist";
console.log(job);

var lastName = "Nurdin";
console.log(lastName);
*/
/* Assigment
1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one) 
2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const. 
3. Try to change one of the changed variables now, and observe what happens */
// Answer:
/*
language = "Bahasa Indonesia";
const country = "Indonesia";
const continent = "Asia";
const isIsland = false;
isIsland = true;
*/


// Math Operators
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas /10 **3);
// 2** 3 means 2 to the power of 3 = 2 + 2 + 2

const firstName = 'Jonas';
const lastName = "Schemedtman"
console.log(firstName + ' ' + lastName);

// Assigment Operators
let x = 10 + 5; // 15
x += 10;        // x = x + 25
x *= 4;        // x = x * 25
x++;       // x = x + 1
x--;
x--;
console.log(x);

// Comparison operatpr
console.log(ageJonas > ageSarah); // >, <, >=, <= 
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

// Operator Presedence
// Visit mdn
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// Coding Challenge #1
/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. store Mark's and John's mass and height in variables
2. Calculate both their BMI's using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks height 78 kg and is 1.69 m tall. 
John weight 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weight 85 kg and is 1.78 m tall.
*/

// BMI CALCULATOR
/*
const mass1 = prompt("Masukkan berat badan Mark: ");
let height = prompt("Masukkan tinggi badan Mark: ");
const height1 = height * 10;
const BMI1 = mass1 / (height1 * height1);

const mass2 = prompt("Masukkan berat badan John: ");
let height2 = prompt("Masukkan tinggi badan John: ");
const height3 = height2 * 10;
const BMI2 = mass2 / (height3 * height3);


if (BMI1 > BMI2) {
    console.log("Mark has a higher BMI than John");
} else {
    console.log("John has a higher BMI than Mark");
}

 MR JONAS SOLUTION
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (height * heightJohn);
const markHeigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn , markHeigherBMI);
*/

// STRING AND TEMPLATE LITERALS
// penggunaannya menggunakan backtick `
/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

penggunaan menggunakan template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;

console.log(jonasNew);

console.log(`just a regular string ...`);

console.log(`string with \n\ 
multiple \n\
lines`);

console.log(`string 
multiple
lines`);

*/
// Taking Decisions: if / else statements
/*
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving license 👌");
}

const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license 👌");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// Coding Challenge #2

/* 
Use the BMI example from challenge #1, and the code you already wrote, adn improve it;

1. Print a nice output to the  console, saying who has the higher BMI, the message can be either "Mark's BMI is higher than John's !" or "John's BMI is higher than Mark's!"
2. Use a template literals to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 👌

GOOD LUCK 👍


// Mr Jonas Solution
const massMark = 95;
const heightMark = 1.88;
const massJohn = 88;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's !");
// } else {
//     console.log("John's BMI is higher than Mark's !");
// }

// With template literals
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI is (${BMIJohn}) higher than Mark's (${BMIMark})!`);
}


// Type Conversion dan Coersion
// TYPE CONVERSION ITU MANUAL SEDANGKAN COERSION ITU OTOMATIS BEKERJA DI BALIK LAYAR

const inputYear = "1991";
// Menggunakan function
// Harus menggunakan kapital di awal hurufnya
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); //Nan (Not an Number // not a valid number)
console.log(typeof NaN);

console.log(String(23), 23); // warna putih string pink integer

// Coersion (js punya coersion)
console.log("I' am" + 23 + " years old."); // ini adalah coersion jadi auto conversion jadi string yang tadinya integer

console.log("23" + "10" + 3);
console.log("23" - "10" - 3);
console.log("23" + "2");
console.log("23" / "2");

let n = '1' + 1; // hasilnya string '11'
n = n - 1; // convert '11' jadi integer 11 dikurang 1 = 10
console.log(n); // 10

// INTINYA JIKA DITAMBAH JADI STRING, JIKA DIKURANG JADI NUMBER BIASA
*/

// TRUTHY AND FALSY VALUES
// DALAM JS HANYA AD 5 FALSY VALUES: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean(null));
console.log(Boolean(NaN));

// INI ADALAH LOGIC PENGGUNAANNYA
const money = 0; // Nilai falsy dari 0 adalah false maka dia akan eksekusi yang else karena else bernilai false
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}





