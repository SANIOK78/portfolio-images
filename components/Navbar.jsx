import Link from 'next/link';
import React, {useEffect, useState} from 'react';
// import menu "hamburger"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {

    // On va gérer l'affichage du menu au click sur bouton "hamburger"
    const [nav, setNav] = useState(false);
    // Géstion du couleur du fond et du text
    const [color, setColor] = useState('transparent');
    const [textColor, setTextcolor] = useState('white')

    const handleNav = () => {
        setNav( !nav )
    }

    // Changement de couleur au "scroll"
    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor("#fff");
                setTextcolor("#000");
            } else {
                setColor("transparent");
                setTextcolor("#fff"); 
            }
        }
        // evenement "scroll"
        window.addEventListener("scroll", changeColor);
    }, []);

    return (
        <div style={{backgroundColor: `${color}`}}
            className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
        >
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white '>
                <Link href="/">
                    <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>
                        @MonSite 
                    </h1>
                </Link> 
             {/**sm: >640px => display: flex ; sm: <640px = on cache le menu */}
                <ul style={{color: `${textColor}`}} className='hidden sm:flex'> 
                    <li className='p-4'><Link href="/">Home</Link></li>                   
                    <li className='p-4'><Link href="/#gallery">Gallery</Link></li>
                    <li className='p-4'><Link href="/work">Work</Link></li>
                    <li className='p-4'><Link href="/contact">Contact</Link></li>
                </ul>

             {/* Button Mobile "hamburger" sm: >640px =>caché ; sm: <640px = affiché */}
                <div className='block sm:hidden z-10' onClick={handleNav} >
                    {   nav ? 
                        (<AiOutlineClose size={20} style={{color: `${textColor}`}} />
                        ): (
                        <AiOutlineMenu size={20} style={{color: `${textColor}`}} />
                        )
                    }                  
                </div>

             {/* Menu Mobile=> va glisser de la gauche/ sm: >640px =>caché  */}
                <div className={
                    nav ? 
                    `sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center
                    items-center w-full h-screen bg-black text-center ease-in duration-300 ` 
                    : 
                    `sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center
                    items-center w-full h-screen bg-black text-center ease-in duration-300 `                     
                }
                >
                    <ul> 
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-orange-500'>
                            <Link href="/">Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-orange-500'>
                            <Link href="/#gallery">Gallery</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-orange-500'>
                            <Link href="/work">Work</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-orange-500'>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>               
            </div>
        </div>
    );
};

export default Navbar;