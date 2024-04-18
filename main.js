// Wait The Window To Load
// window.onload = function() {
//     document.querySelector("h1").style.color = "blue";
// };

// document.write("<h1>Hello Page</h1>");

// console.log("Hello Page");
// console.error("Boys");
// console.table(["Yousef", "Sayed", "Younis"]);
// console.log("Hello From %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px");

// console.log(typeof "Yousef Sayed");

// var user = "Yousef";
// console.log(user)

// let a = "We love";
// let b = "JavaScript";

// console.log(a, b);

// console.log(`${a} ${b}`);

// let TheTitle = "Elzero",
//   TheDesc = "Elzero Web School",
//   TheData = "25/10";
// let Div = `
//     <div class="card">
//         <h3>Hello ${TheTitle}</h3>
//         <p>${TheDesc}</p>
//         <span>${TheData}</span>
//     </div>
// `;

// document.write(Div.repeat(4));

// let a = 10,
//   b = "20",
//   c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// // a = 11,  11  +  20  +  80  -  11 = 100
// // b = 21, c = 81
// // a = 12
// console.log(++a + -b + +c++ - -a++ + +a);
// // a = 13   13 + (-21) + 81 - (-13) + 14 = 100
// // a = 14, b = 21, c = 82
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// // c = 81,   81 + 21 +  13 *  21  - 22 * 13+  12 -   1 = 100
// // a = 13, b = 22, a = 12

// let d = "-100",
//   e = "20",
//   f = 30,
//   g = true;

// console.log(-d * e); // 2000
// console.log(-d + ++e * ++g + ++f); //173
// //  100 + 21  *  2  + 31 = 173

// console.log((100.55555).toFixed(2));

// console.log(Number("10 Yousef"));   // NaN
// console.log(+"10 Yousef");          // NaN
// console.log(parseInt("10 Yousef")); // 10
// console.log(parseInt("Yousef 10")); // NaN

// let a = 1_00,
//   b = 2_00.5,
//   c = 1e2,
//   d = 2.4;

// console.log(Math.trunc(Math.max(a, b, c, d))); // 200

// console.log(Math.pow(a, 2)); // 10_000

// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(parseInt(d));

// console.log((b / 3 - d / 15).toFixed(2)); // 66.67 => string
// console.log(Math.ceil(b / Math.ceil(d))); // 64 => Number

// let a = "Elzero Web School";

// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// console.log(a.split(" ", 1)); // ["Elzero"]

// console.log(a.substr(0, 6) + a.substr(-7)); // Elzero School

// // Dynamic // eLZERO WEB SCHOOl
// console.log(
//   a.charAt(0).toLowerCase() + a.slice(1, -1).toUpperCase() + a.substr(-1)
// );

// 1 > 2
//   ? console.log("Fuck")
//   : 2 > 3
//   ? console.log("Bich")
//   : 5 > 4
//   ? console.log("Love")
//   : console.log("War");

// let price = null; // or undefind or "" or 0 or false

// console.log(`The Price is ${price || 100}`);
// console.log(`The Price is ${price ?? 100}`); // For 0 and false

// let a = 10;

// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 To 40")
//   : a > 40
//   ? console.log("> 40")
//   : console.log("unknown");

// let st = "Elzero Web School";

// if (typeof st === typeof "34") {
//   console.log("Good");
// }

// if (st.toLowerCase().charAt(st.toLowerCase().indexOf("w")) === "w") {
//   console.log("Good");
// }

// if (st !== "string") {
//   console.log("Good");
// }

// if (typeof st === typeof "number") {
//   console.log("Good");
// }

// if (String(st.split(" ", 1)).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

// let job = "Manager",
//   salary = 0;

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     break;
//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     break;
//   default:
//     salary = 4000;
// }
// console.log(salary);

// let holidays = 0,
//   money = 0;

// if (holidays === 0) {
//   money = 5000;
// } else if (holidays === 1 || holidays === 2) {
//   money = 3000;
// } else if (holidays === 3) {
//   money = 2000;
// } else if (holidays === 4) {
//   money = 1000;
// } else if (holidays === 5) {
//   money = 0;
// } else {
//   money = 0;
// }
// console.log(`My Money is ${money}`);

// let zero = 0,
//   counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// console.log(my.reverse().slice(counter - counter ** zero)); // ["Osama", "Elham", "Mazero", "Ahmed"]

// console.log(my.slice(counter, counter + counter ** zero + counter ** zero)); // ["Elham", "Mazero"]

// console.log(my[counter].slice(zero, counter - counter ** zero).concat(my[counter + counter ** zero].slice(counter - counter ** zero))); // Elzero

// console.log(my[counter + counter ** zero][counter + counter ** zero] + my[counter + counter ** zero][counter + counter ** zero + counter ** zero].toUpperCase()); // "rO"

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"],
//   myEmployees = ["Amged", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samia"];

// if (myAdmins.includes("Stop")) {
//   admins = myAdmins.slice(0, myAdmins.indexOf("Stop")).length;
//   document.write(`<div>We Have ${admins} Admins</div>`);
// }

// for (let i = 0; i < admins; i++) {
//   document.write(`<hr>`);
//   document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
//   document.write(`<h3>Team Members:</h3>`);

//   x = 0;
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myAdmins[i][0] === myEmployees[j][0]) {
//       x++;
//       document.write(`<p>- ${x} ${myEmployees[j]}</p>`);
//     }
//   }
//   document.write(`</div>`);
// }

// function showDetails(...info) {
//   for (let i = 0; i < info.length; i++) {
//     if (typeof info[i] === "string") {
//       UserN = info[i];
//     } else if (typeof info[i] === "number") {
//       age = info[i];
//     } else {
//       hire = info[i];
//       if (hire) {
//         sen = "Available";
//       } else {
//         sen = "Not Available";
//       }
//     }
//   }
//   console.log(`Hello ${UserN}, Your Age Is ${age}, You Are ${sen} For Hire`);
// }
// showDetails(false, "Sayed", 30);

// let namesAll = function (...names) {
//   return `String [${names.join("], [")}] => Done !`;
// };

// let namesAll = (...names) => `String [${names.join("], [")}] => Done !`;

// console.log(namesAll("Yousef", "Sayed", "Younis"));

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[0];

// let calc = function (one, two, ...nums) {
//   return one + two + nums[0];
// };

// console.log(calc(10, myNumbers[0], myNumbers[1]));

// function removeCharFrom(string, char) {
//   if (
//     string.indexOf(char.toLowerCase()) !== -1 ||
//     string.indexOf(char.toUpperCase()) !== -1
//   ) {
//     // g: Global Replacement
//     // i: Case-Insensitive Replacement
//     return string.replace(new RegExp(char, "gi"), "");
//   } else {
//     return string;
//   }
// }

// function removeCharFrom(string, char) {
//   return string
//     .split("")
//     .filter((c) => c !== char.toLowerCase() && char.toUpperCase())
//     .join("");
// }

// console.log(removeCharFrom("Elzero@ Web@@ @@School", "@"));

// function remove_duplicate_words_from(sentence) {
//   sentence = sentence.split(" ");
//   let newSen = [];
//   for (let i = 0; i < sentence.length; i++) {
//     if (newSen.indexOf(sentence[i]) === -1) {
//       newSen.push(sentence[i]);
//     }
//   }
//   return newSen.join(" ");
// }

// function remove_duplicate_words_from(sentence) {
  //   let wordsList = sentence.split(" ");
  //   let newSet = new Set(wordsList);
  //   let arrayFromSet = Array.from(newSet);
  //   return arrayFromSet.join(" ");
  // }
  
// function remove_duplicate_words_from(sentence) {
//   return [...new Set(sentence.split(" "))].join(" ");  
// }
  
// console.log(remove_duplicate_words_from("Hello Elzero Web Web Hello School"));
