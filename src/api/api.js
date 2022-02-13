import axios from "axios";

export const getTodos = async (setTodos) => {
    try {
        const response = await fetch("http://localhost:5000/todos");
        const jsonData = await response.json();

        setTodos(jsonData);

    } catch (err) {
        console.error(err.message);
    }
};




export const updateTodo = async (description, todoname, todoupdatedate, todochecked, e, todo, setTodosHandler) => {
    e.preventDefault();
    try {
        const body = { description, todoname, todoupdatedate, todochecked };

        await fetch(
            `http://localhost:5000/todos/${todo.todo_id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            }
        );



        getTodos(setTodosHandler)
    } catch (err) {
        console.error(err.message);
    }
};


export async function addTodo(tododate, todoname, description, setTodosHandler) {

    if (tododate == "" || todoname == "" || description == "") {
        return
    }

    await axios.post(`http://localhost:5000/todos`, {
        tododate,
        todoname,
        description,
    });

    getTodos(setTodosHandler)

}

export const deleteTodo = async (id, setTodos) => {
    try {
        await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
        });


        getTodos(setTodos)
    } catch (err) {
        console.error(err.message);
    }
};

