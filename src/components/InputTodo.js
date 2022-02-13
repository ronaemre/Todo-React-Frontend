import React, { useState } from "react";
import { addTodo } from "../api/api"

const InputTodo = ({ setTodos }) => {

    const [tododate, setDate] = useState("");
    const [todoname, setName] = useState("");
    const [description, setDescription] = useState("");


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

                <input
                    onClick={() => addTodo(tododate, todoname, description, setTodos)}
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