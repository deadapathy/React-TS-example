import React, { useEffect, useRef, useState } from "react";
import { ITodo } from '../types/data';
import { TodoList } from "./TodoList";

/**
 * This is a functional component in TypeScript React that manages a todo list.
 * @returns The `App` component is returning a JSX element. It consists of a `div` element containing
 * an input field and a button for adding new todos, as well as a `TodoList` component that displays
 * the list of todos.
 */
const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    const addTodo = () => {
        if (value) {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: value,
                    complete: false,
                }
            ]);
            setValue('')
        }
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todos => todos.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    return <div>
        <div>
            <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
            <button onClick={addTodo}>Add</button>
        </div>
        <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>;
}

export { App };