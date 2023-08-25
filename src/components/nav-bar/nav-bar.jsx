import screenWidth from '../utils/Utils.jsx';
import ToggleMenu from './ToggleMenu.jsx';
import ShoppingCart from '../shop/ShoppingCart.jsx';
import React, { useState, useContext } from 'react';
import { PriceContext } from '../context/PriceProvider.jsx';

import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import { mdiCartOutline } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { mdiStorefront } from '@mdi/js';

import { Link } from "react-router-dom";

function NavBar(){

    const { price } = useContext(PriceContext);

    const [cart, setCartOpen] = useState(false);

    const goToCart = () => {
        setCartOpen(!cart);
    }

    let width = screenWidth();

    if(width <= 768){
        return (
            <div className="flex flex-col items-center justify-around mt-3 mb-2 w-full">
                <div className="flex space-x-2 item-center justify-center w-1/5 my-2">
                    <div>
                        <Icon path={mdiStorefront} size={1} />
                    </div>
                    <h1>Dreamweaver</h1>
                </div>
                <div className="flex space-x-2 items-center justify-center w-1/5">
                    <div>
                        <button>
                            <Icon path={mdiMagnify} size={1} />
                        </button>
                    </div>
                    <div>
                        <button>
                            <Icon path={mdiAccount} size={1} />
                        </button>
                    </div>
                    <div>
                        <button onClick={goToCart}>
                            <Icon path={mdiCartOutline} size={1} />
                        </button>
                    </div>
                    <p className='mb-1'>${price}</p>
                    <ToggleMenu></ToggleMenu>
                    {cart && (
                        <ShoppingCart></ShoppingCart>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-around my-8 w-full">
            <div className="flex space-x-2 item-center justify-center w-1/5">
                <div>
                    <Icon path={mdiStorefront} size={1} />
                </div>
                <h1>Dreamweaver</h1>
            </div>
            <div className="flex desktop:space-x-8 laptop:space-x-6 tablet:space-x-4 items-center">
                <Link to='/'>HOME</Link>
                <Link to="/shop">SHOP</Link>
                <Link to='/aboutus'>ABOUT US</Link>
            </div>
            <div className="flex space-x-2 items-center justify-center w-1/5">
                <div>
                    <button>
                        <Icon path={mdiMagnify} size={1} />
                    </button>
                </div>
                <div>
                    <button>
                        <Icon path={mdiAccount} size={1} />
                    </button>
                </div>
                <div>
                    <button onClick={goToCart}>
                        <Icon path={mdiCartOutline} size={1} />
                    </button>
                </div>
                <p className='mb-1'>${price}</p>
                {cart && (
                    <ShoppingCart></ShoppingCart>
                )}
            </div>
        </div>
    );
}

export default NavBar;