export interface ITodo
{
    done: boolean;
    text: string;
}

export default function App()
{
    let todos = [
        { done: false, text: 'finish Svelte tutorial' },
        { done: false, text: 'build an app' },
        { done: false, text: 'world domination' }
    ];

    function add()
    {
        todos = todos.concat({ done: false, text: '' });
    }

    function clear()
    {
        todos = todos.filter(t => !t.done);
    }

    let remaining: number;

    //@ts-ignore
    <TrackTodos/>;

    <h1>Todos</h1>;

    <each from={todos}>
        {(todo: ITodo) => (
            <div class={todo.done ? "done" : ""}>
                <input type="checkbox" bindChecked={todo.done} />
                <input placeholder="What needs to be done?" bindValue={todo.text} />
            </div>
        )}
    </each>;

    <p>{remaining} remaining</p>;

    <button onClick={add}>
        Add new
    </button>;

    <button onClick={clear}>
        Clear completed
    </button>
}

function TrackTodos(remaining: number, todos: Array<ITodo>)
{
    "use watch";
    remaining = todos.filter(t => !t.done).length;
}