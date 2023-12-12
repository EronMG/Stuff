import { useState } from "react";
import BoxButton from "./components/BoxButton";
import Buttons from "./components/Buttons";
import Output from "./components/Output";
import Wraper from "./components/Wraper";

function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const btnsValue = [
    ["C", "-+", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  const handleClickNum = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (calc.num.length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const handleClickComma = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const handleClickSign = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      sign: value,
      res: calc.res && calc.num ? calc.num : calc.res,
    });
  };
  return (
    <div className="flex justify-center items-center h-[100vh] bg-slate-700">
      <Wraper className="flex flex-col justify-center items-center rounded-[20px] bg-black w-fit py-[10px] px-[10px]">
        <Output
          className="text-white bg-neutral-700 w-full m-[10px] rounded-[10px] text-[36px] flex justify-end"
          value={calc.num ? calc.num : calc.res}
        />
        <BoxButton
          className={`flex flex-wrap w-[320px] h-[450px] gap-x-[25px]  justify-center items-center`}
        >
          {btnsValue.flat().map((btn, index) => (
            <Buttons
              key={index}
              value={btn}
              className={` rounded-[5px] w-[60px] h-[70px] ${
                index === 18 ? "bg-[orange] w-[145px] " : "bg-white"
              }`}
              onClick={() => console.log("Click: ", btn)}
            />
          ))}
        </BoxButton>
      </Wraper>
    </div>
  );
}

export default App;
