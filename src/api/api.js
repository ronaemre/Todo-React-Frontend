export const getTodos = async (setTodos) => {
    try {
        const response = await fetch("http://localhost:5000/todos");
        const jsonData = await response.json();

        setTodos(jsonData);
    } catch (err) {
        console.error(err.message);
    }
};
