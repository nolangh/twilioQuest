/*
--Create a file called fizzBuzz.js
--Get a number as a command line argument
--Print Java, Script, JavaScript, or the number its self as described in the table below
----------------------------------------------------------------------------------------
--Divisible by 3	"Java"
--Divisible by 5	"Script"
--Divisible by 3 AND 5	"JavaScript"
--NOT divisible by 3 OR 5	Input Number

*/
const numberInput = Number(process.argv[2]);
let output = "";

if (numberInput % 3 == 0 && numberInput % 5 == 0) {
  output += "JavaScript";
} else if (numberInput % 3 == 0) {
  output += "Java";
} else if (numberInput % 5 == 0) {
  output += "Script";
} else {
  output = String(numberInput);
}

console.log(output);
