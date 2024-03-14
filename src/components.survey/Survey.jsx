//import { useState } from "react"
import { Intro } from   "./Intro"
import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Question3 } from "./Question3";
import { Summary } from "./Summary"
import "./Survey.css"

export const Survey = () => {
  return (
    <>
      <div className="survey-adhd">
        <Intro /> 
        <Question1 />
        <Question2 />
        <Question3 />
        <button type="Submit">Submit</button>
        <Summary />
      </div> 
    </>
  )
}






    /*
    //const [user, setUser] = useState('')
    //const [email, setEmail] = useState('')
    //use the useState hook to det the name an email to null

    const handleNext = (e) => {
        e.preventDefault()
console.log(user, email)
    }
  return (
    <>
    <form onSubmit={handleNext}>
        <input type="text" placeholder="enter your name" onChange={(e) => {setUser(e.target.value)}} value ={user} required />

        <input type="email" placeholder="enter your email" onChange={(e) => {setEmail(e.target.value)}} value={email} required />
        <button type="next">Next</button>

    </form>
    {/* add questions */ 


 