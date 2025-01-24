// example 6

document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("Button clicked!");
  });


//   Example 7

document.getElementById("teaList").addEventListener("click", function (event) {
    if (event.target && event.target.matches(".teaItem")) {
        alert("You clicked:" + event.target.innerText);
    }
});

// Example 8
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    alert("Form submitted!");
    event.preventDefault();
    let feedBack = document.getElementById("feedbackInput");
    console.log(feedBack.value);
    document.getElementById("feedbackDisplay").innerText = feedBack.value;
});

// Example 9
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").innerText = "DOM loaded!";
});

// Example 10
document.getElementById("toggleHighlight").addEventListener("click", function () {
    let element = document.getElementById("descriptionText");
    element.classList.toggle("highlight");
});
