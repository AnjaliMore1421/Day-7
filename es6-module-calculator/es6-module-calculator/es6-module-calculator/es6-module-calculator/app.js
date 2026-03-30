// Import functions from utils.js
import { add, subtract } from "./utils.js";

// Run code after page loads
window.onload = function () {

  // Get HTML elements
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const result = document.getElementById("result");
  const historyList = document.getElementById("history");

  const addBtn = document.getElementById("addBtn");
  const subBtn = document.getElementById("subBtn");

  // Get stored history from localStorage
  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

  // Display history on UI
  function renderHistory() {
    historyList.innerHTML = ""; // Clear old list

    history.forEach(item => {
      const li = document.createElement("li"); // Create list item
      li.textContent = item; // Add text
      historyList.appendChild(li); // Append to list
    });
  }

  // Save result in localStorage
  function saveResult(operation, value1, value2, output) {
    const entry = `${value1} ${operation} ${value2} = ${output}`;
    history.push(entry); // Add to array

    // Save updated array
    localStorage.setItem("calcHistory", JSON.stringify(history));

    renderHistory(); // Refresh UI
  }

  // Add button click event
  addBtn.addEventListener("click", function () {
    const output = add(Number(num1.value), Number(num2.value));

    result.innerText = "Result: " + output; // Show result

    saveResult("+", num1.value, num2.value, output);
  });

  // Subtract button click event
  subBtn.addEventListener("click", function () {
    const output = subtract(Number(num1.value), Number(num2.value));

    result.innerText = "Result: " + output; // Show result

    saveResult("-", num1.value, num2.value, output);
  });

  // Show previous history on page load
  renderHistory();
};
