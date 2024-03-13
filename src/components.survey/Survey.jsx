//import { useState } from "react"
import { Summary } from "./Summary"
import { First } from "./First";
import { Intro } from "./Intro";
import { Second } from "./Second";


export const Survey = () => {
  return (
    <>
    <Intro /> 
    <First />
    <Second />
    <Summary />
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