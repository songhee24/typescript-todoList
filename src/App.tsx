import React, {useState} from "react";
import Todos from "./components/Todos";
import Todo from "./model/todo";
import NewTodo from "./components/NewTodo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([
        new Todo("Learn React"),
        new Todo("Learn TypeScript"),
    ]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevState) => {
            return prevState.concat(newTodo);
        });
    };

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} />
        </div>
    );
}

export default App

