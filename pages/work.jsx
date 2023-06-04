import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

const work = () => {

    return (
        <div>

            <Hero 
                heading='Mon travail'  
                message="Une partie de mon travail 
                récent en voyageant dans le monde"
            />

            <Portfolio />
        </div>
    );
};

export default work;