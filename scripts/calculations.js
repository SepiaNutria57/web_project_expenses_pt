let budgetValue = 250;
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

for (expense in expenseEntries) {
  totalExpensesValue = +expenseEntries[expense][1];
}

function calculateAverageExpense() {
  let totalAverage = totalExpensesValue / expenseEntries.length;
  return totalAverage;
}

function calculateBalance() {
  let totalBalance = budgetValue - totalExpensesValue;
  return totalBalance;
}

function updateBalanceColor() {
  if (totalBalance <= 0) {
    balanceColor = "red";
  } else if (totalBalance < budgetValue * 0.25) {
    balanceColor = "orange";
  }
}

function calculateCategoryExpenses() {
  //um for/while que pega o nome de uma categoria, checa todas as instâncias dela com um if e soma a despesa à um valor específico
  //algo como: if expenseEntries[i][0] === category, total =+ expenseEntries[i][1]

  let totalCategoryExpenses = 0;

  for (const expense of expenseEntries) { //para cada despesa em expenseEntries
    while (i < expenseEntries.length) { // e enquanto o índice for menor que o tamanho da lista
      if (expenseEntries[i][0] === expense) { // se o nome da categoria da despesa for igual ao nome da categoria que estamos verificando
         //o certo seria criar uma nova array aninhada...
         //usar aquele método de array filter() para filtrar as despesas por categoria e depois somar os valores
         //ou a
      }
      i++;
    }
  }
}
