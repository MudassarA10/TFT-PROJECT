/* eslint-disable no-unused-vars */
import React from 'react';
import img from "../assets/images/Back Element.png"
import Navbar from './navbar';
import img2 from "../assets/images/nabeel.png"
const Main = () => {
    const backgroundImageUrl = { img };

    return (
        <>
            <div>

                <Navbar />
            </div>
            <div className='flex w-299 h-86'>
                <h1 className='ml-20 mt-20 text-6xl'>About Us</h1>
            </div>
            <div className='flex '>
                <div className='w-360 h-490 mt-20 ml-15'>
                    <img src={img2} alt="" />
                </div>
                <div className='flex-col w-50 h-2/4 border-4 border-indigo-500/100 '>
                    <div className=''><h1>PROF. DR NABEEL SABIR</h1></div>
                    <div className=''>fOUNDER & CEO</div>
                </div>
            </div>
        </>
    );
};

export default Main;