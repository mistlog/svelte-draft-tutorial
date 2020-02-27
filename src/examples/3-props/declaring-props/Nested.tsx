export interface INestedProps
{
    answer: number;
}

export default function Nested(props: INestedProps)
{
    const { answer } = props;
    
    <p>The answer is {answer}</p>
}