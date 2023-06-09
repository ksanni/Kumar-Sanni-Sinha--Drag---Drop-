let lists = document.getElementsByClassName("list");
let leftBox = document.getElementById("left-side");
let rightBox = document.getElementById("right-side");
let btnReset = document.getElementById("btn-reset");
let successMessage = document.getElementById("success-message");

// Add dragstart event listener to each list item
for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    console.log("dragstart");

    // When dragging over the rightBox
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
      console.log("dragover");
      selected.classList.add("drag-over");
    });

    // When dropping on the rightBox
    rightBox.addEventListener("drop", function (e) {
      console.log("drop");

      // Append the selected list item to the rightBox
      rightBox.appendChild(selected);

      // Change the background color of the selected list item
      selected.style.backgroundColor = "#c22323";

      // Display the success message
      showSuccessMessage();
    });
  });
}

// Function to show the success message
function showSuccessMessage() {
  successMessage.innerText = "Item dropped successfully!";
  successMessage.style.display = "block";

  // Hide the success message after a delay
  setTimeout(function () {
    successMessage.style.display = "none";
  }, 2000);
}

// Reset button click event
btnReset.addEventListener("click", () => {
  // Set the success message for item reset
  successMessage.innerText = "Item Reset!";
  successMessage.style.color = "red";
  successMessage.style.display = "block";

  // Hide the success message and reload the page after a delay
  setTimeout(function () {
    successMessage.style.display = "none";
    location.reload();
  }, 1000);

  // Clear the rightBox by emptying its HTML content
  rightBox.innerHTML = "";
});
