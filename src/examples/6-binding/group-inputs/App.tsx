export default function App()
{
    let scoops = 1;
    let flavours = ['Mint choc chip'];

    let menu = [
        'Cookies and cream',
        'Mint choc chip',
        'Raspberry ripple'
    ];

    function join(flavours)
    {
        if (flavours.length === 1) return flavours[0];
        return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
    }

    <h2>Size</h2>;

    <label>
        <input type="radio" bindGroup={scoops} value={1} />
        One scoop
    </label>;

    <label>
        <input type="radio" bindGroup={scoops} value={2} />
        Two scoops
    </label>;

    <label>
        <input type="radio" bindGroup={scoops} value={3} />
        Three scoops
    </label>;

    <h2>Flavours</h2>;

    <each from={menu}>
        {(flavour: string) =>(
            <label>
                <input type="checkbox" bindGroup={flavours} value={flavour}/>
                {flavour}
            </label>
        )}
    </each>;

    <if condition={flavours.length===0}>
        <p>Please select at least one flavour</p>
        <else condition = {flavours.length > scoops}>
        <p>Can't order more flavours than scoops!</p>
            <else>
                <p>You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'} of {join(flavours)}</p>
            </else>
        </else>
    </if>
}