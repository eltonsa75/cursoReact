import "./ImcCalc.css";

const ImcCalc = () => {
  return (
    <div id="calc-container">
      <h1>Calculadora de IMC</h1>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
            />
          </div>      
        </div>
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 70,5"
            />
          </div>      
        </div>
        <div className="action-control">
            <button>Calculcar</button>
            <button>Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
