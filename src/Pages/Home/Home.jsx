import {Navbar} from '../../Components/Navbar/Navbar'


export const Home = () => {
    return (
        <div id="home-container" className='font-primary w-full'>
            <Navbar></Navbar>

            <div className="main w-screen">

                <div id="front-page" className='relative flex flex-col justify-center m-auto p-4 sm:w-95'>

                    <div id='front-page-content font-primary' className='w-1/2 text-secondary-1 font-bold text-4xl
                     sm:text-6xl md:text-7xl xl:text-9xl '>
                        <h1 className=''>A SOFA,</h1>
                        <h1 className=''>A GOOD BOOK, </h1>
                        <h1 className=''>AND YOU.</h1>
                    </div>

    
                </div>

            </div>
        </div>
    )
}