

export const NavRight = (props) => {
    return (
        <div id="nav-right">
            <ul className="w-full flex text-lg gap-4 font-light items-center justify-center">
                {props.children}
            </ul>
        </div>
    )
}

