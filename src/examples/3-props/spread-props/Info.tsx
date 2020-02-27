export interface IInfoProps
{
    name: string;
    version: number;
    speed: string;
    website: string;
}

export default function Info(props: IInfoProps)
{
    const { name, version, speed, website } = props;

    <p>
        The <code>{name}</code> package is {speed} fast.
        Download version {version} from <a href="https://www.npmjs.com/package/{name}">npm</a>
        and <a href={website}>learn more here</a>
    </p>
}