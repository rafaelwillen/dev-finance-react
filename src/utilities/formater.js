function formatAmount(amount) {
  return amount * 100;
}

function formatDate(date) {
  const newDate = date.split("-");
  return newDate.reverse().join("/");
}

function formatCurrency(amount) {
  const sign = Number(amount) < 0 ? "-" : "";
  let value = String(amount).replace(/\D/g, "");
  value = Number(value) / 100;
  value = value.toLocaleString("pt-ao", {
    style: "currency",
    currency: "AOA",
  });
  return sign + value;
}
export { formatAmount, formatDate, formatCurrency };
