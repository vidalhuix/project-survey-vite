import { useState } from "react"
import { Header } from "./Header";
import { Intro } from   "./Intro"
import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Question3 } from "./Question3";
import { Summary } from "./Summary"
import "./Survey.css"

export const Survey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1)

  const goNext = () => {
    setCurrentQuestion(currentQuestion +1)
  }

  const goBack = () => {
    setCurrentQuestion(currentQuestion -1)
  }

  const renderCurrentQuestion = () => {
    switch (currentQuestion) {
      case -1:
        return <Header onStartSurvey={goNext} />
      case 0:
        return <Intro onNext={goNext} onBack={goBack}/>              
      case 1:
        return <Question1 onNext={goNext} onBack={goBack}/>
      case 2:
        return <Question2 onNext={goNext} onBack={goBack}/>
      case 3:
        return <Question3 onNext={goNext} onBack={goBack}/>
      case 4:
        return <Summary />
      default:
        return null
    }
  }
  
  return (
    <>
      <div>
        {renderCurrentQuestion()}
      </div>
    </>
  )
}

 