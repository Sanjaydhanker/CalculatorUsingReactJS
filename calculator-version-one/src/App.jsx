import AllButton from "./components/AllButton";
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
        <div className="w-[400px] h-auto p-10 rounded-xl shadow bg-indigo-300">
          {/* input */}
          <InputTag />
          {/* Buttons */}
          <AllButton buttonNames={buttonNames} />
        </div>
      </div>
    </>
  );
}

export default App;
