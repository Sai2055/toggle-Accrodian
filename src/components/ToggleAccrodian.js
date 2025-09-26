import { useState } from "react";
import data from "./DescrptionData";
export default function ToggleAccrodian() {
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (openIndex) =>
    setIsOpen(isOpen === openIndex ? null : openIndex);
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-center w-[600px] bg-black flex flex-col border border-white shadow-xl my-1 rounded-md "
        >
          <div
            className="py-2 flex justify-center"
            onClick={() => handleToggle(index)}
          >
            {item.title}{" "}
            <span className="pl-10">{isOpen == index ? "▲" : "▼"}</span>
          </div>
          {isOpen === index && <div className="pb-2">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}
