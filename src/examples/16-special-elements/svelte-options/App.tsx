import Todo, { ITodo } from './Todo';

export default function App()
{
    let todos: Array<ITodo> = [
        { id: 1, done: true, text: 'wash the car' },
        { id: 2, done: false, text: 'take the dog for a walk' },
        { id: 3, done: false, text: 'mow the lawn' }
    ];

    function toggle(toggled: ITodo)
    {
        todos = todos.map(todo =>
        {
            if (todo === toggled)
            {
                // return a new object
                return {
                    id: todo.id,
                    text: todo.text,
                    done: !todo.done
                };
            }

            // return the same object
            return todo;
        });
    }

    <h2>Todos</h2>;

    <each from={todos}>
        {(todo: ITodo) => (
            <Todo todo={todo} onClick={() => toggle(todo)} />
        )}
    </each>
}