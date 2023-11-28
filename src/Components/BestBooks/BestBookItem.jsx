export const BestBookItem = ({ bookImg, bookName, bookPrice }) => {
    return (
        <li className="bg-secondary-3 shrink-0 cursor-pointer" id="book-item">

            <div className="relative">
                <img src={bookImg} alt="" className="h-full w-full" />

                <div id="quick-view" className="absolute bottom-0 w-full py-5 text-center text-black font-thin bg-white-rgba text-sm">
                    <p>Quick View</p>
                </div>
            </div>

            <div className="w-full bg-secondary-1 text-primary text-center pt-3 flex flex-col gap-2">
                <h1>{bookName}</h1>
                <h1>{bookPrice}</h1>
                
                <div className="border border-white bg-secondary-1 p-1 text-primary text-center cursor-pointer text-sm font-light" id="add-cart">
                    <h1>Add to Cart</h1>
                </div>
            </div>

           

        </li>
    )
}