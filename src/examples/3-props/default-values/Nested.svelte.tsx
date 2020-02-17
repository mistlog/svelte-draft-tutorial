export interface INestedProps
{
    answer?: string | number;
}

export default function Nested(props: INestedProps)
{
    const { answer = "a mystery"} = props;

    <p>The answer is {answer}</p>
}