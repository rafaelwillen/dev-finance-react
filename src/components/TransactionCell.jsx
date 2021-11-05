const TransactionCell = ({ description, value, date }) => {
  return (
    <div className="transaction-cell">
      <p>{description}</p>
      <p>{value}</p>
      <p>{date}</p>
    </div>
  );
};

TransactionCell.defaultProps = {
  description: "lorem",
  value: "0.00 Kzs",
  date: "xx/xx/xx",
};

export default TransactionCell;
