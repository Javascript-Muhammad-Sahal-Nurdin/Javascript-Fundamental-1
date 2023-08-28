/** @format */

//////////////////////////////////////
// Single line Comment
/*Multiline Comment */
//////////////////////////////////////

//////////////////////////////////////
// Value and variable
// let js = "amazing";
// console.log(40 + 23 + 8 - 18);

// console.log("Sahal");
// console.log("19");

// let firstName = "Muhammad";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let Sahal_Nurdin = "SN";
// let $function = 27;

// let person = "Sahal";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Programmer";
// var haloSahal = "Sahal";

// console.log(myCurrentJob);
// console.log(haloSahal);
// console.log(myCurrentJob);
//////////////////////////////////////

//////////////////////////////////////
// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// const country = "Indonesia";
// const continent = "Asia";
// const population = 279000000;

// console.log(country);
// console.log(continent);
// console.log(population);
//////////////////////////////////////

//////////////////////////////////////
// DATA TYPES
// let digunakan untuk membuat variable baru

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 19);
// console.log(typeof "Sahal");

// javascriptIsFun = "YES!!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// sahal = "sahal";
// console.log(sahal);

// year = 2003;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);
// console.log(typeof 18);
//////////////////////////////////////

//////////////////////////////////////
// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console
// let isIsland = true;
// let language;
// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);
//////////////////////////////////////

//////////////////////////////////////
// let, const, dan var
// const muncul di es6 (2015) es(ecmascript)

// let age = 19;
// age = 20;
// console.log(age);

// const birthday = 2003;

// birthday = 2004; //error karena const tidak bisa assign ulang
// console.log(birthday); //error

// var job = "Programmer";
// job = "Scientist";
// console.log(job);

// var lastName = "Nurdin";
// console.log(lastName);
//////////////////////////////////////

//////////////////////////////////////
/* Assigment
1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one) 
2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const. 
3. Try to change one of the changed variables now, and observe what happens */
// Answer:

// let language = "Bahasa Indonesia";
// language = "English";
// const country = "Indonesia";
// const continent = "Asia";
// const isIsland = true;

// console.log(language);
// console.log(country);
// console.log(continent);
// console.log(isIsland);
//////////////////////////////////////

//////////////////////////////////////
// Math Operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10 ** 3);
// 2** 3 means 2 to the power of 3 = 2 + 2 + 2

// const firstName = "Jonas";
// const lastName = "Schemedtman";
// console.log(firstName + " " + lastName);

// Assigment Operators
// let x = 10 + 5; // 15
// console.log(x);
// x += 10; // x = x + 10
// console.log(x);
// x *= 4; // x = x * 4
// console.log(x);
// x++; // x = x + 1
// console.log(x);
// x--; // x = x - 1
// console.log(x);
// x--;
// console.log(x);

// Comparison operatpr
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log();

// console.log(now - 1991 > now - 2018);

//////////////////////////////////////

//////////////////////////////////////
// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// let population = 280000000;
// const isHalf = population / 2;
// console.log(isHalf);
// 2. Increase the population of your country by 1 and log the result to the console
// population++;
// console.log(population);
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// const finlandPopulation = 6000000;
// const indonesiaPopulation = 280000000;
// console.log(finlandPopulation < indonesiaPopulation);
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// const avgPopulatiuon = 33000000;
// console.log(avgPopulatiuon > indonesiaPopulation);
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'
// const description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";
// console.log(description);

////////////////////////////////////

////////////////////////////////////
// Operator Presedence
// Visit mdn
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);
////////////////////////////////////

////////////////////////////////////
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
////////////////////////////////////

////////////////////////////////////
// BMI CALCULATOR

// const mass1 = prompt("Masukkan berat badan Mark: ");
// let height = prompt("Masukkan tinggi badan Mark: ");
// const height1 = height * 10;
// const BMI1 = mass1 / (height1 * height1);

// const mass2 = prompt("Masukkan berat badan John: ");
// let height2 = prompt("Masukkan tinggi badan John: ");
// const height3 = height2 * 10;
// const BMI2 = mass2 / (height3 * height3);

// if (BMI1 > BMI2) {
//   console.log("Mark has a higher BMI than John");
// } else {
//   console.log("John has a higher BMI than Mark");
// }

// //  MR JONAS SOLUTION
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJhon * heightJohn);
// const markHeigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHeigherBMI);
////////////////////////////////////

////////////////////////////////////
// STRING AND TEMPLATE LITERALS
// penggunaannya menggunakan backtick `

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// // penggunaan menggunakan template literals
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;

// console.log(jonasNew);

// console.log(`just a regular string ...`);

// console.log(`string with \n\
// multiple \n\
// lines`);

// console.log(`string
// multiple
// lines`);

////////////////////////////////////

////////////////////////////////////
// Assignment
// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
// const population = 11000000;
// const country = "Portugal";
// const continent = "Europe";
// const language = "portuguese";
// console.log(
//   `${country} is in ${continent}, and its ${population} people speak ${language}`
// );

////////////////////////////////////

////////////////////////////////////
// Taking Decisions: if / else statements

// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start driving license 👌");
// }

// const age = 15;

// if (age >= 18) {
//     console.log("Sarah can start driving license 👌");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1998;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);
////////////////////////////////////

////////////////////////////////////
// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// const portugalPopulation = 33;
// const averagePopulation = 33 - 22;
// if (portugalPopulation >= 33) {
//   console.log("Portugal's population is above average");
// } else {
//   console.log(
//     `Portugal's population is ${averagePopulation} million below average`
//   );
// }
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original
// const portugalPopulation1 = 13;
// const averagePopulation1 = 13 - 22;
// if (portugalPopulation1 >= 33) {
//   console.log("Portugal's population is above average");
// } else {
//   console.log(
//     `Portugal's population is ${averagePopulation1} million below average`
//   );
// }

// const portugalPopulation2 = 130;
// const averagePopulation2 = 130 - 22;
// if (portugalPopulation2 >= 33) {
//   console.log("Portugal's population is above average");
// } else {
//   console.log(
//     `Portugal's population is ${averagePopulation2} million below average`
//   );
// }
////////////////////////////////////

////////////////////////////////////
// Coding Challenge #2

// Use the BMI example from challenge #1, and the code you already wrote, adn improve it;

// 1. Print a nice output to the  console, saying who has the higher BMI, the message can be either "Mark's BMI is higher than John's !" or "John's BMI is higher than Mark's!"
// 2. Use a template literals to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// HINT: Use an if/else statement 👌

// GOOD LUCK 👍

// Mr Jonas Solution
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 88;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's !");
// } else {
//     console.log("John's BMI is higher than Mark's !");
// }

// With template literals
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI is (${BMIJohn}) higher than Mark's (${BMIMark})!`);
// }
////////////////////////////////////

////////////////////////////////////
// Type Conversion dan Coersion
// TYPE CONVERSION ITU MANUAL SEDANGKAN COERSION ITU OTOMATIS BEKERJA DI BALIK LAYAR

// const inputYear = "1991";
// Menggunakan function
// Harus menggunakan kapital di awal hurufnya
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas")); //Nan (Not an Number // not a valid number)
// console.log(typeof NaN);

// console.log(String(23), 23); // warna putih string pink integer di conolenya

// Coersion (js punya coersion)
// console.log("I' am " + 23 + " years old."); // ini adalah coersion jadi auto conversion jadi string yang tadinya integer

// console.log("23" + "10" + 3);
// console.log("23" - "10" - 3);
// console.log("23" + "2");
// console.log("23" / "2");

// let n = "1" + 1; // hasilnya string '11'
// n = n - 1; // convert '11' jadi integer 11 dikurang 1 = 10
// console.log(n); // 10

// INTINYA JIKA DITAMBAH JADI STRING, JIKA DIKURANG JADI NUMBER BIASA
////////////////////////////////////

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5'; // 4 --number
// '19' - '13' + '17'; // 617 --> string
// '19' - '13' + 17; // 23 --> number
// '123' < 57; // false // jadi angka 123nya
// 5 + 6 + '4' + 9 - 4 - 2; //1143 --> number
// 2. Execute the operations to check if you were right
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

////////////////////////////////////
// TRUTHY AND FALSY VALUES
// DALAM JS HANYA ADA 5 FALSY VALUES: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean({}));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// INI ADALAH LOGIC PENGGUNAANNYA
// const money = 0; // Nilai falsy dari 0 adalah false maka dia akan eksekusi yang else karena else bernilai false
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// // INI JUGA SAMA
// let height; // ini adalah undefined
// if (height) {
//   console.log("YAY! height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

////////////////////////////////////

////////////////////////////////////
// Equality Operators: == vs. ===
// Jadi perbedaannya adalah jika pada === menandakan bahwa ini lebih strict dibandingkan dengan == karena tidak terjadi coersion atau penukaran otomatis tipe data. (Intinya tanda === menandakan bahwa tipe data pada variabel juga di check)
// const age = "18";
// if (age === 18) console.log("You just become an adullt :D");

// ==
// if (age == 18) console.log("You just become an adullt :D (loose)");

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23? ");
////////////////////////////////////

////////////////////////////////////
// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// if (numNeighbours === 1) {
//   console.log("Only 1 border");
// }
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// else if (numNeighbours >= 1) {
//   console.log("is greater than 1");
// }
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// else {
//   console.log("No borders");
// }
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation
////////////////////////////////////

////////////////////////////////////
// Boolean Logic
//  Penjelasan ada di materi dan video

// LOGICAL OPERATORS
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = true; // c
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }
////////////////////////////////////

////////////////////////////////////
// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// const language = "english";
// const population = 40;
// const isIsland = false;
// const country = "Portugal";
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// if (language === "english" && population < 50 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)
////////////////////////////////////

////////////////////////////////////
// Coding Challenge 3

// There are two gymnastic teams, Dolphins and Koalas, they compete against each other 3 times. The winner with the highest average score wins the a trophy!

// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition and print it to the console. Don't forget that there be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirements for a minimum score of 100. With this rule, a team only wins if it has a higher score of at least 100 points , HINT : Use a logical operator to test for minimum score, as well as multiple else-if blocks.

// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// Test Data: Dolpins score 96, 108, and 89. Koalas score 88, 91, and 110.
// TEST DATA BONUS 1: Dolpins score 97, 112, and 101. Koalas score 109, 95, and 123.
// TEST DATA BONUS 2: Dolpins score 97, 112, and 101. Koalas score 109, 95, and 106.

// TEST DATA
// const dolpinsScore = 96 + 108 + 89;
// const koalasScore = 96 + 108 + 89;

// const scoreAverageDolphins = dolpinsScore / 3;
// const scoreAverageKoalas = koalasScore / 3;
// console.log(scoreAverageDolphins, scoreAverageKoalas);

// if (scoreAverageDolphins > scoreAverageKoalas) {
//   console.log("Dolphins Wins!!!");
// } else if (scoreAverageDolphins < scoreAverageKoalas) {
//   console.log("Koalas Wins!!!");
// } else if (scoreAverageDolphins === scoreAverageKoalas) {
//   console.log("Draw !!!");
// }

// TEST DATA BONUS 1
// const dolpinsScore = 97 + 112 + 101;
// const koalasScore = 109 + 95 + 123;

// const scoreAverageDolphins = dolpinsScore / 3;
// const scoreAverageKoalas = koalasScore / 3;
// console.log(scoreAverageDolphins, scoreAverageKoalas);
// if (scoreAverageDolphins > scoreAverageKoalas && scoreAverageDolphins >= 100 ) {
//     console.log("Dolphins Wins!!!");
// } else if (scoreAverageDolphins < scoreAverageKoalas && scoreAverageKoalas >= 100){
//     console.log("Koalas Wins!!!");
// } else if (scoreAverageDolphins === scoreAverageKoalas) {
//     console.log("Draw !!!");
// }

// TEST DATA BONUS 2
// const dolpinsScore = 10 + 10 + 10;
// const koalasScore = 0 + 0 + 0;
// const scoreAverageDolphins = dolpinsScore / 3;
// const scoreAverageKoalas = koalasScore / 3;
// console.log(scoreAverageDolphins, scoreAverageKoalas);

// if (scoreAverageDolphins > scoreAverageKoalas && scoreAverageDolphins >= 100 ) {
//     console.log("Dolphins Wins!!!");
// } else if (scoreAverageDolphins < scoreAverageKoalas && scoreAverageKoalas >= 100){
//     console.log("Koalas Wins!!!");
// } else if (scoreAverageDolphins === scoreAverageKoalas &&scoreAverageDolphins >= 100 && scoreAverageKoalas >= 100) {
//     console.log("Draw !!!");
// } else {
//     console.log("No one wins the trophy 😒");
// }
////////////////////////////////////

////////////////////////////////////
//  The Switch Statement
// const day = "Saturday";

// switch (
//   day // day === Saturday
// ) {
//   case "Monday":
//     console.log("Plan Course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "Tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("Write code examples");
//     break;
//   case "Friday":
//     console.log("Record Videos");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }
////////////////////////////////////

////////////////////////////////////
// Statements and Expressions

// Contoh expressions: (potongan code  yang menghasilkan value)
// 3 + 4
// true
// 1991
// true && false && !false

// Statement adalah CARA bagaiman kita mengolah code menjadi sebuah value contoh nya if else statement
// if (23 > 10) {
//     const str = '23 is bigger';
// }

// console.log(`I'm ${2037 - 1991} years old`)
////////////////////////////////////

////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
age >= 18
  ? console.log("I like to drink wine 👌")
  : console.log("I like to drink water 👌");

const drink = age >= 18 ? "wine 👌" : "water 👌";

console.log(drink);

// Bisa digunakan di template literals
// console.log(`I like to drink ${age >= 18 ? "wine 👌" : "water 👌"}`);
////////////////////////////////////

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%

1. Your task is to calculate the tip, depending on the bill value. Create a variable called "tip" for this. It's not allowed to use an if/else statement (if it's easier for you, you can start with an if/else statement, and them try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40, and 430
*/

// const billValue = Number(prompt("Masukkan bill: "));

// const tipCalc =
//   billValue >= 50 && billValue <= 300
//     ? billValue * (15 / 100)
//     : billValue * (20 / 100);

// console.log(
//   `The bill was ${billValue}, the tip was ${tipCalc}, and the total value ${
//     billValue + tipCalc
//   }`
// );
