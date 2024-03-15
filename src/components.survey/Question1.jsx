import { useState } from "react"
import { BackNextButtons } from "./BackNextButtons";

const options = [
  {
    label: "Every Time! A clean desk is a productive desk, right?",
    value: "everytime",
  },
  {
    label: "Occasionally, if something shiny distracts me.",
    value: "occasionally",
  },
  {
    label: "Rarely, I'm all about efficiency.",
    value: "rarely",
  },
  {
    label: "Wait, was I supposed to have a to-do list?",
    value: "no",
  },
];

export const Question1 = ({ onNext, onBack, setFormData, setAnswer}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [fieldsFilled, setFieldsFilled] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setFieldsFilled(true);
    setAnswer(setSelectedOption) //update the answer for Quetsion 1
    setFormData({ answer1: e.target.value}) // update the form data for Question1
  };

  return (
    <div className="container-question">
      <label className="question" htmlFor="question1">
        When you finally sit down to do you your to-do list, how often do you
        end up rearranging your desk instead?
      </label>
      <ul>
        {options.map((option) => (
          <li className="radio-option" key={option.value}>
            <label htmlFor={option.value}>{option.label}</label>
            <input
              type="radio"
              id={option.value}
              name="question1"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
            />
          </li>
        ))}
      </ul>
      <BackNextButtons onNext={onNext} onBack={onBack} disabled={!fieldsFilled} />
    </div>
  );
};

//disabled={!fieldsFilled}/ the user can move further without choosing something