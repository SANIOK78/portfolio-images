import React from 'react';

const Contact = () => {

    return (
        <div className='max-w-[1240px] m-auto p-4 my-20'>
            <h1 className='text-2xl font-bold text-center p-4'>
                Travaillons ensemble
            </h1>

            <form className='max-w-[600px] m-auto' >

                <div className='grid grid-cols-2 gap-2'>
                    <input className='border shadow-lg p-3 mb-2' type="text" placeholder='Name' />
                    <input className='border shadow-lg p-3 mb-2' type="email" placeholder='Email' />
                </div>

                <input className='border shadow-lg p-3 w-full mb-2' type="text" placeholder='Subject' />
                <textarea className='border shadow-lg p-3 w-full mb-2' cols="30" rows="10" placeholder='Message'>

                </textarea>

                <button className='border shadow-lg p-3 w-full'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;