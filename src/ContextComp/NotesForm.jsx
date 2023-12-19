import React, { useContext } from "react";
import { TaskContext } from "./ContextApi";

let Dates=new Date();
let TodaysDate=Dates.toDateString()

const NotesForm = () => {
  let { addNotes, handleChange, state, setState } = useContext(TaskContext);
  let { title, description, Category } = state;

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      addNotes(title, description, Category,TodaysDate);
      setState({
        title: "",
        description: "",
        Category: "" ,
      });
    } catch (error) {}
  };
  return (
    <section className="AddContainer">
      <h2 className="text-center">Add a Note </h2>
      <form action="#" method="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title..."
            value={title}
            onChange={handleChange}
            autoFocus
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            id="description"
            rows="5"
            cols="30"
            placeholder="Write your note here.........."
            value={description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group" name="Category" value={Category} onChange={handleChange}>
          <label >Category: </label>
          <span className="Category"><input type="radio"  name="Category" value="Study"   /> Study</span>
          <span className="Category"><input type="radio"  name="Category" value="General"   /> General</span>
          <span className="Category"><input type="radio"  name="Category" value="Personal"   /> Personal</span>
          <span className="Category"><input type="radio"  name="Category" value="Official"   /> Official</span>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            ADD NOTE
          </button>
        </div>
      </form>
    </section>
  );
};

export default NotesForm;
