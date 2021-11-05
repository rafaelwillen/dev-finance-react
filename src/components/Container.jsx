import TextButton from "./interactive/TextButton";
import TransactionsContainer from "./TransactionsContainer";

const Container = ({ onAddTransaction }) => {
  return (
    <section className="container">
      <TextButton content="+ Adicionar Transação" onClick={onAddTransaction} />
      <TransactionsContainer />
    </section>
  );
};

export default Container;
