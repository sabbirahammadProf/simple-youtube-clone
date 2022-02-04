import React from 'react';
import { Link } from 'react-router-dom';
import channelImg from '../images/channel.png';

const Sidebar = () => {
    return (
        <aside className='sidebar bg-white'>
            <ul className='mt-2'>
                <li className='sidebar-item'><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
                <li className='sidebar-item'><Link to="/"><i className="far fa-compass"></i> Explore</Link></li>
                <li className='sidebar-item'><Link to="/"><i className="fab fa-youtube"></i> Subscription</Link></li>
                <hr className='my-3' />
                <li className='sidebar-item'><Link to="/"><i className="fas fa-photo-video"></i> Library</Link></li>
                <li className='sidebar-item'><Link to="/"><i className="fas fa-history"></i> History</Link></li>
                <li className='sidebar-item'><Link to="/"><i className="fas fa-file-video"></i> Your videos</Link></li>
                <li className='sidebar-item'><Link to="/"><i className="far fa-clock"></i> Watch later</Link></li>
                <li className='sidebar-item'><Link to="/"><i className="far fa-thumbs-up"></i> Liked videos</Link></li>
                <hr className='my-3' />
                <p className='uppercase text-gray-600 pl-6 py-2 font-bold text-sm'>Subscriptions</p>
                <li className='sidebar-item overflow-hidden'><Link to="/" className='flex items-center'><img src={channelImg} alt="" className='w-8 rounded mr-5 text-sm' /> WORLD OF ABC</Link></li>
                <li className='sidebar-item'><Link to="/"><i className="fas fa-plus-circle"></i> Browse channels</Link></li>
                <hr className='my-3' />
                <li className='sidebar-item'><Link to="/"><i className="fas fa-gamepad"></i> Gaming</Link></li>
                <li className='sidebar-item'><Link to="/"><i className="fas fa-satellite-dish"></i> Live</Link></li>
                <li className='sidebar-item'><Link to="/"><i className="fas fa-trophy"></i> Sports</Link></li>
                <hr className='my-3' />
                <li className='sidebar-item'><Link to="/"><i className="fas fa-cog"></i> Setting</Link></li>
                <li className='sidebar-item'><Link to="/"><i className="far fa-flag"></i> Report history</Link></li>
                <li className='sidebar-item'><Link to="/"><i className="far fa-question-circle"></i> Help</Link></li>
                <li className='sidebar-item'><Link to="/"><i className="far fa-comment-alt"></i> Send feedback</Link></li>
                <hr className='my-3 mb-24' />
            </ul>
        </aside>
    );
};

export default Sidebar;