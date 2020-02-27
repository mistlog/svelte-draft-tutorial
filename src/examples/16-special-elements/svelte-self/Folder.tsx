import File, { IFile } from './File';

export interface IFolderOrFile extends IFile
{
    files?: Array<IFolderOrFile>;
}

export interface IFolderProps
{
    expanded: boolean;
    name: string;
    files: Array<IFolderOrFile>;
}

export default function Folder(props: IFolderProps)
{
    let { expanded = false, name, files } = props;

    function toggle()
    {
        expanded = !expanded;
    }

    <span class={expanded ? "expanded" : ""} onClick={toggle}>{name}</span>;

    <if condition={expanded}>
        <ul>
            <each from={files}>
                {(file: IFolderOrFile) => (
                    <li>
                        <if condition={file.type === "folder"}>
                            <svelte-self {...file} />
                            <else>
                                <File {...file} />
                            </else>
                        </if>
                    </li>
                )}
            </each>
        </ul>
    </if>
}