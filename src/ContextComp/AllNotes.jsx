import React, { useContext } from "react";
import { TaskContext } from "./ContextApi";

const AllNotes = () => {
  let { Notes, handleDelete, handleUpdate ,selecCategory,handleCategory} =useContext(TaskContext);
  return (
    <section className="AllNotes">
      <h3>All Notes </h3>
      <select
      className="Filter"
        name="SelectCategory"
        id="Category"
        value={selecCategory}
        onChange={handleCategory}
      >
        <option value="Select Category" >
          Select Category
        </option>
        <option value="All">All</option>
        <option value="Study">Study</option>
        <option value="General">General</option>
        <option value="Personal">Personal</option>
        <option value="Official">Official</option>
      </select>
      <main>
       {console.log(selecCategory)}
        {Notes.length < 1
          ? "No Task To Display"
          : Notes.map((ele, index) =>{ 
             return  selecCategory.SelectCategory == "All" ? 
                <div className="note">
                  <div>{ele.Dates}</div>
                  <h4>{ele.title.length > 10 ? (
                      <span className="titleContent">{ele.title.slice(0, 10).toUpperCase()} ...</span>
                      ) : (
                      <span className="titleContent">{ele.title.slice(0, 10).toUpperCase()}</span>
                    )} {ele.Category}
                  </h4>
                  <p><span className="label">Discription : </span>{ele.description.length > 100 ? (
                    <span>{ele.description.slice(0, 90)} ......</span>
                    ) : (
                      <span>{ele.description.slice(0, 90)}</span>
                    )}
                  </p>

                  <button className="updateBtn CrudButton" onClick={() => handleUpdate(index)} >Update Task </button>
                  <button className="DeleteBtn CrudButton" onClick={() => handleDelete(index)}> Delete Task</button>
                </div>
              
               : 
               selecCategory.SelectCategory== ele.Category && (
                    <div className="note">
                  <div><span className="label">Category : </span>{ele.Category}</div>
                  {console.log("repeat2")}
                  <h4><span className="label">Title : </span>{ele.title.length > 20 ? (
                      <span className="titleContent">{ele.title.slice(0, 30)} ......</span>
                      ) : (
                      <span className="titleContent">{ele.title.slice(0, 30)}</span>
                    )}
                  </h4>
                  <p><span className="label">Discription : </span>{ele.description.length > 140 ? (
                    <span>{ele.description.slice(0, 130)} ......</span>
                    ) : (
                      <span>{ele.description.slice(0, 130)}</span>
                    )}
                  </p>

                  <button className="updateBtn CrudButton" onClick={() => handleUpdate(index)} >Update Task </button>
                  <button className="DeleteBtn CrudButton" onClick={() => handleDelete(index)}> Delete Task</button>
                </div>
                )
        })
            }
            
      </main>
    </section>
  );
};

export default AllNotes;
