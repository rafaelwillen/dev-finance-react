const Modal = ({ show }) => {
  return (
    <div className="modal" style={{ display: show ? "block" : "none" }}>
      <form className="form">
        <div className="input-group">
          <label htmlFor="description">Descrição</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label htmlFor="value">Valor</label>
          <input type="text" />
          <small>Coloque o sinal de menos (-) para ser um gasto</small>
        </div>
        <div className="input-group">
          <label htmlFor="date">Data</label>
          <input type="date" />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn primary">
            Criar Transação
          </button>
          <button className="btn cancel">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
