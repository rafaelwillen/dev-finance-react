import TextButton from "./interactive/TextButton";
import TransactionsContainer from "./TransactionsContainer";

const Container = ({ onAddTransaction, transactions }) => {
  return (
    <section className="container">
      <TextButton content="+ Adicionar Transação" onClick={onAddTransaction} />
      <TransactionsContainer transactions={transactions} />
    </section>
  );
};

export default Container;
