// 3 - alterando o valor do contexto

//import { useContext, useState } from "react"
import { CounterContext } from "../context/CounterContext"

// 4 - refatornado com hook
import { useCounterContext } from "../hooks/useCounterContext"

const Contact = () => {
    const { counter } = useCounterContext()
  return (
    <div>
      <h1>Página de contato</h1>
      <p>Valor do counter: {counter} </p>
    </div>
  )
}

export default Contact
