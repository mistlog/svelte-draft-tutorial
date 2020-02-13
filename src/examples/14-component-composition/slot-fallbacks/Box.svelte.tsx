export interface IBoxProps
{

}

export default function Box(props: IBoxProps)
{
    <div class="box">
        <slot>
            <em>no content was provided</em>
        </slot>
    </div>
}