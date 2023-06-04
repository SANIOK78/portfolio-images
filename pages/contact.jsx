import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';

const contact = () => {
    return (
        <div>
            <Hero 
                heading="Contact" 
                message="Soumettez le formulaire ci-dessous
                    pour plus des suggestions"
            />

            <Contact /> 
        </div>
    );
};

export default contact;