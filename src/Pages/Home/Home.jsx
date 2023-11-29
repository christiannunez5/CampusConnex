import {Navbar} from '../../Components/Navbar/Navbar'
import {Message} from '../../Components/Message/Message'
import {BookItem} from '../../Components/BestBooks/BookItem'
import {RightArrow} from '../../Components/Arrows/RightArrow'

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";


import { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const Home = () => {
    
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
          items: 3
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

    
    return (
        <div id="home-container" className='font-primary w-full relative z-0 text-secondary-1'>
            <Message></Message>
            <Navbar></Navbar>   

            <div className="main w-screen sm:w-95 md:w-11/12 m-auto">

                <div id="front-page" className='relative flex flex-col justify-center m-auto p-4 w-full'>

                    <div id='front-page-content font-primary' className='w-2/3 text-secondary-1 font-bold text-4xl  border border-black ml-5
                     sm:text-6xl md:text-7xl xl:text-9xl xl:ml-16'>
                        <h1 className=''>A SOFA,</h1>
                        <h1 className=''>A GOOD BOOK, </h1>
                        <h1 className=''>AND YOU.</h1>
                    </div>

                
                </div>
                   
                <div id="best-sellers" className='border border-black w-full mt-5
                md:mt-28'>
                    <div className='text-center flex flex-col gap-2'>
                        <h1 className='text-xl sm:text-2xl font-light'>BINK. Publishers</h1>
                        <h1 className='text-3xl sm:text-5xl font-extrabold'>BESTSELLERS</h1>
                    </div>
                </div>

                <div id='recommended-books' className='w-full border mt-5 relative bg-secondary-1 h-96
                md:mt-36'>
                    
                    <div className='w-11/12 m-auto relative border border-cyan-700 px-10
                    md:-translate-y-28'>
                        <Carousel 
                            responsive={responsive}
                            // arrows={false} 
                            // customButtonGroup={<ButtonGroup />}
                            itemClass='margin'
                            customRightArrow={<RightArrow></RightArrow>}
                            infinite={true}
                        >

                            {bestSeller.map((data, key) => {
                                return (
                                    <BookItem
                                        bookImg={data.image}
                                        bookName={data.title}
                                        bookPrice={data.price}
                                    ></BookItem>
                                )
                            })}
                            
                            
                        </Carousel>
                    </div>
                   
                </div>

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