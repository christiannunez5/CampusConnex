import {Navbar} from '../../Components/Navbar/Navbar'
import {Message} from '../../Components/Message/Message'
import {BookItem} from '../../Components/BestBooks/BookItem'
import {RightArrow} from '../../Components/Arrows/RightArrow'
import {LeftArrow} from '../../Components/Arrows/LeftArrow'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import {ViewCart} from '../../Components/ViewCart/ViewCart'
import { ViewProduct } from '../../Components/ViewProduct/ViewProduct'
import { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Home = () => {

    const [quickView, setQuickView] = useState("");

    const handleQuickView = (data) => {
        const viewProductContainer = document.querySelector("#view-product-container");
        viewProductContainer.classList.toggle("view-product-container-extended")

        const productItem = document.querySelector("#product-item");
        productItem.classList.toggle("product-item-extended")
        setQuickView(data)
    }
    console.log(quickView)
    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button onClick={() => onClick()} />;
      };

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
    
        tablet: {
          breakpoint: { max: 1024, min: 700 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 2
        }
      };
    

    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        fetch("https://api.itbook.store/1.0/search/bestseller")
        .then(response => response.json())
        .then(data => setBestSeller(data.books))
    },[])

    console.log(quickView)
    
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
                     sm:text-6xl md:text-7xl xl:text-9xl xl:ml-16'>
                        <h1 className=''>A SOFA,</h1>
                        <h1 className=''>A GOOD BOOK, </h1>
                        <h1 className=''>AND YOU.</h1>
                    </div>

                
                </div>
                   
                <div id="best-sellers" className='w-full mt-5 font-secondary relative
                md:mt-20'>
                    <div className='text-center flex flex-col gap-2'>
                        <h1 className='text-xl sm:text-2xl font-light'>BINK. Publishers</h1>
                        <h1 className='text-3xl sm:text-5xl font-extrabold font-primary'>BESTSELLERS</h1>
                    </div>
                </div>

                <div id='recommended-books' className='w-full border mt-5 relative bg-secondary-1 h-auto
                md:mt-36'>
                    
                    <div className='w-11/12 m-auto relative 
                    md:-translate-y-28'>
                        <Carousel 
                            responsive={responsive}
                            // arrows={false} 
                            // customButtonGroup={<ButtonGroup />}
                            
                            customRightArrow={<RightArrow></RightArrow>}
                            customLeftArrow={<LeftArrow></LeftArrow>}
                            containerClass='margin'
                            infinite={true}
                            
                        >

                            {bestSeller.map((data, index) => {
                                return (
                                    <BookItem key={index}
                                        bookImg={data.image}
                                        bookName={data.title}
                                        bookPrice={data.price}
                                        handleQuickView={() => handleQuickView(data)}
                                    ></BookItem>
                                )
                            })}
                              
                        </Carousel>
                    </div>
                   
                </div>

                <h1>hello</h1>

            </div>
        </div>
    )
}

export const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group"> // remember to give it position:absolute
        <FaChevronLeft className={currentSlide === 0 ? 'disable' : ' absolute top-0 left-0'} onClick={() => previous()} 
            />
        <FaChevronRight onClick={() => next()} className='absolute top-24 bg-black right-0 text-black text-2xl '/>
      </div>
    );
  };