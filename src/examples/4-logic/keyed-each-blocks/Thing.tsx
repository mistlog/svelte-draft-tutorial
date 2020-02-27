export interface IThingProps
{
    current: string;
}

export default function App(props: IThingProps)
{
    // `current` is updated whenever the prop value changes...
    const { current } = props;

    // ...but `initial` is fixed upon initialisation
    const initial = current;

    <p>
        <span style={`background-color: ${initial}`}>initial</span>
        <span style={`background-color: ${current}`}>current</span>
    </p>;

}