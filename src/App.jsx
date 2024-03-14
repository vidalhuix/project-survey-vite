import { Survey } from "./components.survey/Survey";

export const App = () => {
  return(
    <>
      <Survey />
    </>
  ) 
}

/*# Requirements:
- Your survey should consist of at least 3 questions.
- At least one question should use radio buttons.
- At least one question should use a select dropdown.
- There should be a submit button. When pressed, your app should hide the input form and show a summary of the user's submissions.
- Your portfolio should be following accessibility guidelines to ensure your website is usable by a diverse range of users:
    - You should have a score of at least 95 in [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)
    - All images should have alt attributes and proper sizes
    - All contrasts should be OK
- Follow the guidelines on [how to write good code](https://www.notion.so/Guidelines-for-how-to-write-good-code-59abdd4307a24f5ca7914d566326f4df?pvs=21)
- Make your app responsive (it should look good on devices from 320px width up to 1600px)
*/
