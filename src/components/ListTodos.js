import React, { Fragment, useEffect } from "react";

import EditTodo from "./EditTodo";
import { getTodos, deleteTodo } from "../api/api";


const ListTodos = ({ todos, setTodos }) => {

    useEffect(() => {
        getTodos(setTodos);
    }, []);

    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Added Date</th>
                        <th>Updating Date</th>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.tododate}</td>
                            <td>{todo.todoupdatedate ? todo.todoupdatedate : "There is no update"}</td>
                            <td>{todo.todochecked === true && "done"}</td>
                            <td>{todo.todoname}</td>

                            <td>{todo.description}</td>
                            <td>
                                <EditTodo todo={todo} setTodos={setTodos} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.todo_id, setTodos)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment >
    );
};

export default ListTodos;
