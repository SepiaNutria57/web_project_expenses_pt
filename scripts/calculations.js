let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

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
  return totalAverage;
}

function calculateBalance(){
  let totalBalance = budgetValue - totalExpensesValue;
  return totalBalance;
}

function updateBalanceColor(){
  if (totalBalance <= 0){
    balanceColor = "red";
  } else if (totalBalance < budgetValue*0.25){
    balanceColor = "orange";
  }
}

function calculateCategoryExpenses(){
  //um for/while que pega o nome de uma categoria, checa todas as instâncias dela com um if e soma a despesa à um valor específico
  //algo como: if expenseEntries[i] === category, total =+ expenseEntries[i][1]
}
