// Composant carousel d'images
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Slider = ({slides}) => {

    // gestion affichage imgs dans carousel
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    // function pour basculer a travers les images
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    // Verification si on recupèr un "tableau" avec des images
    if( !Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div id='gallery' className='max-w-[1240px] mx-auto '>
            <h1 className='text-2xl text-center font-bold p-4 '>Gallery</h1>
            <div className='relative flex justify-center items-center p-4 mb-4 '>
                {/* Le bouton fleche gauche */}
                <FaArrowCircleLeft size={50} 
                    className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                    onClick={prevSlide}                                                                               
                />
                { slides.map((el, index) => {
                    return (
                        <div key={index} 
                            className={ index === current ?                                     
                                'opacity-[1] ease-in duration-1000 ' : 'opacity-0'                                   
                            } 
                        >                            
                            {/* On affiche que l'image avec la diapositive actuelle */}
                            {
                                index === current && (
                                    <Image src={el.image}
                                        alt='plage'
                                        width='1440' 
                                        height='600'                                 
                                        objectFit='cover'
                                    />
                                )   
                            }                        
                        </div>
                    );
                })}
                
                {/* Le bouton fleche droit */}
                <FaArrowCircleRight size={50} 
                    className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                    onClick={nextSlide}
                />
            </div>            
        </div>
    );
};

export default Slider;