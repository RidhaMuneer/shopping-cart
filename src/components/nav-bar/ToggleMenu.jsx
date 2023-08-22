import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

function ToggleMenu() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <button onClick={toggleMenu}>
                <Icon path={mdiMenu} size={1.2} className='mt-1'/>
            </button>
            {menuOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-white flex flex-col items-center justify-center">
                    <Link to='/' className="text-2xl mb-4">HOME</Link>
                    <a href="" className="text-2xl mb-4">ABOUT US</a>
                    <Link to='shop' className="text-2xl mb-4">SHOP</Link>
                    <a href="" className="text-2xl mb-4">COLLECTION</a>
                </div>
            )}
        </div>
    );
}

export default ToggleMenu;