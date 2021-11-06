import TextButton from "./interactive/TextButton";
import TransactionsContainer from "./TransactionsContainer";

const Container = ({ onAddTransaction, transactions, removeTransaction }) => {
  return (
    <section className="container">
      <TextButton content="+ Adicionar Transação" onClick={onAddTransaction} />
      <TransactionsContainer transactions={transactions} removeTransaction={removeTransaction} />
    </section>
  );
};

export default Container;
