export default function App()
{
    let x = 7;

    <if condition={x > 10}>
        <p>{x} is greater than 10</p>
        <else condition={5 > x}>
            <p>{x} is less than 5</p>
            <else>
                <p>{x} is between 5 and 10</p>
            </else>
        </else>
    </if>
}