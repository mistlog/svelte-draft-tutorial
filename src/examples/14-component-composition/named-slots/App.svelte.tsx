import ContactCard from './ContactCard.svelte';

export default function App()
{
    <ContactCard>
        <span slot="name">
            P. Sherman
        </span>
        <span slot="address">
            42 Wallaby Way<br />
            Sydney
        </span>
    </ContactCard>
}