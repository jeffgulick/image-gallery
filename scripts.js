// Get the elements with class="column"
const elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
const one = () => {
    for (i = 0; i < elements.length; i++) {
    // elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
const two = () => {
  for (i = 0; i < elements.length; i++) {
    // elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
const four =()=> {
  for (i = 0; i < elements.length; i++) {
    // elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
const header = document.getElementById("myHeader");
const btns = header.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}