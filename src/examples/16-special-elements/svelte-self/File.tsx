export interface IFile
{
    type: "file" | "folder";
    name: string;
}

export default function File(props: IFile)
{
    const { name, type } = props;

    //@ts-ignore
    <TrackChange />;

    <span style={`background-image: url(https://svelte.dev/tutorial/icons/${type}.svg)`}>{name}</span>
}

function TrackChange(name: string, type: string)
{
    "use watch";
    type = name.slice(name.lastIndexOf('.') + 1);
}