import { useState } from "react";

import Balance from "./components/Balance";
import Header from "./components/Header";
import Container from "./components/Container";
import Modal from "./components/Modal";
import { transactionStore } from "./utilities/transactionStore";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [transactions, setTransactions] = useState(transactionStore.getAll());

  const onAddTransaction = () => {
    setShowModal(true);
  };

  const onCancelTransaction = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const addTransaction = (transaction) => {
    const newTransactions = [...transactions, transaction];
    transactionStore.set(newTransactions);
    setTransactions(newTransactions);
    setShowModal(false);
  };

  const removeTransaction = (id) => {
    const newTransactions = transactions.filter((transaction, index) => {
      if (id !== index) return transaction;
    });
    transactionStore.set(newTransactions);
    setTransactions(newTransactions);
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
