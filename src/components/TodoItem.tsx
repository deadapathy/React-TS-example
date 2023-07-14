import { ITodo } from '../types/data';

/* The `interface ITodoItem` is extending the `ITodo` interface, which means it inherits all the
properties and methods defined in the `ITodo` interface. Additionally, it adds two new methods:
`removeTodo` and `toggleTodo`. */
interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

/* The code is defining a functional component called `TodoItem` that takes in props of type
`ITodoItem`. The component renders a div element with a checkbox, a span element for the title, and
a button. The checkbox is checked if the `complete` prop is true, and the `onChange` event is set to
call the `toggleTodo` function with the `id` prop as an argument. The button has an `onClick` event
that calls the `removeTodo` function with the `id` prop as an argument. The component returns this
div element as its output. */
const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, complete, removeTodo, toggleTodo } = props;
    return <div style={{ display: 'flex' }}>
        <input type='checkbox' checked={complete} onChange={() => toggleTodo(id)} />
        <span style={{ display: 'inline-block', margin: '0 10px', }}>{title}</span>
        <button style={{ background: 'border-box', border: 'none', outline: 'none', color: 'red', cursor: 'pointer' }} onClick={() => removeTodo(id)}>x</button>
    </div>
}

export { TodoItem };