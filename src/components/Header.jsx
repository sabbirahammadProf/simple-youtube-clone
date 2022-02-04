import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/youtube.png';

const Header = () => {
    return (
        <div className='py-3 flex space-between items-center px-6 fixed bg-white w-full'>
            <div className='flex w-3/12'>
                <i className="fas fa-bars text-xl pr-6 cursor-pointer"></i>
                <Link to="/" className='flex w-2/6'><img src={logo} className='w-full' alt="" /> <sup className='font-thin'>BD</sup></Link>
            </div>
            <div className='flex w-6/12'>
                <input type="text" className='border border-slate-300 py-2 outline-slate-400 px-2 w-full rounded-0' placeholder='Search' /><i className="fas fa-search bg-neutral-100 border px-6 flex items-center cursor-pointer"></i><i className="fas fa-microphone flex items-center bg-neutral-50 rounded-full px-4 ml-2 cursor-pointer"></i>
            </div>
            <div className="flex w-3/12 justify-end items-center">
                <i className="fas fa-video mx-4 text-xl"></i>
                <i className="fas fa-ellipsis-v mx-4 text-xl"></i>
                <i className="far fa-bell mx-4 text-xl"></i>
                <Link to="/" className='bg-purple-600 w-8 h-8 ml-3 flex items-center justify-center text-xl rounded-full text-white'>S</Link>
            </div>
        </div>
    );
};

export default Header;