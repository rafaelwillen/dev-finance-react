import { useState } from "react";

import Balance from "./components/Balance";
import Header from "./components/Header";
import Container from "./components/Container";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const onAddTransaction = () => {
    setShowModal(true);
  };

  const onCancelTransaction = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <>
      <div className={showModal ? "modal-overlay show" : "modal-overlay"}></div>
      <Modal show={showModal} onCancelTransaction={onCancelTransaction} />
      <Header />
      <Balance />
      <Container onAddTransaction={onAddTransaction} />
    </>
  );
}

export default App;
