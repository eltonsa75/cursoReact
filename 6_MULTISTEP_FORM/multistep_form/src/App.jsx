// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm from "./Components/UserForm";
import ReviewForm from "./Components/ReviewForm";
import Thanks from "./Components/Thanks";

// Hooks
import { userForm } from "./hooks/useForm";



import "./App.css"; 


function App() {

  const formComponents = [<UserForm/>, <ReviewForm/>, <Thanks />];

  const {currentStep, currentComponent} = userForm(formComponents)
  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
        <div className="form-container">
          <p>etapas</p>
          <form>
            <div className="input-container">{currentComponent}</div>
            <div className="actions">
              <button type="button">
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
