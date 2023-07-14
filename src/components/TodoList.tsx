import { TodoItem } from "./TodoItem"
import { ITodo } from '../types/data';

/* The `interface ITodoListProps` is defining the shape of the props object that the `TodoList`
component expects to receive. It specifies that the `items` prop should be an array of objects that
match the `ITodo` interface, and the `toggleTodo` and `removeTodo` props should be functions that
take in a number (id) and return nothing (`void`). */
interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

/* The code is defining a functional component called `TodoList` that takes in `props` as its
parameter. The `props` object is destructured to extract the `items`, `toggleTodo`, and `removeTodo`
properties. */
const TodoList: React.FC<ITodoListProps> = (props) => {
    const { items, toggleTodo, removeTodo } = props
    return <div>
        {
            props.items.map(todo => (
                <TodoItem
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                    {...todo} />
            ))
        }
    </div>
}

export {
    TodoList
}