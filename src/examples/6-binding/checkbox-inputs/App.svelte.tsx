export default function App()
{
    let yes = false;

    <label>
        <input type="checkbox" bindChecked={yes} />
        Yes! Send me regular email spam
    </label>;

    <if condition={yes}>
        <p>Thank you. We will bombard your inbox and sell your personal details.</p>
        <else>
            <p>You must opt in to continue. If you're not paying, you're the product.</p>
        </else>
    </if>;

    <button disabled={!yes}>
        Subscribe
    </button>
}