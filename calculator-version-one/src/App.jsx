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
  return (
    <>
      <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
        <CalculatorContainer>
          <InputTag type="text" />
          <AllButton buttonNames={buttonNames} />
        </CalculatorContainer>
      </div>
    </>
  );
}

export default App;
