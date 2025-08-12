import React from "react";

import HookUseState from "../components/HookUseState"
import HookUsereduce from "../components/HookUseReducer"
import HookUseEfeect from "../components/HookUseEfeect";

// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";


const  Home = () => {
   const {contextValue} = useContext(SomeContext)
    return (
        <div>
            <HookUseState />  
            <HookUsereduce /> 
            <HookUseEfeect />
            <h2>useContext</h2>
            <p>Valor do context: {contextValue}</p>
            <hr />
            <HookUseRef />
        </div>
    )
}

export default Home;