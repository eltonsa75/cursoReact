// 3 - alterando o valor do contexto
// import { useContext } from "react"
import {CounterContext} from '../context/CounterContext'
import ChangeCounter from "../components/ChangeCounter"

// 4 - refatornado com hooks
import { useCounterContext } from '../hooks/useCounterContext'


const Home = () => {
    //const {counter} = useContext(CounterContext)

    const {counter} = useCounterContext();


  return (
    <div>
      <h1>Home</h1>
      <p>Valor do Counter: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Home
