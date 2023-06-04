import Image from 'next/image';
import React from 'react';

const Portfolio = () => {

    return (
        <div className='max-w-[1240px] mx-auto py-16 text-center '>
            <h1 className='text-2xl font-bold p-4' >Photos de voyage</h1>

            <div className='grid grid-rows-none md:grid-cols-5 gap-4 p-4'>
                <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                    {/* Image extern */}
                    <Image src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                       alt='montagne'
                       layout='responsive'
                       width='677'
                       height="451" 
                    />
                </div>

                <div className="w-full h-full">
                    <Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" 
                        alt='montagne'
                        width='215'
                        height="217" 
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>

                <div className="w-full h-full">
                    <Image src="https://images.unsplash.com/photo-1593504128948-921415932d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                        alt='montagne'
                        width='215'
                        height="217" 
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                
                <div className="w-full h-full">
                    <Image src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                        alt='montagne'
                        width='215'
                        height="217" 
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                
                <div className="w-full h-full">
                    <Image src="https://plus.unsplash.com/premium_photo-1661823662989-9d441b95d906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1248&q=80" 
                        alt='montagne'
                        width='215'
                        height="217" 
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;