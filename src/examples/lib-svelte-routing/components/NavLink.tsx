import { Link } from "svelte-routing";

export default function NavLink(props: { to: string })
{
    const { to } = props;

    function getProps({ location, href, isPartiallyCurrent, isCurrent })
    {
        const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

        // The object returned here is spread on the anchor element's attributes
        if (isActive)
        {
            return { class: "active" };
        }
        return {};
    }

    <Link to={to} getProps={getProps}>
        <slot />
    </Link>

}