import TextButton from "./interactive/TextButton";
import TransactionsContainer from "./TransactionsContainer";

const Container = () => {
  return (
    <section className="container">
      <TextButton content="+ Adicionar Transação" />
      <TransactionsContainer />
    </section>
  );
};

export default Container;
