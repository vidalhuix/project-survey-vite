export const Summary = ({name, age, answer1, answer2, answer3 }) => {
  return (
    <div className="survey-summary">
      <label>Let´s see how your day look:</label>
      <p>Name: {name} </p>
      <p>Age: {age} </p>
      <p>To-do list, you answered: {answer1} </p>
      <p>Hyperfocused: {answer2} </p>
      <p>Tabs Opened: {answer3} </p>
    </div>
  )
}

//{second && <p>Your Answer: {second}</p>}
