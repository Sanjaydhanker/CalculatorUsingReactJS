import { useState } from "react";
import AllButton from "./components/AllButton";
import CalculatorContainer from "./components/CalculatorContainer";
import InputTag from "./components/InputTag";

function App() {
  const buttonNames = [
    "AC",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "00",
    ".",
    "=",
  ];

  const [inputValue, setInputValue] = useState("");

  const onButtonClick = (textButton) => {
    console.log(textButton);
    if (textButton === "AC") {
      setInputValue("");
    } else if (textButton === "=") {
      let result = eval(inputValue);
      setInputValue(result);
    } else if (textButton === "DEL") {
      let delOneValue = inputValue.slice(0, -1);
      setInputValue(delOneValue);
    } else {
      let newButtonValue = inputValue + textButton;
      setInputValue(newButtonValue);
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
        <CalculatorContainer>
          <InputTag type={"text"} inputValue={inputValue} />
          <AllButton buttonNames={buttonNames} onButtonClick={onButtonClick} />
        </CalculatorContainer>
      </div>
    </>
  );
}

export default App;
