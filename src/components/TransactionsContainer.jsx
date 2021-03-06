import TransactionCell from "./TransactionCell";

const TransactionsContainer = ({ transactions, removeTransaction }) => {
  return (
    <div className="transactions-container">
      <div className="headline">
        <h3>Descrição</h3>
        <h3>Valor</h3>
        <h3>Data</h3>
      </div>
      {transactions.map(({ description, amount, date }, index) => (
        <TransactionCell
          key={index}
          date={date}
          description={description}
          value={amount}
          onDoubleClick={(e) => {
            removeTransaction(index);
          }}
        />
      ))}
    </div>
  );
};

TransactionsContainer.defaultProps = {
  transactions: [],
};

export default TransactionsContainer;
