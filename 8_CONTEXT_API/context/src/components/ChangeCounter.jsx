// 3 - alterando contexto
import { useContext } from "react"

import { CounterContext } from "../context/CounterContext"

// 4 - refatornado com hook
import { useCounterContext } from "../hooks/useCounterContext"

const ChangeCounter = () => {
    const {counter, setCounter} = useCounterContext()
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  )
}

export default ChangeCounter
