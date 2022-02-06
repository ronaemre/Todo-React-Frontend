import React, { Fragment, useState } from "react";
import axios from "axios";

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);
    const [todoname, setName] = useState(todo.todoname);
    const [todoupdatedate, setDate] = useState(todo.todoupdatedate);

    //edit description function

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description, todoname, todoupdatedate };

            const response = await fetch(
                `http://localhost:5000/todos/${todo.todo_id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                }
            );


            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${todo.todo_id}`}
            >
                Edit
            </button>

            {/* 
        id = id10
      */}
            <div
                className="modal"
                id={`id${todo.todo_id}`}
                onClick={() => setDescription(todo.description)}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            Name
                            <input
                                type="text"
                                className="form-control"
                                value={todoname}
                                onChange={e => setName(e.target.value)}
                            />
                            Description
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                            Update Date
                            <input
                                type="date"
                                className="form-control"
                                value={todoupdatedate}
                                onChange={e => setDate(e.target.value)}
                            />
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateDescription(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditTodo;