export interface IQuestion
{
    id: number;
    text: string;
}

export default function App()
{
    let questions: Array<IQuestion> = [
        { id: 1, text: `Where did you go to school?` },
        { id: 2, text: `What is your mother's name?` },
        { id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
    ];

    let selected: IQuestion;

    let answer = '';

    function handleSubmit(event: Svelte.FormEvent<HTMLFormElement>)
    {
        // event.preventDefault();
        alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
    }


    <h2>Insecurity questions</h2>;

    <form onSubmit={handleSubmit}>
        <select bindValue={selected} onChange={() => answer = ''}>
            <each from={questions}>
                {(question: IQuestion) => (
                    <option value={question}>
                        {question.text}
                    </option>
                )}
            </each>
        </select>

        <input bindValue={answer} />

        <button disabled={!answer} type="submit">
            Submit
	    </button>
    </form>;

    <p>selected question {selected ? selected.id : '[waiting...]'}</p>
}