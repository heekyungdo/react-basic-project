import { useState } from "react";
import InputForm from "./components/InputForm"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        // + 를 써주면 문자열 값을 숫자 값으로 변환해준다.
        [inputIdentifier]: +newValue
      };
    });
  };

  return (
    <>
      <InputForm onChange={handleChange} inputValue={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
