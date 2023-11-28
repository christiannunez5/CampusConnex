
export const BestBooksWrapper = (props) => {
    return (
        <div id="best-books-wrapper" className="m-auto flex justify-center 
        " style={{transform: 'translateY(-33%)'}}>

            <ul className="flex items-center overflow-hidden gap-5 z-40">
                {props.children}
            </ul>

        </div>
            
    )
}