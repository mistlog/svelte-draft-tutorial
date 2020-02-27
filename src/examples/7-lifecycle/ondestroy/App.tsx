import { onInterval } from './utils';

export default function App()
{
    let seconds = 0;
    
    onInterval(() => seconds += 1, 1000);
    <p>
        The page has been open for
        {seconds} {seconds === 1 ? 'second' : 'seconds'}
    </p>
}