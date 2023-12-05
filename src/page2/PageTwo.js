import React from 'react';
import './Page.css';
import Vector from './components/Vector.png';
import Image2 from './components/image2.png';
import image3 from './components/image3.png';
import Image4 from './components/image4.png';
import Image6 from './components/image6.png';
import Image7 from './components/image7.png';
import Image8 from './components/image8.png';
import Image9 from './components/image9.png';
import Image10 from './components/image10.png';
import Image11 from './components/image11.png';


function PageTwo() {
      return (
            <>
                  <div className='flex'>
                        <div>
                              <h1 className='mb-10'>Super app</h1>
                              <h2>CHOOSE YOUR</h2>
                              <h2>ENTERTAINMENT</h2>
                              <h2 className='mb-12'>CATEGORY</h2>

                              <div className='mb-5'>
                                    <button className='ml-12 w-48 rounded-full bg-green-700 text-white'>Romance<span className='ml-6 text-2xl'>X</span></button>
                                    <button className='ml-12 w-48 rounded-full bg-green-700 text-white'>Music<span className='ml-6 text-2xl'>X</span></button>
                              </div>
                              <button className='mb-5 ml-12 w-48 rounded-full bg-green-700 text-white'>Action<span className='ml-6 text-2xl mt-5'>X</span></button>



                              <div className='flex'>
                                    <img src={Vector} className='ml-14 mt-8'></img>
                                    <p className='text-white mt-8 ml-3'>Minimum 3 Category Required</p>
                              </div>

                        </div>



                        <div>
                              <div className='flex gap-20 ml-10'>

                                    <div class="max-w-sm rounded-2xl shadow-lg bg-orange-500 mt-12">

                                          <div class="px-4 pt-3">
                                                <span class="inline-block rounded-full text-2xl font-semibold text-white mb-6">Action</span>
                                          </div>

                                          <img class="w-full p-1" src={Image2} alt="Image 1"></img>

                                    </div>


                                    <div class="max-w-sm rounded-2xl shadow-lg bg-purple-300 mt-12">

                                          <div class="px-4 pt-3">
                                                <span class="inline-block rounded-full text-2xl font-semibold text-white mb-6">Drama</span>
                                          </div>

                                          <img class="w-full p-1" src={image3} alt="Image 1"></img>

                                    </div>


                                    <div class="max-w-sm rounded-2xl shadow-lg bg-green-700 mt-12">

                                          <div class="px-4 pt-3">
                                                <span class="inline-block rounded-full text-2xl font-semibold text-white mb-6">Romance</span>
                                          </div>

                                          <img class="w-full p-1" src={Image4} alt="Image 1"></img>

                                    </div>

                              </div>

                              <div className='flex gap-20 ml-10'>

                                    <div class="max-w-sm rounded-2xl shadow-lg bg-sky-300 mt-10">

                                          <div class="px-4 pt-3">
                                                <span class="inline-block rounded-full text-2xl font-semibold text-white mb-6">Thriller</span>
                                          </div>

                                          <img class="w-full p-1" src={Image6} alt="Image 1"></img>

                                    </div>

                                    <div class="max-w-sm rounded-2xl shadow-lg bg-amber-900 mt-10">

                                          <div class="px-4 pt-3">
                                                <span class="inline-block rounded-full text-2xl font-semibold text-white mb-6">Western</span>
                                          </div>

                                          <img class="w-full p-1" src={Image7} alt="Image 1"></img>

                                    </div>

                                    <div class="max-w-sm rounded-2xl shadow-lg bg-blue-600 mt-10">

                                          <div class="px-4 pt-3">
                                                <span class="inline-block rounded-full text-2xl font-semibold text-white mb-6">Horror</span>
                                          </div>

                                          <img class="w-full p-1" src={Image8} alt="Image 1"></img>

                                    </div>

                              </div>


                              <div className='flex gap-x-20 gap-y-20  ml-10'>

                                    <div class="max-w-sm rounded-2xl shadow-lg bg-pink-500 mt-10">

                                          <div class="px-4 pt-3">
                                                <span class="inline-block rounded-full text-2xl font-semibold text-white mb-6">Fantasy</span>
                                          </div>

                                          <img class="w-full p-1" src={Image9} alt="Image 1"></img>

                                    </div>

                                    <div class="max-w-sm rounded-2xl shadow-lg bg-red-500 mt-10">

                                          <div class="px-4 pt-3">
                                                <span class="inline-block rounded-full text-2xl font-semibold text-white mb-6">Music</span>
                                          </div>

                                          <img class="w-full p-1" src={Image10} alt="Image 1"></img>

                                    </div>

                                    <div class="max-w-sm rounded-2xl shadow-lg bg-green-500 mt-10">

                                          <div class="px-4 pt-3">
                                                <span class="inline-block rounded-full text-2xl font-semibold text-white mb-6">Fiction</span>
                                          </div>

                                          <img class="w-full p-1" src={Image11} alt="Image 1"></img>

                                    </div>

                              </div>

                              <div className='flex flex-col items-end'>

                              <button className='w-48 rounded-full bg-green-700 text-white text-2xl'>Next Page</button>
                              </div>
                        
                        </div>

                  </div>

            </>
      )
}

export default PageTwo