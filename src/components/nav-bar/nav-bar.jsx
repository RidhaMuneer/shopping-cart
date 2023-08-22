import screenWidth from '../utils/Utils.jsx';
import ToggleMenu from './ToggleMenu.jsx';

import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import { mdiCartOutline } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { mdiStorefront } from '@mdi/js';

import { Link } from "react-router-dom";

function NavBar(){

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
                        <Icon path={mdiMagnify} size={1} />
                    </div>
                    <div>
                        <Icon path={mdiAccount} size={1} />
                    </div>
                    <div>
                        <Icon path={mdiCartOutline} size={1} />
                    </div>
                    <p>$0.00</p>
                    <ToggleMenu></ToggleMenu>
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
                <a href="">ABOUT US</a>
                <Link to="shop">SHOP</Link>
                <a href="">COLLECTION</a>
            </div>
            <div className="flex space-x-2 items-center justify-center w-1/5">
                <div>
                    <Icon path={mdiMagnify} size={1} />
                </div>
                <div>
                    <Icon path={mdiAccount} size={1} />
                </div>
                <div>
                    <Icon path={mdiCartOutline} size={1} />
                </div>
                <p>$0.00</p>
            </div>
        </div>
    );
}

export default NavBar;