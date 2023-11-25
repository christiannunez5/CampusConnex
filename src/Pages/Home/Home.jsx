import {Navbar} from '../../Components/Navbar/Navbar'
import {Message} from '../../Components/Message/Message'

export const Home = () => {
    return (
        <div id="home-container" className='font-primary w-full relative z-0'>
            <Message></Message>
            <Navbar></Navbar>   

            <div className="main w-screen sm:w-95 md:w-11/12 m-auto">

                <div id="front-page" className='relative flex flex-col justify-center m-auto p-4 w-full'>

                    <div id='front-page-content font-primary' className='w-1/2 text-secondary-1 font-bold text-4xl
                     sm:text-6xl md:text-7xl xl:text-9xl '>
                        <h1 className=''>A SOFA,</h1>
                        <h1 className=''>A GOOD BOOK, </h1>
                        <h1 className=''>AND YOU.</h1>
                    </div>

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