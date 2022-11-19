import ReadlineSync from "readline-sync";
var Voornaam = ReadlineSync.question("wat is jouw Voornaam? ");
var Familienaam = ReadlineSync.question("wat is jouw Familienaam? ");
var Straat = ReadlineSync.question("Straat en huisnummer? ");
var Postcode = ReadlineSync.question("Postcode?");
var Gemeente = ReadlineSync.question(" Gemeente?");
console.log("mijn naam is " + Voornaam + "!");
console.log("mijn naam is " + Familienaam + "!");
console.log("Ik woon in" + Straat);
console.log(Postcode);
console.log(Gemeente);
let mijnAdress = `-----------------------
| ${Voornaam.substring(0, 1)}.${Familienaam}    |
| ${Straat} |
| ${Postcode} ${Gemeente} |
-----------------------`;
console.log(mijnAdress);
