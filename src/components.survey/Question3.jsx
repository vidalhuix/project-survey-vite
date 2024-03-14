import { useState } from "react"
import { NextBackButtons } from "./NextBackButtons";

export const Question3 = ({onNext, onBack}) => {
  //Initialize  a state for the dropdown list of the question 3
  const [third, setThird] = useState("null")

  //update the state of the question based on the user´s selection option
  const handleChange = (e) => {
    setThird(e.target.value)
  };

  const handleFocus = (e) => {
    e.target.removeAttribute('placeholder')
  };

  return (
    <div className="container-question">
      <label className="question" htmlFor="question3">
        How many browser tabs do you typically have open while trying to focus on one task?
      </label>
      <select
        className="custome-select"
        id="question3"
        name="question3"
        value={third}
        onChange={handleChange}
        onFocus={handleFocus}
        >
        <option value=""> Select  an option 👇 </option> 
        <option value="answer1">Just one, I'm all about single-tasking</option>
        <option value="answer2">A few, for necessary references.</option>
        <option value="answer3">Too many to count, but they're all totally relevant... I think.</option>
        <option value="answer4">My computer might crash if I close any of them.</option>
      </select>
      <NextBackButtons onNext={onNext} onBack={onBack}/>
    </div>    
  )
}


//modified the initial option value to include the "disabled" attribute to prevent it from being selected.