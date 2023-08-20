import screenWidth from '../utils/Utils.jsx';
import heroImage from './hero.png';

function HeroSection(){

    let width = screenWidth();

    if(width <= 768){
        return (
            <div className='flex flex-col items-center justify-evenly gap-20 py-24 bg-gray-200'>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl'>Your Path To Beauty</h1>
                    <p className='text-lg'>Enjoy an easy shopping experience</p>
                </div>
                <div>
                    <button className='bg-purple-500 bg-opacity-75 px-6 py-2 rounded'>SHOP NOW</button>
                </div>
            </div>
            <div>
                <img src={heroImage} alt="" className='phone:w-64 phone:h-64'/>
            </div>
        </div>
        )
    }

    return (
        <div className='flex items-center justify-evenly py-24 bg-gray-200'>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl'>Your Path To Beauty</h1>
                    <p className='text-lg'>Enjoy an easy shopping experience</p>
                </div>
                <div>
                    <button className='bg-purple-500 bg-opacity-75 px-6 py-2 rounded'>SHOP NOW</button>
                </div>
            </div>
            <div>
                <img src={heroImage} alt="" className='w-96 h-96'/>
            </div>
        </div>
    )
}

export default HeroSection;