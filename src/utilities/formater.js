function formatAmount(amount) {
  return amount * 100;
}

function formatDate(date) {
  const newDate = date.split("-");
  return newDate.reverse().join("/");
}

export { formatAmount, formatDate };
