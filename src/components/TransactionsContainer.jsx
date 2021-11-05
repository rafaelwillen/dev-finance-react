import TransactionCell from "./TransactionCell";

const TransactionsContainer = () => {
  return (
    <div className="transactions-container">
      <div className="headline">
        <h3>Descrição</h3>
        <h3>Valor</h3>
        <h3>Data</h3>
      </div>
      <TransactionCell date="05/11/2021" description="Comida" value={-1000} />
      <TransactionCell date="05/11/2021" description="Comida" value={-1000} />
      <TransactionCell date="05/11/2021" description="Comida" value={-1000} />
    </div>
  );
};

export default TransactionsContainer;
