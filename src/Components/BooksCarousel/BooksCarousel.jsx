
import { BookItem } from "../BestBooks/BookItem"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {RightArrow} from '../../Components/Arrows/RightArrow'
import {LeftArrow} from '../../Components/Arrows/LeftArrow'

export const BooksCarousel = ({books, handleQuickView, putTranslate, addCart}) => {


    const deviceType = () => {
        const width = window.innerWidth;
        if (width < 700) {
          return true;
        }
        else 
        {
          return false;
        }
    };

    const isTablet = deviceType();

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
          breakpoint: { max: 699, min: 0 },
          items: 2
        }
    };


    return (

        <div className='w-11/12 mx-auto trans' style={putTranslate && !isTablet ? {transform : 'translateY(-112px)'} : {}}>
            
            <Carousel 
                responsive={responsive}
                customRightArrow={<RightArrow></RightArrow>}
                customLeftArrow={<LeftArrow></LeftArrow>}
                containerClass='margin'
                infinite={true}
                // autoPlaySpeed={2500}
                // autoPlay={true}
                removeArrowOnDeviceType={["mobile"]}>

                {books.map((data, index) => {
                    return (
                        <BookItem key={index}
                            bookImg={data.image}
                            bookName={data.title}
                            bookPrice={data.price}
                            handleQuickView={() => handleQuickView(data)}
                            addCart={(e) => addCart(e, data)}
                        ></BookItem>
                    )
                })}
                              
            </Carousel>

        </div>
    )
}