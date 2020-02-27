export interface IBoxProps
{

}

export default function Box(props: IBoxProps)
{
    <div class="box">
        <slot></slot>
    </div>
}