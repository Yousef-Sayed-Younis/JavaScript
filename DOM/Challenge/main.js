// Header class="website-head" style=""
// Div class="logo"
// Ul class="menu"

// Styling Body
document.body.style.margin = "0px";
document.body.style.backgroundColor = "rgb(236, 236, 236)";
document.body.style.fontFamily = "Tahoma, Arial";

// Create Header
let header = document.createElement("header");

// Styling Header
header.style.display = "flex";
header.style.padding = "20px";
header.style.backgroundColor = "rgb(255, 255, 255)";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";

// Create Logo And Text
let logo = document.createElement("div"),
  elzero = document.createTextNode("Elzero");

// Create Logo Class And Attribute
logo.className = "logo";
logo.setAttribute("title", "Website Logo");

// Styling Logo
logo.style.fontWeight = "bold";
logo.style.color = "rgb(35, 169, 110)";
logo.style.fontSize = "26px";

// Create Ul
let ul = document.createElement("ul");

// Set Ul Classes
ul.className = "menu";

// Styling Ul
ul.style.padding = "0px";
ul.style.margin = "0px";
ul.style.display = "flex";
ul.style.listStyle = "none";

let liList = ["Home", "About", "Service", "Contact"];

for (let i = 0; i < 4; i++) {
  let li = document.createElement("li"),
    text = document.createTextNode(liList[i]);

  li.className = liList[0].toLowerCase();
  li.style.padding = "5px";
  li.style.fontSize = "15px";
  li.style.color = "rgb(136, 136, 136)";
  li.appendChild(text);
  ul.appendChild(li);
}

logo.appendChild(elzero);
header.appendChild(logo);
header.appendChild(ul);
document.body.appendChild(header);

// Main Div class="content" style=""
let mainDiv = document.createElement("div");

mainDiv.className = "content";

mainDiv.style.display = "flex";
mainDiv.style.padding = "20px";
mainDiv.style.flexWrap = "wrap";
mainDiv.style.justifyContent = "center";
mainDiv.style.gap = "20px";
mainDiv.style.minHeight = "calc(100vh - 142px)";
mainDiv.style.boxSizing = "border-box";

// 15 Div class="product" style=""
for (let i = 0; i < 15; i++) {
  let div = document.createElement("div"),
    span = document.createElement("span"),
    number = document.createTextNode((i + 1).toString()),
    product = document.createTextNode("Product");

  div.className = "product";

  div.style.padding = "20px";
  div.style.backgroundColor = "rgb(255, 255, 255)";
  div.style.border = "1px solid rgb(221, 221, 221)";
  div.style.width = "calc((100% - 40px) / 3)";
  div.style.boxSizing = "border-box";
  div.style.textAlign = "center";
  div.style.color = "rgb(136, 136, 136)";
  div.style.borderRadius = "6px";

  span.style.fontSize = "40px";
  span.style.color = "black";
  span.style.fontWeight = "normal";
  span.style.display = "block";
  span.style.marginBottom = "10px";
  span.style.marginTop = "10px";

  span.appendChild(number);
  div.appendChild(span);
  div.appendChild(product);
  mainDiv.appendChild(div);
}

document.body.appendChild(mainDiv);

// Footer
let footer = document.createElement("footer"),
  text = document.createTextNode("Copyright 2021");

footer.className = "footer";

footer.style.backgroundColor = "rgb(35, 169, 110)";
footer.style.fontSize = "26px";
footer.style.textAlign = "center";
footer.style.padding = "20px";
footer.style.color = "rgb(255, 255, 255)";

footer.appendChild(text);
document.body.appendChild(footer);
// Footer class="footer"
// "Copyright 2021"
