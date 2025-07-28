import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Modal from "./components/Modal";
import UserContext from "./utils/UserContext";

function App() {
  const [Modals, setModals] = useState(false);
  const [income, setIncome] = useState("");
  const [personal, setPersonal] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [output, setOutput] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  //  console.log(income);
  //  console.log(personal)
  // console.log(date)
  // console.log(time);
  // console.log(description);
  //  console.log(amount)
  //console.log(output);
  const handleIncome = (Income) => {
    setIncome(Income);
  };
  const handlePersonal = (personal) => {
    setPersonal(personal);
  };
  const handleClick = () => {
    const results = {
      type: income,
      cases: personal,
      dates: date,
      times: time,
      description: description,
      amounts: amount,
    };

    if (isEditing) {
      const updatedResults = output.map((data) =>
        data.id === editId ? { ...data, ...results, id: editId } : data
      );
      setOutput(updatedResults);
      setIsEditing(false);
      setEditId(null);
    } else {
      const newId = output.length === 0 ? 1 : output.length + 1;
      setOutput((prev) => [...prev, { ...results, id: newId }]);
    }
    // const handleClick = () => {
    //       if(output.length === 0){
    //         setOutput((prev) => [...prev,{...results,id:1}])
    //       }else{
    //         setOutput((prev) => [...prev,{...results,id:output.length+1}])
    //       }
    // }
    setIncome("");
    setPersonal("");
    setDate("");
    setTime("");
    setDescription("");
    setAmount("");
    setModals(false);
  };

  const editFunction = (items) => {
    setIncome(items.type);
    setPersonal(items.cases);
    setDate(items.dates);
    setTime(items.times);
    setDescription(items.description);
    setAmount(items.amounts);
    setEditId(items.id);
    setIsEditing(true);
    setModals(true);
  };
  return (
    <UserContext.Provider
      value={{
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
        output,
        setModals,
        editFunction,
        editId,
        setEditId,
      }}
    >
      <div>
        <Header setModals={setModals} />
        <Home />
        {Modals && <Modal setModals={setModals} isEditing={isEditing} />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
