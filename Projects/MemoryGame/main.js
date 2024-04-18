// Name Of Player //
document.querySelector(".control-buttons span").onclick = function () {
  let yourName = prompt("What Is Your Name?");

  if (yourName === null || yourName === "") {
    // Set Name To Unknown
    document.querySelector(".name span").innerHTML = "Unknown";
  } else {
    // Set Name To User Name
    document.querySelector(".name span").innerHTML = yourName;
  }
  // Remove Splash Screen
  document.querySelector(".control-buttons").remove();
};

// Effect Duration
let duration = 1000;

// Select Blocks Container
let blocksContainer = document.querySelector(".memory-game-blocks");

// Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);

// Create Range Of Keys
let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

// Add Order Css Property To Game Blocks
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];

  // Add Click Event
  block.addEventListener("click", function () {
    // Trigger Flip Block Function
    flipBlock(block);
  });
});

// Flip Block Function
function flipBlock(selectedBlock) {
  // Add Class is-flipped
  selectedBlock.classList.add("is-flipped");

  // Collect All Flipped Card
  let allFlippedBlocks = blocks.filter((flippedBlock) =>
    flippedBlock.classList.contains("is-flipped")
  );

  // If There is Two Selected Blocks
  if (allFlippedBlocks.length === 2) {
    // Stop Clicking Function
    stopClicking();

    // Check Matched Blocks Function
    checkMatched(allFlippedBlocks[0], allFlippedBlocks[1]);
  }
}

// Stop Clicking Function
function stopClicking() {
  // Add Class No Clicking on Main Container
  blocksContainer.classList.add("no-clicking");

  setTimeout(() => {
    // Remove Class No Clicking After Duration
    blocksContainer.classList.remove("no-clicking");
  }, duration);
}

// Check Matched Blocks
function checkMatched(firstBlock, secondBlock) {
  let triesElement = document.querySelector(".tries span");

  if (firstBlock.dataset.language === secondBlock.dataset.language) {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");

    document.getElementById("success").play();
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration);

    document.getElementById("fail").play();
  }
}

// Shuffle Function
function shuffle(array) {
  // Settings Vars
  let current = array.length,
    temp,
    random;

  while (current > 0) {
    // Get Random Number
    random = Math.floor(Math.random() * current);

    // Decrease Length By One
    current--;

    // 1) Save Current Element in Stash
    temp = array[current];

    // 2) Current Element = Random Element
    array[current] = array[random];

    // 3) Random Element = Get Element From Stash
    array[random] = temp;
  }

  return array;
}
