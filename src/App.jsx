import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");
  function changeColor(colorp) {
    if (colorp === "white") setColor("white");
    else if (
      (color === "yellow" && colorp == "red") ||
      (color === "red" && colorp == "yellow")
    )
      setColor("orange");
    else if (
      (color === "yellow" && colorp == "blue") ||
      (color === "blue" && colorp == "yellow")
    )
      setColor("green");
    else if (
      (color === "blue" && colorp == "red") ||
      (color === "red" && colorp == "blue")
    )
      setColor("purple");
    else if (color === "green" || color === "orange" || color === "purple")
      setColor("brown");
    else if (color === "brown") setColor("rgb(90, 29, 29)");
    else if (color === "rgb(90, 29, 29)") setColor("rgb(53, 18, 18)");
    else if (color === "rgb(53, 18, 18)" || color === "black")
      setColor("black");
    else setColor(colorp);
  }
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2 rounded-3xl ">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-gray-700 px-2 py-2 rounded-2xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => changeColor("white")}
          >
            white
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => changeColor("red")}
          >
            red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => changeColor("yellow")}
          >
            yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => changeColor("blue")}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
