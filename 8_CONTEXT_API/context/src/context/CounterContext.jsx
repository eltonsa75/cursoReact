// 1 - criar context
import { Children, createContext } from "react";

export const CounterContext = createContext()

// 2 Criar provide

export const CounterContextProvider = ({ Children }) => {
    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {Children}
        </CounterContext.Provider>
    )
}