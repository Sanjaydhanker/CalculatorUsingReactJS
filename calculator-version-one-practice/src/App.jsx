import { useState } from "react";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import Container from "./components/Container";

function App() {
  const [inputVal, setInputVal] = useState("");
  let allButtonName = [
    "9",
    "8",
    "7",
    "AC",
    "6",
    "5",
    "4",
    "+",
    "3",
    "2",
    "1",
    "-",
    "0",
    "*",
    "=",
    "/",
    "00",
  ];
  const handleOnClick = (number) => {
    if (number === "AC") {
      setInputVal("");
    } else if (number === "=") {
      let result = eval(inputVal);
      setInputVal(result);
    } else {
      let newVal = inputVal + number;
      setInputVal(newVal);
    }
  };
  return (
    <>
      <Container>
        <Input inputVal={inputVal} />
        <Buttons allButtonName={allButtonName} handleOnClick={handleOnClick} />
      </Container>
    </>
  );
}

export default App;
