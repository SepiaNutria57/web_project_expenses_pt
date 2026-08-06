let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (const expense of expenseEntries) {
  totalExpensesValue += expense[1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }

  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  let totalBalance = budgetValue - totalExpensesValue;
  return totalBalance;
}

function updateBalanceColor() {
  const totalBalance = calculateBalance();

  if (totalBalance < 0) {
    balanceColor = "red";
  } else if (totalBalance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (const expense of expenseEntries) {
    if (expense[0] === category) {
      categoryTotal += expense[1];
    }
  }

  return categoryTotal;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  const categoriesTotals = [];

  for (const category of categories) {
    categoriesTotals.push([category, calculateCategoryExpenses(category)]);
  }

  let largestCategory = categoriesTotals[0][0];
  let largestValue = categoriesTotals[0][1];

  for (const category of categoriesTotals) {
    if (category[1] > largestValue) {
      largestValue = category[1];
      largestCategory = category[0];
    }
  }

  return largestCategory;
}

function addExpenseEntry(entry) {
  expenseEntries.push(entry);
  totalExpensesValue += entry[1];
  updateBalanceColor();
}
