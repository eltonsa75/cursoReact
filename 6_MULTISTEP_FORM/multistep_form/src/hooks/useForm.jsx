import { useState } from "react";

export function userForm(steps) {    
    const [currentStep, setCurrentstep] = useState(0);

    return {
    currentStep,
    currentComponent: steps[currentStep],
        
    }
}