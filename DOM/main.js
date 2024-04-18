/*  (1)

let myP = document.createElement("p"),
  myPText = document.createTextNode("This Paragraph Created By JavaScript");

myP.appendChild(myPText);

document.body.appendChild(myP);
*/

/*  (2)

  [1] - document.getElementById() 
  [2] - document.getElementsByTagName()
  [3] - document.getElementsByClassName()   | Not Compatible With IE 8
  [4] - document.querySelectorAll()         | Not Compatible With IE 8
*/
/* 
let myDiv = document.getElementById("test");

myDiv.innerHTML = "changed By JavaScript";
*/

/*  (3)

  document.title
  document.images
  document.forms
  document.body
  document.anchors  | a Without href
  document.links    | a With href

*/

/*  (4)

  // Get HTML Content
  Element.innerHTML
  
  // Get Text Content
  Element.textContent

*/

/*  (5)

  Element.Attribute

*/
/*
let myDiv = document.querySelector("div");

myDiv.id = "id-from-js";

myDiv.className = "class-from-js";
*/

/*  (6)

  Element.getAttribute()
  Element.setAttribute()
  
*/
/*
let myImage = document.querySelector("img");

console.log(myImage.getAttribute("alt"));
myImage.setAttribute("src", "http://placehold.it/100/000");
*/

/*  (7)

  Element.hasAttribute()
  Element.removeAttribute()

*/

/*  (8)

  Element.classList | Not Supported In IE 9
  Element.classList.contains()
  Element.classList.item()

*/
// Task
/*let myButton = document.getElementsByTagName("button")[0];
// let myButton = document.getElementById("btn");

let myP = document.getElementsByTagName("p")[0],
  myText = document.createTextNode("This is By Button"),
  myDiv = document.getElementsByTagName("div")[0];

myButton.onclick = function () {
  if (myP.classList.contains(myButton.textContent)) {
    myDiv.appendChild(myText);
  }
};
*/

/*  (9)

  Element.classList.add()
  Element.classList.remove()
  Element.classList.toggle()

*/

/*  (10)

  Element.childElementCount
  Element.children
  Element.childNodes

*/

/*  (11)

  Element.firstChild
  Element.firstElementChild
  Element.lastChild
  Element.lastElementChild

*/

/*  (12)

  document.createElement()
  document.createTextNode()
  Element.appendChild()

*/

/*  (13)

  Element.insertBefore(Element, demandElement)

*/

/*  (14)

  Element.removeChild()

*/

/*  (15)

  Element.childNodes[].nodeName
  Element.childNodes[].tagName

  Element.childNodes[][].nodeValue
  Element.childNodes[].childNodes[].nodeType

*/

/*  (16)

  cloneNode(false)  | Defualt, Clone Attributes Only
  cloneNode(true)   | Clone Attributes And Children

  Elemend.childNodes[].cloneNode()

*/

/*  (17)

  Element.parentNode
  Element.parentElement

*/

/*  (18)

  Element.childNodes[].nextSibling
  Element.childNodes[].nextElementSibling
  
  Element.childNodes[].previousSibling
  Element.childNodes[].previousElementSibling

*/

/*  (19)

  inputElement.focus()
  inputElement.blur()

*/
/*
window.onload = function () {
  document.getElementById("myInput").focus();
};
*/

/*  (20)

  buttonElement.click()

*/

/*  (21)

  Element.addEventListener()    | Not Supported In IE 8
  Element.removeEventListener() | Not Supported In IE 8

*/

/*  (22)

  Element.contains()

*/

/*  (23)

  Element.clientHeight  | Count => Height + Padding Only
  Element.clientWidth   | Count => Height + Padding Only

*/

/*  (24)

  Element.scrollHeight  | Count => Height + Padding + Scroll Only
  Element.scrollWidth   | Count => Height + Padding + Scroll Only

*/

/*  (25)
 
  Element.offsetHeight  | Count => Height + Padding + Scroll + Border Only
  Element.offsetWidth   | Count => Height + Padding + Scroll + Border Only

*/

/*  (26)

  Element.scrollTop
  Element.scrollLeft

*/

/*  (27)

  Element.clientTop   | Count => Border + Scroll
  Element.clientLeft  | Count => Border + Scroll

*/

/*  (28)

  Element.style.property = value

*/

/*  (29)

  document.inputEncoding
  document.lastModified
  document.URL

*/

/*  (30)

let myElement = document.createElement("div"),
  myText = document.createTextNode("This Div Created With JavaScript"),
  myStartComment = document.createComment(
    "This Start Comment Created With JavaScript"
  ),
  myEndComment = document.createComment(
    "This End Comment Created With JavaScript"
  );

document.body.appendChild(myElement);

myElement.appendChild(myStartComment);

myElement.appendChild(myText);

myElement.appendChild(myEndComment);

*/
/*
let myUl = document.getElementById("list");

for (let i = 0; i < 20; i++) {
  myUl.appendChild(document.createElement("li"));
}
*/

/*                     End                      */