const TransactionCell = ({ description, value, date, onDoubleClick }) => {
  return (
    <div className="transaction-cell" onDoubleClick={onDoubleClick}>
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
  onDoubleClick: () => console.log("Double click"),
};

export default TransactionCell;
