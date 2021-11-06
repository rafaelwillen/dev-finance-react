import { formatCurrency } from "../utilities/formater";

const TransactionCell = ({ description, value, date, onDoubleClick }) => {
  return (
    <div className="transaction-cell" onDoubleClick={onDoubleClick}>
      <p>{description}</p>
      <p className={value > 0 ? "positive" : "negative"}>
        {formatCurrency(value)}
      </p>
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
