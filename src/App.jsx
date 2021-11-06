import { useState } from "react";

import Balance from "./components/Balance";
import Header from "./components/Header";
import Container from "./components/Container";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const onAddTransaction = () => {
    setShowModal(true);
  };

  const onCancelTransaction = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const addTransaction = (transaction) => {
    // TODO: Add to local storage
    setTransactions([...transactions, transaction]);
    setShowModal(false);
  };

  const removeTransaction = (id) => {
    // TODO: Remove from local storage
    setTransactions(
      transactions.filter((transaction, index) => {
        if (id !== index) return transaction;
      })
    );
  };

  return (
    <>
      <div className={showModal ? "modal-overlay show" : "modal-overlay"}></div>
      <Modal
        show={showModal}
        onCancelTransaction={onCancelTransaction}
        addTransaction={addTransaction}
      />
      <Header />
      <Balance transactions={transactions} />
      <Container
        onAddTransaction={onAddTransaction}
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
    </>
  );
}

export default App;
