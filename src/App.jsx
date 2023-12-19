import React, { createRef, useContext } from "react";
import ContextApi, { TaskContext } from "./ContextComp/ContextApi";
import NotesForm from "./ContextComp/NotesForm";
import AllNotes from "./ContextComp/AllNotes";
import "./App.css";
import Nav from "./ContextComp/Nav";
import MenuAside from "./MenuAside";
const App = () => {
  let alldata = createRef();
  let maincomponent = createRef();
  let displayAllData=()=>{
    alldata.current.style.display="block"
    maincomponent.current.style.display="none"
  }

  let Home=()=>{
    maincomponent.current.style.display="block"
    maincomponent.current.style.display='flex'
    maincomponent.current.style.justifyContent='space-evenly'
    maincomponent.current.style.alignItems='space-evenly'

    // maincomponent.current.style.gap='5px'
    alldata.current.style.display="none"
  }
  return (
    <ContextApi data={{alldata,maincomponent}}>
      <section className="Navbar">
        <Nav />
      </section>
      <section className="menuAside">
        <MenuAside  Data={{displayAllData,Home}} />
      </section>
      <section className="AllData" ref={alldata} >
        <AllNotes />
      </section>
      <section className="mainContainer" ref={maincomponent}>
        <NotesForm />
        <AllNotes />
      </section>
    </ContextApi>
  );
};

export default App;
