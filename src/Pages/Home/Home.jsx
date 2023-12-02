import {Navbar} from '../../Components/Navbar/Navbar'
import {Message} from '../../Components/Message/Message'
import {ViewCart} from '../../Components/Cart/ViewCart'
import { ViewProduct } from '../../Components/ViewProduct/ViewProduct'
import { useEffect, useRef, useState } from 'react'
import { BooksCarousel } from '../../Components/BooksCarousel/BooksCarousel'
import { ShowMessage } from '../../Components/Message/ShowMessage'


export const Home = () => {
    
    const [tempCart, setTempCart] = useState([]);
    const[cart, setCart] = useState([]);
    const [myId, setMyId] = useState(0);
    const [indexHolder, setIndexHolder] = useState(0)
    const [quickView, setQuickView] = useState("");
    const [bestSeller, setBestSeller] = useState([]);
    const [recommendedBooks, setRecommendedBooks] = useState([]);

    const handleQuickView = (data) => {

        const viewProductContainer = document.querySelector("#view-product-container");
        viewProductContainer.classList.toggle("view-product-container-extended")

        const productItem = document.querySelector("#product-item");
        productItem.classList.toggle("product-item-extended")
        setQuickView(data)
    }

    const handleAddCart = (e, data) => {

        e.target.innerHTML = "Added"
        setTimeout(() => {
            e.target.innerHTML = "Add to Cart"
        }, 500)

        const dataItem = {
            price: data.price,
            image: data.image,
            title: data.title,
            id: myId,
            quantity: 1,
        }

        setMyId(prev => prev + 1)

        const duplicate = cart.find((data) => {
            return data.title === dataItem.title
        })

        console.log(duplicate);
        
        if (duplicate)
        {
            cart.map((data) => {
                if (data.title === dataItem.title)
                    data.quantity += 1
            })
        }

        else
            setCart([...cart, dataItem])

        const cartContainer = document.querySelector("#view-cart-container");
        const viewCart = document.querySelector("#view-cart")
        cartContainer.classList.toggle("cart-container-extended");
        viewCart.classList.toggle("slide-left")
    }

    const handleCallback = (e) => {

    }

    const deleteCartItem = (e, index) => {

        const updatedCart = cart.filter((data, cartIndex) => {
            return cartIndex !== index;
        })

        const cartItems = document.querySelectorAll("#cart-item");

        console.log(cartItems[index])
        cartItems[index].classList.add("cart-item-extended")

        if (index === cart.length - 1)
        {
            cartItems[index].classList.add("cart-item-extended")
            setTimeout(() => {
                setCart(updatedCart)
            }, 500)
        }

        else {
            
            setTimeout(() => {
                cartItems[index].classList.remove("cart-item-extended")
                setCart(updatedCart)
            }, 500)
            
        }

    }


    const handleQuantity = (e, index) => {
        const updatedCart = [...cart];

        if (e.target.innerHTML === "+")
            updatedCart[index].quantity += 1
        else
            updatedCart[index].quantity -= 1
        
        setCart(updatedCart);
    }
    
    const handleMessage = () => {
        const showMessageContainer = document.querySelector("#show-message")
        showMessageContainer.classList.toggle("show-message-extended")
    }

    
    useEffect(() => {
        fetch("https://api.itbook.store/1.0/search/bestseller")
        .then(response => response.json())
        .then(data => setBestSeller(data.books))

        fetch("https://api.itbook.store/1.0/search/ai")
        .then(response => response.json())
        .then(data => setRecommendedBooks(data.books))
        
    },[])

    return (
        <div id="home-container" className='font-secondary w-full relative text-secondary-1 z-20'>
            <ShowMessage
            handleMessage={handleMessage}
            ></ShowMessage>
            
             <ViewProduct 
             handleQuickView={handleQuickView}
             bookName={quickView.title}
             bookImg={quickView.image}
             bookPrice={quickView.price}
             addCart={(e) => handleAddCart(e, quickView)}
             ></ViewProduct>
            <ViewCart
            cartItems={cart}
            handleQuantity={handleQuantity}
            deleteCartItem={deleteCartItem}></ViewCart>
            <Message handleMessage={handleMessage}></Message>
            <Navbar cartNumber={cart.length}></Navbar>   

            <div className="main w-screen sm:w-95 md:w-11/12 m-auto font-secondary">

                <div id="front-page" className='relative flex flex-col justify-center m-auto p-4 w-full font-primary'>

                    <div id='front-page-content font-primary' className='w-2/3 text-secondary-1 font-bold text-4xl  ml-5
                     sm:text-6xl md:text-7xl xl:text-8xl xl:ml-16'>
                        <h1 className=''>A SOFA,</h1>
                        <h1 className=''>A GOOD BOOK, </h1>
                        <h1 className=''>AND YOU.</h1>
                    </div>
                
                </div>
                   
                <div className='w-full font-secondary relative my-10
                md:mt-20'>
                    
                    <div className='text-center flex flex-col gap-2'>
                        <h1 className='text-xl sm:text-2xl font-light'>BINK. Publishers</h1>
                        <h1 className='text-3xl sm:text-5xl font-extrabold font-primary'>BESTSELLERS</h1>
                    </div>

                </div>

                <div id='best-seller' className='w-full relative bg-secondary-1
                md:mt-36'>
                    
                    <BooksCarousel 
                    putTranslate={true}
                    books={bestSeller}
                    handleQuickView={handleQuickView}
                    addCart={handleAddCart}
                    >
                    </BooksCarousel>

                </div>
                
                <div className='bg-secondary-1 text-white w-full
                md:-translate-y-16 md:pb-8'>
                    
                    <hr className='mx-auto w-20 text-white'/>
                    <div className='text-center py-5'>
                        <h1 className='text-xl sm:text-2xl font-light'>This Month's</h1>
                        <h1 className='text-3xl sm:text-3xl md:text-5xl font-extrabold font-primary'>RECOMMENDED BOOKS</h1>
                    </div>

                    <hr className='mx-auto w-20 text-white mb-16'/>
                    
                     <BooksCarousel 
                     books={recommendedBooks}
                     putMargin={false}
                     handleQuickView={handleQuickView}
                     addCart={handleAddCart}>     
                    
                    </BooksCarousel>

                </div>

                <div className='w-full  bg-secondary-1 pt-2 pb-12
                md:-translate-y-16'>
                    <hr className='w-8 mx-auto mb-10'/>
                    <div className='w-95 mx-auto font-primary text-center text-primary font-bold text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                    xl:text-7xl'>
                        <h1 className=''>THERES NO</h1>
                        <h1>SUCH THING AS TOO </h1>
                        <h1>MANY BOOKS</h1>
                    </div>

                    <div className='border-2 border-white w-40 h-14 text-white grid place-content-center mx-auto mt-8 cursor-pointer font-light hover:bg-primary hover:text-secondary-1' id='our-story'>
                        <h1>Read our Story</h1>
                    </div>

                    <hr className='w-8 mx-auto mt-10'/>
                </div>


                  
            </div>

        </div>
    )
}

