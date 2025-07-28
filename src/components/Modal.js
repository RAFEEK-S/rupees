import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Modal = ({ setModals,isEditing }) => {
  const {
    income,
    handleIncome,
    personal,
    handlePersonal,
    setDate,
    date,
    time,
    setTime,
    description,
    setDescription,
    amount,
    setAmount,
    handleClick,
    
  } = useContext(UserContext);

  const handleSubmit = (e) => {
      e.preventDefault();
      handleClick();
  }
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center text-center items-center">
        <button
          type="button"
          className="absolute top-72 left-1/2 text-xl font-bold text-gray-700 hover:text-red-500"
          onClick={() => setModals(false)}
        >
          ✖
        </button>
        <form
          className="shadow-lg bg-white rounded-lg w-1/2 h-72 p-4"
          onSubmit={handleSubmit}
        >
          {/* Finance Type */}
          <div className="flex justify-around">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="finance"
                value="Income"
                checked={income === "Income"}
                onChange={() => handleIncome("Income")}
              />
              <label htmlFor="income">Income</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="finance"
                value="Expense"
                checked={income === "Expense"}
                onChange={() => handleIncome("Expense")}
              />
              <label htmlFor="expense">Expense</label>
            </div>
          </div>

          {/* Usage Type */}
          <div className="flex justify-around">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="usage"
                value="Office"
                checked={personal === "Office"}
                onChange={() => handlePersonal("Office")}
              />
              <label htmlFor="office">Office</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="usage"
                value="Personal"
                checked={personal === "Personal"}
                onChange={() => handlePersonal("Personal")}
              />
              <label htmlFor="personal">Personal</label>
            </div>
          </div>

          {/* Date and Time */}
          <div className="flex justify-around space-x-2 pt-4">
            <input
              type="date"
              name="dates"
              value={date}
              className="py-2 border border-black w-full"
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              name="times"
              value={time}
              className="py-2 border border-black w-full"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {/* Description and Amount */}
          <div className="flex justify-around space-x-2 pt-8">
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              className="py-2 border border-black w-full"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={amount}
              className="py-2 border border-black w-full"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#331b3f] text-[#ACC7B4] px-1 py-3 rounded-lg w-1/2 mt-4"
          >
            {isEditing ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
