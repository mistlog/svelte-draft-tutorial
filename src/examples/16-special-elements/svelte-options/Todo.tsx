import { afterUpdate } from 'svelte';
import flash from './flash';

export interface ITodo
{
    id: number;
    done: boolean;
    text: string;
}

export interface ITodoProps
{
    todo: ITodo;
    onClick: () => void;
}

export default function Todo(props: ITodoProps)
{
    <svelte-options immutable={true} />

    const { todo } = props;

    let div: HTMLDivElement;

    afterUpdate(() =>
    {
        flash(div);
    });

    <div bindRef={div} onClick>
        {todo.done ? '👍' : ''} {todo.text}
    </div>

}