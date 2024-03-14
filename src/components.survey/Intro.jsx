import { useState } from "react";
import { NextBackButtons } from "./NextBackButtons";

export const Intro = ({ onNext, onBack }) => {
    const [inputs, setInputs] = useState({username: '', age: ''});
    
    const handleChange = (event) => {
      setInputs ({
        ...inputs,
        [event.target.name]: event.target.value
      }) 
    }

    const handleFocus = (event) =>{
        if (event.target.name === 'age' || event.target.name === 'username') {
            event.target.removeAttribute('placeholder')
        }  
    }

return (
    <div className="container-question intro">
        <div>
            <label htmlFor=""></label>
            <input
                type="text"
                name="username"
                placeholder="Enter your name"
                id="username"
                value={inputs.username}
                onChange={handleChange}
                onFocus={handleFocus}
                required
            />

            <label htmlFor=""></label>
            <input
                type="number"
                name="age"
                id="age"
                placeholder="Enter your age"
                value={inputs.age}
                onChange={handleChange}
                onFocus={handleFocus}
                required
            />
        </div>
        <NextBackButtons onNext={onNext} onBack={onBack}/>
    </div>

    )
}