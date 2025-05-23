// example -1
document.getElementById("changeTextButton").addEventListener("click", function () {
    document.getElementById("myParahraph").innerHTML = "Text has been changed";
});

// example -2
document.getElementById("highlightFirstCity").addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});

// example -3
document.getElementById("changeOrder").addEventListener("click", function () {
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.color = "red";
    coffeeType.style.fontWeight = "bold";
    coffeeType.style.backgroundColor = "yellow";
});


// example -4
document.getElementById('addNewItem').addEventListener('click', function () {
    let newItem = document.createElement('li');
    newItem.textContent = 'NoteBook';
    document.getElementById("shoppingList").appendChild(newItem);
});

// example -5
document.getElementById("removeLastTask").addEventListener('click', function () {
    let taskList = document.getElementById("taskList");
    taskList.removeChild(taskList.lastElementChild);
});