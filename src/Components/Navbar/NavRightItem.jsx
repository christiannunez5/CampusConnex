

export const NavRightItem = (props) => {
    return (
        <li className="hidden sm:flex items-center justify-center cursor-pointer relative hover:brightness-150 text-secondary-1">
            {props.children}
            <h1 className="capitalize">{props.name}</h1>
        </li>
    )
}