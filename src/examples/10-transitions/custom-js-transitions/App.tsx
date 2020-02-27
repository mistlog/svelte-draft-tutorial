import { ConfigTransition } from "svelte-types";
import { typewriter } from "./transition";

export default function App()
{
    let visible = false;

    <label>
        <input type="checkbox" bindChecked={visible} />
        visible
    </label>;

    <if condition={visible}>
        <p in={ConfigTransition(typewriter)}>
            The quick brown fox jumps over the lazy dog
        </p>
    </if>

}