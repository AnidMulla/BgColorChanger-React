import { useState } from "react";

function App() {
  const [color, Setcolor] = useState("white");
  const colors = [
    "Red",
    "Green",
    "Blue",
    "Olive",
    "Gray",
    "Yellow",
    "Pink",
    "Lavender",
    "White",
  ];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white">
          {colors.map((color, id) => {
            return (
              <button
                className="outline-none px-4 py-1 rounded-full shadow-lg"
                style={{
                  backgroundColor: color.toLowerCase(),
                  color: `${color === "White" ? "black" : "white"}`,
                }}
                onClick={() => Setcolor(color)}
                key={id}
              >
                {color}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
