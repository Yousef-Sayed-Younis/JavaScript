// Get Slider Items | Array.from
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Slides
let slidesCount = sliderImages.length;

// Set First Slide
let currentSlide = 1;

// Slide Number Element
let slideNumber = document.getElementById("slider-number");

// Previous And Next Buttons
let prevButton = document.getElementById("prev");
let nexButton = document.getElementById("next");

// Handle Click on Previous And Next Buttons
nexButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create the Main UL Element
let paginationElement = document.createElement("ul");

// Set ID On Created UL Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On Slides Count
for (let i = 1; i <= slidesCount; i++) {
  // Create The LI
  let paginationItem = document.createElement("li");

  // Set Custom Attirbute
  paginationItem.setAttribute("data-index", i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items To The Main UL List
  paginationElement.appendChild(paginationItem);
}

// Add The Created UL Element To The Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
let paginationCreatedUl = document.getElementById("pagination-ul");

// Get Pagination Items | Array.from
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop Through All Bullets Items
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {
  if (nexButton.classList.contains("disabled")) {
    // Do Nothing
    return;
  } else {
    currentSlide++;
    theChecker();
  }
}

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    // Do Nothing
    return;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Create The Checker Function
function theChecker() {
  // Set The Slide Number
  slideNumber.textContent = "Slide #" + currentSlide + " of " + slidesCount;

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add("active");

  // Set Active Class On Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check If Current Slide Is The First
  if (currentSlide === 1) {
    // Add Disables Class On Previous Button
    prevButton.classList.add("disabled");
  } else {
    // Remove Disables Class On Previous Button
    prevButton.classList.remove("disabled");
  }

  // Check If Current Slide Is The Last
  if (currentSlide === slidesCount) {
    // Add Disables Class On Previous Button
    nexButton.classList.add("disabled");
  } else {
    // Remove Disables Class On Previous Button
    nexButton.classList.remove("disabled");
  }
}

// Remove All Active Classes From Images And Pagination Bullets
function removeAllActive() {
  // Loop Through Images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  // Loop Through Pagination Bullets
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
