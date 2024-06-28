import NavBar from '../nav-bar/nav-bar.jsx';
import './background.css';
import Icon from '@mdi/react';
import { mdiStoreCheckOutline } from '@mdi/js';
import { mdiGlobeModel } from '@mdi/js';

function AboutUs() {
    return (
        <div>
            <NavBar/>
            <div className='custom py-10 px-10'>
                <div className='container mx-auto flex justify-center'>
                    <div className='bg-white p-8 rounded-lg shadow-lg flex flex-col gap-5 items-center justify-between md:flex-row'>
                        <div className='md:w-1/2 md:pr-8 flex flex-col items-start justify-center'>
                            <h1 className='text-2xl font-semibold mb-4'>About Us</h1>
                            <p className='text-gray-700 mb-4'>
                                Welcome to our online store! At our store, we believe in making shopping easy and convenient for you.
                                We offer a wide range of products to cater to all your needs. Whether you're looking for the latest
                                fashion trends, gadgets, home essentials, or more, we've got you covered.
                            </p>
                            <p className='text-gray-700 mb-4'>
                                Our mission is to provide high-quality products at affordable prices. We strive to create a seamless
                                shopping experience that you'll love. Our dedicated team is here to assist you every step of the way.
                            </p>
                        </div>
                        <div className='md:w-1/2 flex items-center justify-center'>
                            <Icon path={mdiStoreCheckOutline} title="User Profile" size={8}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-8'>
                <h2 className='text-xl font-semibold mb-4'>What Our Clients Say</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='bg-gray-100 p-4 rounded-lg shadow'>
                        <p className='text-gray-700 mb-2'>
                            "I love shopping here! The variety of products is amazing, and the prices are unbeatable."
                        </p>
                        <p className='text-gray-500'>- Jane Doe</p>
                    </div>
                    <div className='bg-gray-100 p-4 rounded-lg shadow'>
                        <p className='text-gray-700 mb-2'>
                            "The quality of their products is top-notch. I've never been disappointed with my purchases."
                        </p>
                        <p className='text-gray-500'>- John Smith</p>
                    </div>
                    <div className='bg-gray-100 p-4 rounded-lg shadow'>
                        <p className='text-gray-700 mb-2'>
                            "This store is a game-changer. Shopping for everything I need in one place has never been easier."
                        </p>
                        <p className='text-gray-500'>- Emily Johnson</p>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 py-10'>
                <div className='container mx-auto flex justify-center md:w-1/2'>
                    <div className='bg-white p-8 rounded-lg shadow-lg md:flex'>
                        <div className='md:pr-8 flex flex-col items-center justify-center'>
                            <div className='flex justify-baseline gap-2'>
                                <Icon path={mdiGlobeModel} size={1}></Icon>
                                <h2 className='text-xl font-semibold mb-4'>Global Sourcing</h2>
                            </div>
                            <p className='text-gray-700 mb-4'>
                                We take pride in sourcing our products from all over the world. Our team scours the globe to bring you
                                unique and high-quality items that you won't find anywhere else. From the bustling markets of Asia to
                                the artisan workshops of Europe, we curate a diverse selection to cater to your preferences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-8'>
                <h2 className='text-xl font-semibold mb-4'>Work with Us</h2>
                <p className='text-gray-700 mb-4'>
                    Passionate about the world of e-commerce? Join our team and work from the comfort of your home.
                    We offer remote work opportunities in various roles, including customer support, marketing, and more.
                    Be part of our mission to make shopping easy and enjoyable for everyone.
                </p>
                <button className='bg-yellow-600 bg-opacity-75 hover:bg-yellow-500 bg-opacity-75 text-white font-semibold py-2 px-4 rounded'>
                    Explore Careers
                </button>
            </div>
        </div>
    );
}

export default AboutUs;
