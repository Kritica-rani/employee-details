import Employess from "./components/EmployeList";
import "./App.css";
import EmployeContext from "./context/EmployeeContext";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { EmployeeData } from "./data/EmployeeData";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [data, setData] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState({});
  useEffect(() => {
    setData(EmployeeData);
  }, []);
  const handleAddemployee = (e, details) => {
    console.log("details", details);
    setData((prevData) => {
      return [...prevData, details];
    });
  };
  const handleDeleteEmployee = (name) => {
    const updatedData = data.filter((item) => item.name !== name);
    setData(updatedData);
  };
  console.log("data", data);
  return (
    <EmployeContext.Provider
      value={{
        data,
        setData,
        setCurrentEmployee,
        currentEmployee,
        handleAddemployee,
        handleDeleteEmployee,
      }}
    >
      <div className="App">
        <Header />
        <div className="employees-detail">
          <Employess />
          <EmployeeCard />
        </div>
      </div>
    </EmployeContext.Provider>
  );
}

export default App;
