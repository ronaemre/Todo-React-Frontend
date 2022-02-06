import React, { Fragment, useState } from "react";
import axios from "axios";

const InputTodo = () => {
    /*   const [description, setDescription] = useState("");
  
      const onSubmitForm = async e => {
          e.preventDefault();
          try {
              const body = { description };
              const response = await fetch("http://localhost:5000/todos", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(body)
              });
              console.log(response)
              window.location = "/";
          } catch (err) {
              console.error(err.message);
          }
      };
  
      return (
          <Fragment>
              <h1 className="text-center mt-5">Todo List</h1>
              <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                  <input
                      type="text"
                      className="form-control"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                  />
                  <input
                      type="text"
                      className="form-control"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                  />
  
                  <button className="btn btn-success">Add</button>
              </form>
          </Fragment>
      ); */
    const [tododate, setDate] = useState("");
    const [todoname, setName] = useState("");
    const [description, setDescription] = useState("");
    const [saved, setSaved] = useState("")
    /* 
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`; */

    /*     function getDate() {
           const current = new Date();
           const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
       } */


    async function addTodo() {
        /*    console.log(name, details) */
        const formData = new FormData();
        formData.append('tododate', tododate);
        formData.append('name', todoname);
        formData.append('details', description);
        const result = await axios.post(`http://localhost:5000/todos`, {
            tododate,
            todoname,
            description,
        });

        setSaved("Succesfully")
        /* alert("Todo Saved") */
        /*   setTodosHandler({ name, details }) */
        window.location = "/"
    }

    return (
        <div className="container" style={{ backgroundColor: "pink", borderRadius: "20px", marginTop: "30px" }} data-testid="container">
            <div >
                <input
                    data-testid="add_info"
                    className="form-control"
                    id="disabledInput"
                    type="text"
                    placeholder="Fill The Form To Add A Todo.."
                    disabled
                />
                <div className="form-row">
                    <div className="form-group col-md-2" data-testid="name" id="todo-name">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" data-testid="name_input" name="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-10" data-testid="details" id="todo-details">
                        <label htmlFor="inputDetails">Details</label>
                        <input type="text" className="form-control" data-testid="details_input" name="details" onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="form-group col-md-10" data-testid="details" id="todo-details">
                        <label htmlFor="inputDetails">CURRENT DATE</label>
                        <input type="date" className="form-control" data-testid="details_input" name="date" onChange={(e) => setDate(e.target.value)} />
                    </div>
                </div>
                <h3 data-testid="error" id="saved-succesfuly">{saved}</h3>
                <input
                    onClick={addTodo}
                    type="submit"
                    className="btn btn-success btn-block"
                    value="Add Todo"
                    name="Add Todo"
                />
            </div >
        </div >
    );

};

export default InputTodo;