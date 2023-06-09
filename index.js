let lists=document.getElementsByClassName("list");
let leftBox=document.getElementById("left-side");
let rightBox=document.getElementById("right-side");
let btnReset=document.getElementById("btn-reset");
let successMessage = document.getElementById("success-message");



for(list of lists){

  list.addEventListener("dragstart", function(e){
    let selected = e.target;
    console.log("dragstart");
    
    rightBox.addEventListener("dragover", function(e){
      e.preventDefault();
    console.log("dragover");
    selected.classList.add("drag-over");
    
      
    })
    rightBox.addEventListener("drop", function(e){
    console.log("drop");
      
      rightBox.appendChild(selected);
      selected.style.backgroundColor= "red";
      showSuccessMessage();
    })
  })
}
function showSuccessMessage() {
  successMessage.innerText="Item dropped successfully!"
  successMessage.style.display = "block";
  setTimeout(function () {
    successMessage.style.display = "none";
  }, 2000);
}
btnReset.addEventListener("click",()=>{
  successMessage.innerText="Item Reset!"
  successMessage.style.color="red"
  successMessage.style.display = "block";
  setTimeout(function () {
    successMessage.style.display = "none";
    location.reload();
  }, 2000);
  rightBox.innerHTML = "";

})