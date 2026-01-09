import { useState } from "react";
import AllButton from "./components/AllButton";
import Container from "./components/Container";
import DisplayResult from "./components/DisplayResult";

function App() {
  const buttons = [
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
  const [displayValue, setDisplayValue] = useState("");

  const handleClickButton = (button) => {
    if (button === "AC") {
      setDisplayValue("");
    } else if (button === "=") {
      let result = eval(displayValue);
      setDisplayValue(result);
    } else if (button === "DEL") {
      let delOneValue = displayValue.slice(0, -1);
      setDisplayValue(delOneValue);
    } else {
      let newDisplayValue = displayValue + button;
      setDisplayValue(newDisplayValue);
    }
  };

  return (
    <Container>
      <DisplayResult displayValue={displayValue} />
      <AllButton buttons={buttons} handleClickButton={handleClickButton} />
    </Container>
  );
}

export default App;
