import { useState } from "react"
import { NextBackButtons } from "./NextBackButtons"

export const Question2 = ({onNext, onBack}) => {
  const [second, setSecond] = useState("")
  console.log(second)

  const handleYesClick = () => {
    setSecond("yes")
  }

  const handleNoClick = () => {
    setSecond("no")
  }

  return (
    <div className="container-question">
      <label className="question" htmlFor="question2">
        Have you ever accidentally hyperfocused on something for hours, forgetting to eat, sleep, or even blink?
      </label>
      <div>
          <button className={second === 'yes' ? 'selected' : ''} onClick={handleYesClick}>Yes, so many times!</button>
          <button className={second === 'no' ? 'selected' : ''} onClick={handleNoClick}>Nope, I've never been so lost.</button>
      </div>
      <NextBackButtons onNext={onNext} onBack={onBack}/> 
    </div>     
  )
}
