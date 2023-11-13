/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"
const Navbar = () => {
    return (
        <div className='flex justify-between mt-5   '>
            <div className='flex item-center gap-20'>
                <div className='flex item-center w-222 h-66 ml-20  '>
                    <img src={logo} alt="wait" />
                </div>
                <div className='flex'>
                    <ul className='flex pt-6  '>
                        <li><Link className="">Home</Link></li>
                        <li><Link className='pl-4'>About</Link></li>
                        <li><Link className='pl-4'>Courses</Link></li>
                        <li><Link className='pl-4'>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex'>
                <ul className='flex pt-3 gap-5 mr-20'>
                    <li><Link><button className='bg-lime-800 border-2 rounded-lg w-20 h-10 text-xl text-lime-500 '>Register</button></Link></li>
                    <li><Link ><button className='bg-white border-2 rounded-lg w-20 h-10 text-xl'>Login</button></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
