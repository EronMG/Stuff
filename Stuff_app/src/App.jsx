import { useState } from "react";

const App = () => {
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [items, setItems] = useState([]);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleText1 = (e) => {
    setText1(e.target.value);
  };

  const handleAdd = () => {
    if (text && text1) {
      setItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), heading: text1, paragraph: text },
      ]);
      setText("");
      setText1("");
    }
  };

  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className=" bg-gray-300 flex flex-col gap-[15px]">
        <input
          type="text"
          name="text1"
          id="text1"
          placeholder="Enter a header"
          value={text1}
          onChange={handleText1}
          className="outline-none border-[2px] rounded-[35px] border-[white] bg-gray-300 px-2 max-w-[200px]"
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Enter a paragraph"
          value={text}
          onChange={handleText}
          className="outline-none border-[2px] rounded-[35px] border-[white] bg-gray-300 px-2 max-w-[200px]"
        />
        <button
          onClick={handleAdd}
          className=" bg-[green] p-1.5 rounded-[35px] text-[white] font-bold max-w-[200px]"
        >
          Add information
        </button>
      </div>
      <div className="h-[1230px] bg-gray-300 flex justify-center items-center flex-col">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col justify-center items-center bg-white max-w-md p-2 rounded-md shadow-md ${
              activeId === item.id ? "my-4" : "mb-2"
            } transition-transform ${
              activeId === item.id ? "scale-105" : "scale-100"
            }`}
          >
            <h1
              className={`text-2xl border-b-4 transition-transform duration-300 ${
                hoveredId === item.id ? "transform scale-105" : ""
              }`}
              onClick={() => handleToggle(item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {item.heading}
            </h1>
            <p
              className={`${
                activeId === item.id ? "block" : "hidden"
              } transition-opacity duration-500`}
            >
              {" "}
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
