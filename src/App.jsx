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
    // TODO: Add local storage
    setTransactions([...transactions, transaction]);
    setShowModal(false);
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
      />
    </>
  );
}

export default App;
