import React, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Dashboard = () => {
  const { output } = useContext(UserContext);

  const today = new Date();

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);

  const weeklyTransactions = output.filter((entry) => {
    const entryDate = new Date(entry.dates); // turn string into Date object
    return (
      entryDate >= sevenDaysAgo && entryDate <= today && entry.type === "Income"
    );
  });
  const monthlyTransactions = output.filter((entry) => {
    const entryDate = new Date(entry.dates); // turn string into Date object
    return (
      entryDate >= thirtyDaysAgo &&
      entryDate <= today &&
      entry.type === "Income"
    );
  });

  console.log(weeklyTransactions);
  console.log(monthlyTransactions);

  const weeklyIncome = weeklyTransactions.reduce(
    (sum, entry) => sum + Number(entry.amounts),
    0
  );
  const monthlyIncome = monthlyTransactions.reduce(
    (sum, entry) => sum + Number(entry.amounts),
    0
  );

  const balance = [
    {
      name: "weeklyIncome",
      amount: Number(weeklyIncome),
    },
    {
      name: "monthlyIncome",
      amount: Number(monthlyIncome),
    },
  ];
  const [info, setInfo] = useState(null);

  const handleTransCick = (index) => {
          setInfo(index)
  }
  return (
    <div className="col-span-1 border border-spacing-1 py-2">
      <h1 className="font-medium text-2xl">Dashboard</h1>
      {balance?.map((trans, index) => (
        <button
          className="px-2 py-2 bg-green-700 text-white mx-2 rounded-lg"
          key={index}
          onClick={() => handleTransCick(index)}
        >
          {trans.name}
        </button>
      ))}
     {info !== null ? (
    <h1>Income: ₹{balance[info].amount}</h1>
  ) : (
    <h1>Please select a period to view income.</h1>
  )}
    </div>
  );
};

export default Dashboard;
