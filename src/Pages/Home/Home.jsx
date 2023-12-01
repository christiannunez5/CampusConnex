import {Navbar} from '../../Components/Navbar/Navbar'
import {Message} from '../../Components/Message/Message'
import {ViewCart} from '../../Components/ViewCart/ViewCart'
import { ViewProduct } from '../../Components/ViewProduct/ViewProduct'
import { useEffect, useState } from 'react'
import { BooksCarousel } from '../../Components/BooksCarousel/BooksCarousel'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Home = () => {

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

    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button onClick={() => onClick()} />;
    };

   

    useEffect(() => {
        fetch("https://api.itbook.store/1.0/search/bestseller")
        .then(response => response.json())
        .then(data => setBestSeller(data.books))

        fetch("https://api.itbook.store/1.0/search/recommended")
        .then(response => response.json())
        .then(data => setRecommendedBooks(data.books))
    },[])


    
    return (
        <div id="home-container" className='font-secondary w-full relative text-secondary-1 z-20'>
             <ViewProduct 
             handleQuickView={handleQuickView}
             bookName={quickView.title}
             bookImg={quickView.image}
             bookPrice={quickView.price}
             ></ViewProduct>
            <ViewCart></ViewCart>
            <Message></Message>
            <Navbar></Navbar>   

            
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
                    handleQuickView={handleQuickView}>

                    </BooksCarousel>

                </div>
                

                <div className='bg-secondary-1 text-white w-full pb-8
                md:-translate-y-16'>
                    
                    <hr className='mx-auto w-20 text-white'/>
                    <div className='text-center py-5'>
                        <h1 className='text-xl sm:text-2xl font-light'>This Month's</h1>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold font-primary'>RECOMMENDED BOOKS</h1>
                    </div>

                    <hr className='mx-auto w-20 text-white mb-16'/>
                    
                    
                     <BooksCarousel 
                     books={recommendedBooks}
                     putMargin={false}
                     handleQuickView={handleQuickView}>     
                        
                    </BooksCarousel>


                </div>
                
            
            </div>

        </div>
    )
}

