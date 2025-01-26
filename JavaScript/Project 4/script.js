document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("expense-form");
  const expenseName = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmount = document.getElementById("total-amount");
  const clearExpenses = document.getElementById("clear-expenses");
  let total = 0;

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  if (expenses.length > 0) {
    renderExpenses();
  } else {
    toggleClearButton();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = expenseName.value;
    const amount = expenseAmount.value;

    if (name.trim() === "" || amount.trim() === "" || amount <= 0) {
      alert("Please enter valid values");
    } else {
      const expense = { Name: name, Amount: amount };

      expenses.push(expense);
      console.log(expenses);

      localStorage.setItem("expenses", JSON.stringify(expenses));
      renderExpenses();
    }
  });

  function renderExpenses() {
    expenseList.innerHTML = "";
    expenseName.value = "";
    expenseAmount.value = "";
    total = 0;

    expenses.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = `${element.Name} - $${element.Amount}`;
      const dltBtn = document.createElement("button");
      dltBtn.textContent = "Delete";
      expenseList.appendChild(li);
      li.appendChild(dltBtn);
    });
    calculateTotal();
  }
  function renderTotal() {
    totalAmount.textContent = `${total}`;
  }
  function calculateTotal() {
    total = expenses.reduce((acc, curr) => {
      return acc + parseInt(curr.Amount);
    }, 0);
    renderTotal();
  }

  function toggleClearButton() {
    if (expenses.length === 0) {
      clearExpenses.classList.add("hidden");
    } else {
      clearExpenses.classList.remove("hidden");
    }
  }

  clearExpenses.addEventListener("click", function () {
    expenses = [];
    localStorage.clear();
    totalAmount.textContent = "0";
    renderExpenses();
  });

  function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
  }
  expenseList.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const index = Array.from(event.target.parentNode.parentNode.children).indexOf(
        event.target.parentNode
      );
      deleteExpense(index);
    }
  });
});
