import { useState } from "react";

const Modal = ({ show, onCancelTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!description || !date) {
      alert("Por favor preencha todos os campos");
      return;
    }
  };

  return (
    <div className="modal" style={{ display: show ? "block" : "none" }}>
      <form className="form" onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="description">Descrição</label>
          <input
            placeholder="Comida, contas de casa..."
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="value">Valor</label>
          <input
            type="text"
            placeholder="00.00 Kzs"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <small>Coloque o sinal de menos (-) para ser um gasto</small>
        </div>
        <div className="input-group">
          <label htmlFor="date">Data</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn primary">
            Criar Transação
          </button>
          <button className="btn cancel" onClick={onCancelTransaction}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
