"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

// Function to return remainder of division
function returnTheRemainder(num1, num2) {
    return num1 % num2;
  }
  
  // Function to check if number is even
  function checkIfEven(number) {
    return number % 2 === 0;
  }
  
  
  function getTheFourthElement(arr) {
    return arr[3];
  }

  // Render function to display results
  
function render() {
    remainderElement.innerHTML = returnTheRemainder(5, 4);
    checkIfEvenElement.innerHTML = checkIfEven(47);
    lostNumbersElement.innerHTML = getTheFourthElement(lostNumbers);
}

  // Add click event listener
  submissionBtn.addEventListener('click', render);