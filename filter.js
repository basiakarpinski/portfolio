// filter.js

// Function to filter sections based on input
console.log("Javascript called!")
function filterSections() {
    console.log("button pressed!")
    var filterInput = document.getElementById("filterInput").value.toLowerCase();
    var sections = document.querySelectorAll("details");
    
    sections.forEach(function(section) {
      var summaryText = section.querySelector("summary").textContent.toLowerCase();
      if (summaryText.includes(filterInput)) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }

// Event listener for filter input
document.getElementById("filterInput").addEventListener("input", filterSections);  