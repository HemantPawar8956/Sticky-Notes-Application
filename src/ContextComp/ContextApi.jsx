import React, { createContext, createRef, useEffect, useState } from "react";
export let TaskContext = createContext("");
let { Provider } = TaskContext;

const ContextApi = ({ children, data: { alldata, maincomponent } }) => {
  let localItems = () => {
    if (localStorage.getItem("Notes")) {
      return JSON.parse(localStorage.getItem("Notes"));
    } else {
      return [];
    }
  };
  let [Notes, setNotes] = useState(localItems());
  let [state, setState] = useState({
    title: "",
    description: "",
    Dates: "",
    Category: "",
  });

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(Notes));
  }, [Notes]);

console.log(localStorage)

  let [selecCategory, setselecCategory] = useState({ SelectCategory: "All" });

  let addNotes = (title, description, Category, Dates) => {
    setNotes([...Notes, { title, description, Category, Dates }]);
  };
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleUpdate = (index) => {
    console.log(index);
    let filterdeTask = Notes.filter((eachTask, ind) => ind != index);
    let updatedTask = Notes.find((eachTask, ind) => ind == index);
    console.log(alldata);
    setNotes(filterdeTask);
    setState(updatedTask);
    maincomponent.current.style.display = "block";
    alldata.current.style.display = "none";
  };

  let handleDelete = (index) => {
    let filterdeTask = Notes.filter((eachTask, ind) => ind != index);
    setNotes(filterdeTask);
  };

  let handleCategory = (e) => {
    let { name, value } = e.target;
    setselecCategory({ [name]: value });
  };

  return (
    <Provider
      value={{
        Notes,
        addNotes,
        handleChange,
        state,
        setState,
        handleDelete,
        handleUpdate,
        selecCategory,
        handleCategory,
      }}
    >
      {children}
    </Provider>
  );
};

export default ContextApi;
