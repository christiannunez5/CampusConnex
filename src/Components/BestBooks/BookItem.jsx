
export const BookItem = ({ bookImg, bookName, bookPrice, handleQuickView, addCart}) => {
    return (
        <div className="w-full bg-secondary-3 cursor-pointer relative mt-7 h-auto" id="book-item">

            <div className="relative h-full">
                <img src={bookImg} alt="" className="h-full w-full" />

                <div id="quick-view" className="absolute bottom-0 w-full py-5 text-center text-black font-light bg-white-rgba text-base" onClick={handleQuickView}>
                    <p>Quick View</p>
                </div>
            </div>

            <div className="w-full bg-secondary-1 text-primary text-center pt-3 h-full flex flex-col gap-3 ">
               
                <div className="font-light">
                    <h1 className="">{bookPrice}</h1>
                    <p>{bookName}</p>
                </div>
                
                <div className="border border-white bg-secondary-1 p-1 text-primary text-center cursor-pointer text-base" 
                id="add-cart" onClick={addCart}>
                    <h1>Add to Cart</h1>
                </div>

            </div>

        </div>
    )
}