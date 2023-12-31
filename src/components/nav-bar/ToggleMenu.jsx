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
        <div className='mb-0.5'>
            <button onClick={toggleMenu}>
                <Icon path={mdiMenu} size={1.2} className='mt-1'/>
            </button>
            {menuOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-white flex flex-col items-center justify-center">
                    <Link to='/' className="text-2xl mb-4">HOME</Link>
                    <Link to='/shop' className="text-2xl mb-4">SHOP</Link>
                    <Link to='/aboutus' className="text-2xl mb-4">ABOUT US</Link>
                    <button onClick={toggleMenu} className="text-2xl mb-4">EXIT</button>
                </div>
            )}
        </div>
    );
}

export default ToggleMenu;