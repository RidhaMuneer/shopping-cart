import { Link } from 'react-router-dom';
import screenWidth from '../utils/Utils.jsx';
import './hero-background.css';
import heroImage from '/hero.png';

function HeroSection(){

    let width = screenWidth();

    if(width <= 768){
        return (
        <div className='flex flex-col items-center justify-evenly gap-20 py-24 custom-bg'>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl'>Your Path To Everything</h1>
                    <p className='text-lg'>Enjoy an easy shopping experience</p>
                </div>
                <div>
                    <button className='bg-yellow-600 bg-opacity-75 px-6 py-2 rounded'>
                        <Link to='/shop'>SHOP NOW</Link>
                    </button>
                </div>
            </div>
            <div>
                <img src={heroImage} alt="" className='h-72'/>
            </div>
        </div>
        )
    }

    return (
        <div className='flex items-center justify-evenly py-24 px-10 custom-bg'>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl'>Your Path To Everything</h1>
                    <p className='text-lg'>Enjoy an easy shopping experience</p>
                </div>
                <div>
                    <button className='bg-yellow-600 bg-opacity-75 px-6 py-2 rounded'>
                        <Link to='/shop'>SHOP NOW</Link>
                    </button>
                </div>
            </div>
            <div>
                <img src={heroImage} alt="" className='h-96'/>
            </div>
        </div>
    )
}

export default HeroSection;