// filter.js

// Function to filter sections based on input

function filterSections() {
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