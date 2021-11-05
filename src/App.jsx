import Balance from "./components/Balance";
import Header from "./components/Header";
import Container from "./components/Container";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <div className="modal-overlay show"></div>
      <Modal show={true} />
      <Header />
      <Balance />
      <Container />
    </>
  );
}

export default App;
