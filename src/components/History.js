import React from "react";

const History = ({ items, setModals,editFunction }) => {
  return (
    <div className="flex justify-center items-center  mt-10">
      <div className="p-4 text-center ">
        <button
          type="button"
          className="px-2 py-2 mx-4 bg-[#331b3f] text-[#ACC7B4] rounded-lg cursor-text"
        >
          {items.type}
        </button>
        <button
          type="button"
          className="px-2 py-2 bg-[#331b3f] text-[#ACC7B4] rounded-lg cursor-text"
        >
          {items.cases}
        </button>
      </div>
      <div className="p-4 ">
        <span className="px-2 text-2xl">{items.dates}</span>
        <span className="px-2 text-2xl">{items.times}</span>
        <span className="px-2 text-2xl">{items.description}</span>
        <span className="px-2 text-2xl">{items.amounts}</span>
      </div>
      <div className="p-4 ">
        <button
          type="button"
          className="px-2 py-2 mx-4 bg-[#331b3f] text-[#ACC7B4] rounded-lg"
          onClick={() => {setModals(true);editFunction(items)}}
        >
          Edit
        </button>
        <button
          type="button"
          className="px-2 py-2 mx-4 bg-[#331b3f] text-[#ACC7B4] rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default History;
