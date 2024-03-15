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
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    answer1: "",
    answer2: "",
    answer3: "",
  })

  const goNext = () => {
    setCurrentQuestion(currentQuestion +1)
  }

  const goBack = () => {
    setCurrentQuestion(currentQuestion -1)
  }


  const setAnswer = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }))
  };

  //setAnswer function is defined within the Survey component and passed down to the Question1 component.

  const renderCurrentQuestion = () => {
    switch (currentQuestion) {
      case -1:
        return <Header onStartSurvey={goNext} />
      case 0:
        return <Intro
         onNext={goNext}
         onBack={goBack}
         formData={formData}
         setAnswer={setAnswer}
        
         />              
      case 1:
        return <Question1 
        onNext={goNext}
        onBack={goBack}
        formData={formData}
        setAnswer={(answer) => setAnswer("answer1", answer)}
        />
      case 2:
        return <Question2 
        onNext={goNext}
        onBack={goBack}
        formData={formData}
        setAnswer={(answer) => setAnswer("answer2", answer)}
        />
      case 3:
        return <Question3
        onNext={goNext}
        onBack={goBack}
        formData={formData}
        setAnswer={(answer) => setAnswer("answer3", answer)}
         />
      case 4:
        return <Summary {...formData} />
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

 