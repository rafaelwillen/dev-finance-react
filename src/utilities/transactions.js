function calculateIncome(transactions) {
  return transactions.reduce((prev, curr) => {
    if (curr.amount > 0) prev += curr.amount;
    return prev;
  }, 0);
}

function calculateExpense(transactions) {
  return transactions.reduce((prev, curr) => {
    if (curr.amount < 0) prev += curr.amount;
    return prev;
  }, 0);
}

function calculateBalance(income, expense) {
  return income + expense;
}

export { calculateBalance, calculateExpense, calculateIncome };
