import React from "react";

const Header = ({ setModals }) => {
  return (
    <div className="flex justify-around bg-[#ACC7B4] h-16 items-center">
      <div>
        <h1 className="text-[#331b3f] font-semibold text-xl">
          Money Manager Application
        </h1>
      </div>
      <div>
        <button
          type="button"
          className="bg-[#331b3f] text-[#ACC7B4] px-2 py-2 rounded-lg "
          onClick={() => setModals(true)}
        >
          ADD Income/Expense
        </button>
      </div>
    </div>
  );
};

export default Header;
