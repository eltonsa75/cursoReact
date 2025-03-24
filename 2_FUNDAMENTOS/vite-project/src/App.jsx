import './App.css'

// 2- Importando Componente
import FirstComponent from './components/FirstComponent'
// 4 - template expression
import Templateexpression from './components/TemplateExpression'
// 5 - hierarquia de components
import MyComponent from './components/MyComponent'
// 6 - eventos
import Events from './components/Events'

function App() {
// 3 - comentários 
  return (
    <div className='App'>
      {/* 3 - comentários */}
      <h1>Fundamento de React!</h1>
      <FirstComponent/>
      <Templateexpression/>
      <MyComponent/>
      <Events/>
    </div>
  )
}

export default App
