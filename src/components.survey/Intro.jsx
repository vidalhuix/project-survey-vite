import { useState } from "react";

export const Intro = () => {
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

return (
    <div className="adhd-form" required>
       <label htmlFor="">Enter your name:
        <input
            type="text"
            name="username"
            placeholder="enter your name"
            value={inputs.username || ""}
            onChange={handleChange}
            />
       </label>
       <label htmlFor="">Enter your age:
        <input
            type="number"
            name="age"
            placeholder="enter your age"
            value={inputs.age || ""}
            onChange={handleChange}
        />
        </label>
    </div>
    )
}