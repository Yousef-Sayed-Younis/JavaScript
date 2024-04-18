let myDiv = document.createElement("div");
let myHeading = document.createElement("h2");
let myP = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

myHeading.appendChild(myHeadingText);
myDiv.appendChild(myHeading);

myP.appendChild(myParagraphText);
myDiv.appendChild(myP);

myDiv.className = "product";

document.body.appendChild(myDiv);
