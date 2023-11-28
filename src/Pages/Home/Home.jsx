import {Navbar} from '../../Components/Navbar/Navbar'
import {Message} from '../../Components/Message/Message'
import {BestBooksWrapper} from '../../Components/BestBooks/BestBooksWrapper'
import {BestBookItem} from '../../Components/BestBooks/BestBookItem'
export const Home = () => {
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

                <div id='recommended-books' className='w-full border mt-5 relative bg-secondary-1
                md:mt-36'>
                    
                    <BestBooksWrapper>
                       <BestBookItem
                            bookImg="https://itbook.store/img/books/9780596529185.png"
                            bookName="Tes1t"
                            bookPrice="Hello1"
                       ></BestBookItem>

                        <BestBookItem
                            bookImg="https://itbook.store/img/books/9780596529185.png"
                            bookName="Test2"
                            bookPrice="Hello"
                        ></BestBookItem>

                        <BestBookItem
                            bookImg="https://itbook.store/img/books/9780596529185.png"
                            bookName="Test2"
                            bookPrice="Hello"
                        ></BestBookItem>

                        <BestBookItem
                            bookImg="https://itbook.store/img/books/9780596529185.png"
                            bookName="Test2"
                            bookPrice="Hello"
                        ></BestBookItem>

                        <BestBookItem
                            bookImg="https://itbook.store/img/books/9780596529185.png"
                            bookName="Test2"
                            bookPrice="Hello"
                        ></BestBookItem>

                        <BestBookItem
                            bookImg="https://itbook.store/img/books/9780596529185.png"
                            bookName="Test2"
                            bookPrice="Hello"
                        ></BestBookItem>

                        <BestBookItem
                            bookImg="https://itbook.store/img/books/9780596529185.png"
                            bookName="Test2"
                            bookPrice="Hello"
                        ></BestBookItem>

                    </BestBooksWrapper>
                   
                </div>

                <div>
                    <h1>hello</h1>
                </div>

                <div>
                    <h1>hello</h1>
                </div>

                <div>
                    <h1>hello</h1>
                </div>

                <div>
                    <h1>hello</h1>
                </div>

                <div>
                    <h1>hello</h1>
                </div>

                <div>
                    <h1>hello</h1>
                </div>

            </div>
        </div>
    )
}