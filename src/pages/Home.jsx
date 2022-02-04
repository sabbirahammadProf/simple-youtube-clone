import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import img from '../images/video.jpg';

const Home = () => {
    const [datas, setDatas] = useState([]);

    fetch("https://openapi.programming-hero.com/api/course/curriculum")
        .then(res => res.json())
        .then(data => setDatas(data.data));

    return (
        <div className='flex'>
            <div className='sidebar-head'>
                <Sidebar />
            </div>
            <div className="bg-gray-200 videos-head h-screen mt-16">
                <div className='tagbar'>
                    <ul className='inline-flex bg-white'>
                        <li className='tag'>All</li>
                        <li className='tag'>Pushpa</li>
                        <li className='tag'>Natok</li>
                        <li className='tag'>Motu Patlu</li>
                        <li className='tag'>Jerry</li>
                        <li className='tag'>Cricket</li>
                        <li className='tag'>Javascript</li>
                        <li className='tag'>Scene</li>
                        <li className='tag'>Website</li>
                        <li className='tag'>Spider Man</li>
                        <li className='tag'>Spider Man Movie</li>
                        <li className='tag'>Spider Man No Way Home</li>
                    </ul>
                </div>
                <div className='videos grid grid-cols-4 gap-3'>
                    {
                        datas.map((item) =>
                            <div key={item._id} className='mt-8'>
                                <img src={item.image} alt="" />
                                <div className='flex mt-2 w-full'>
                                    <div className='w-2/12'>
                                        <img src={item.image} alt="" className='channel-logo rounded-full' />
                                    </div>
                                    <div className='10/12 ml-4'>
                                        <h3 className='text-sm'>{item.name}</h3>
                                        <p className='text-sm mt-2 text-gray-500'>Youtube {item._id} Dot Com</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;