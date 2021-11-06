import Card from "./Card";
import expenseIcon from "../assets/expense.svg";
import incomeIcon from "../assets/income.svg";
import totalIcon from "../assets/total.svg";
import {
  calculateBalance,
  calculateExpense,
  calculateIncome,
} from "../utilities/transactions";
import { formatCurrency } from "../utilities/formater";

const Balance = ({ transactions }) => {
  const income = calculateIncome(transactions);
  const expense = calculateExpense(transactions);
  const balance = calculateBalance(income, expense);

  return (
    <section className="balance">
      <Card title="Entradas" icon={incomeIcon} value={formatCurrency(income)} />
      <Card title="Saídas" icon={expenseIcon} value={formatCurrency(expense)} />
      <Card
        title="Balanço"
        isPrimaryColor="true"
        icon={totalIcon}
        value={formatCurrency(balance)}
      />
    </section>
  );
};

export default Balance;
