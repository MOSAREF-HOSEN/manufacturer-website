import React from 'react';

const CostomarRevew = () => {
    return (
        <div className='px-16 mt-44 mb-28'>
            <div class="hero bg-white shadow-lg" >
                <div class=""></div>

                <div class="hero-content text-center text-neutral-content">


                    <div>
                        <h2 className='text-6xl  text-teal-700   font-serif mt-3 mb-4'>melieone business trust us</h2>
                        {/* <p className='text-3xl fond-semibold text-indigo-600'>Lorem ipsum dolor sit amet consectetur </p> */}

                        <div class="grid grid-cols-1 lg:grid-cols-3 shadow mt-12 gap-4">

                            <div class="stat bg-white rounded">
                                <div class="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div class="stat-title  text-gray-700">Page Views</div>
                                <div class="stat-value text-success">2.6M</div>
                                <div class="stat-desc text-gray-700">21% more than last month</div>
                            </div>

                            <div class="stat bg-white rounded">
                                <div class="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div class="stat-title text-gray-700">Page Views</div>
                                <div class="stat-value text-secondary">2.6M</div>
                                <div class="stat-desc text-gray-700">21% more than last month</div>
                            </div>
                            <div class="stat bg-white rounded">
                                <div class="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div class="stat-title text-gray-700">Page Views</div>
                                <div class="stat-value text-success">2.6M</div>
                                <div class="stat-desc text-gray-700">21% more than last month</div>
                            </div>



                        </div>
                        <div className='mt-4'>
                            <div class="w-full bg-base-100 shadow-xl">
                                <div class=" lg:flex justify-around p-20 rounded-sm">
                                    <div className='p-4'>
                                        <h2 class=" text-3xl font-mono text-indigo-700 uppercase">melieone business trust us</h2>
                                        <p className='lg:text-xl text-gray-800'>dog chews whose choose</p>
                                    </div>
                                    <div class="flex justify-around items-center bottom-0 gap-4">
                                        <button class="btn bg-green-600">Requeste For quete</button>
                                        <button class="btn bg-slate-900">Concat Us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CostomarRevew;