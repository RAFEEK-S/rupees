import React, { useContext } from "react";
import History from "../components/History";
import UserContext from "../utils/UserContext";
const Body = () => {
  const { output, setModals, editFunction } =
    useContext(UserContext);
  if (!output) return;
  return (
    <div className="col-span-10 border border-spacing-2">
      <h1 className="text-3xl font-medium mt-5 ">
        History of income and expenses
      </h1>
      {output?.map((items) => (
        <History
          key={items.id}
          items={items}
          setModals={setModals}
          editFunction={editFunction}
         
        />
      ))}
    </div>
  );
};

export default Body;
