export interface IAppProps
{
    answer: number;
}

export default function App(props: IAppProps)
{
    const { answer } = props;
    
    <p>The answer is {answer}</p>
}