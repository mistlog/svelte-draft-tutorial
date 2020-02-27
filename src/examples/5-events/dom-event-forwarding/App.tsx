import FancyButton from './FancyButton';

export default function App()
{

    function handleClick()
    {
        alert('clicked');
    }; // ; is necessary here

    <FancyButton onClick={handleClick} />
}