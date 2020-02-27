import { quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';
import { flip } from 'svelte/animate';
import { ConfigTransition, ConfigAnimation } from 'svelte-types';

export interface ITodo
{
    id: number;
    done: boolean;
    description: string;
}
export default function App()
{
    //@ts-ignore ignore here because some params are optional
    //maybe we can make a pull request to svelte
    const [send, receive] = crossfade({
        duration: d => Math.sqrt(d * 200),
        fallback(node, params)
        {
            const style = getComputedStyle(node);
            const transform = style.transform === 'none' ? '' : style.transform;

            return {
                duration: 600,
                easing: quintOut,
                css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
            };
        }
    });

    let uid = 1;

    let todos: Array<ITodo> = [
        { id: uid++, done: false, description: 'write some docs' },
        { id: uid++, done: false, description: 'start writing blog post' },
        { id: uid++, done: true, description: 'buy some milk' },
        { id: uid++, done: false, description: 'mow the lawn' },
        { id: uid++, done: false, description: 'feed the turtle' },
        { id: uid++, done: false, description: 'fix some bugs' },
    ];

    function add(input)
    {
        const todo = {
            id: uid++,
            done: false,
            description: input.value
        };

        todos = [todo, ...todos];
        input.value = '';
    }

    function remove(todo)
    {
        todos = todos.filter(t => t !== todo);
    }

    function mark(todo, done)
    {
        todo.done = done;
        remove(todo);
        todos = todos.concat(todo);
    }

    <div class='board'>
        <input
            placeholder="what needs to be done?"
            onKeyDown={e => e.which === 13 && add(e.target)}
        />

        <div class='left'>
            <h2>todo</h2>
            <each from={todos.filter(t => !t.done)}>
                {(todo: ITodo, key = todo.id) => (
                    <label
                        in={ConfigTransition(receive, { key: todo.id })}
                        out={ConfigTransition(send, { key: todo.id })}
                        animate={ConfigAnimation(flip)}
                    >
                        <input type="checkbox" onChange={() => mark(todo, true)} />
                        {todo.description}
                        <button onClick={() => remove(todo)}>remove</button>
                    </label>
                )}
            </each>
        </div>

        <div class='right'>
            <h2>done</h2>
            <each from={todos.filter(t => t.done)}>
                {(todo: ITodo, key = todo.id) => (
                    <label
                        class="done"
                        in={ConfigTransition(receive, { key: todo.id })}
                        out={ConfigTransition(send, { key: todo.id })}
                        animate={ConfigAnimation(flip, { duration: 2000 })}
                    >
                        <input type="checkbox" checked onChange={() => mark(todo, false)} />
                        {todo.description}
                        <button onClick={() => remove(todo)}>remove</button>
                    </label>
                )}
            </each>
        </div>
    </div>
}