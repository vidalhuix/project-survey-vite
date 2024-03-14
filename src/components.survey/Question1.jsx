import { useState } from "react"
import { NextBackButtons } from "./NextBackButtons"

export const Question1 = ({onNext, onBack}) => {
  const [first, setFirst] = useState("")

  const onRadioChange = (e) => {
    setFirst(e.target.value)
  }


  return (
    <div className="container-question">
      <label className="question" htmlFor="question1">
        When you finally sit down to do you your to-do list, how often do you end up rearranging your desk instead?</label>
        <ul>
          <li className="radio-option">
            <label htmlFor="everytime">Every Time! A clean desk is a productive desk, right?
            </label>
            <input type="radio"
            name="everytime" 
            id="everytime"
            value={"Every Time! A clean desk is a productive desk, right?"}
            checked={first === "Every Time! A clean desk is a productive desk, right?"}
            onChange={onRadioChange}
            />
          </li>
          <li className="radio-option">
            <label htmlFor="occasionally">Occasionally, if something shiny distracts me.
            </label>
            <input type="radio"
            name="occasionally"
            id="occasionally"
            value={"Occasionally, if something shiny distracts me"}
            checked={first === "Occasionally, if something shiny distracts me"}
            onChange={onRadioChange}
            />
          </li>
          <li className="radio-option">
            <label htmlFor="rarely">Rarely, I'm all about efficiency.
            </label>
            <input type="radio"
            name="rarely"
            id="rarely"
            value={"Rarely, I'm all about efficiency."}
            checked={first === "Rarely, I'm all about efficiency."}
            onChange={onRadioChange}
            />
          </li>
          <li className="radio-option">
            <label htmlFor="no"> Wait, was I supposed to have a to-do list?
            </label>
            <input type="radio"
            name="no"
            id="no"
            value={"Wait, was I supposed to have a to-do list?"}
            checked={first === "Wait, was I supposed to have a to-do list?"}
            onChange={onRadioChange}
            />
          </li>
        </ul>
        <NextBackButtons onNext={onNext} onBack={onBack}/>
    </div>
  )
}

