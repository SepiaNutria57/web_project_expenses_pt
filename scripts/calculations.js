let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 20],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (expense in expenseEntries){
  totalExpensesValue =+ expenseEntries[expense][1];
}

function calculateAverageExpense(){
  let totalAverage = totalExpensesValue / expenseEntries.length;
}

function calculateBalance(){
  
}
