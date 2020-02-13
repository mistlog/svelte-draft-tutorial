export interface IAppProps
{
    answer?: string | number;
}

export default function App(props: IAppProps)
{
    const { answer = "a mystery"} = props;

    <p>The answer is {answer}</p>
}