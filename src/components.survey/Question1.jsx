import { useState } from "react"

export const Question1 = () => {
    const [first, setFirst] = useState("")

    const onRadioChange = (e) => {
        setFirst(e.target.value)
    }


  return (
    <div className="container-question">
      <label className="question" htmlFor="">
        When you finally sit down to do you your to-do list, how often do you end up rearranging your desk instead?</label>
        
        <div className="radio-option">
          <input type="radio"
          name="everytime" 
          id="everytime"
          value={"Every Time! A clean desk is a productive desk, right?"}
          checked={first === "Every Time! A clean desk is a productive desk, right?"}
          onChange={onRadioChange}
          />
          <label htmlFor="everytime">Every Time! A clean desk is a productive desk, right?
          </label>
        </div>
        <div className="radio-option">
          <input type="radio"
          name="occasionally"
          id="occasionally"
          value={"Occasionally, if something shiny distracts me"}
          checked={first === "Occasionally, if something shiny distracts me"}
          onChange={onRadioChange}
          />
          <label htmlFor="occasionally">Occasionally, if something shiny distracts me.
          </label>
        </div>
        <div className="radio-option">
          <input type="radio"
          name="rarely"
          id="rarely"
          value={"Rarely, I'm all about efficiency."}
          checked={first === "Rarely, I'm all about efficiency."}
          onChange={onRadioChange}
          />
          <label htmlFor="rarely">Rarely, I'm all about efficiency.
          </label>
        </div>
        <div className="radio-option">
          <input type="radio"
          name="no"
          id="no"
          value={"Wait, was I supposed to have a to-do list?"}
          checked={first === "Wait, was I supposed to have a to-do list?"}
          onChange={onRadioChange}
          />
          <label htmlFor="no"> Wait, was I supposed to have a to-do list?
          </label>
        </div>
    </div>
  )
}

