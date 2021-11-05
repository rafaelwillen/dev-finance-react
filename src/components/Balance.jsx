import React from "react";
import Card from "./Card";
import expenseIcon from "../assets/expense.svg";
import incomeIcon from "../assets/income.svg";
import totalIcon from "../assets/total.svg";

const Balance = () => {
  return (
    <section className="balance">
      <Card title="Entradas" icon={incomeIcon} />
      <Card title="Saídas" icon={expenseIcon} />
      <Card title="Balanço" isPrimaryColor="true" icon={totalIcon} />
    </section>
  );
};

export default Balance;
