import React from 'react';
import Boy from './components/boy.png';
import Mountain from './components/mountain.png';
import Cloud from './components/cloud.png';
import Meter from './components/meter.png';
import Wind from './components/wind.png';
import Drop from './components/drop.png';

function PageFour() {
      return (
            <>

                  <div className='flex'>

                        <div>
                              <div class="ml-12 mt-11 mb-4 flex rounded-xl bg-blue-700 text-gray-700 shadow-md w-[24rem] h-[12rem] flex-row">
                                    <div
                                          class="w-40 m-0 text-gray-700 rounded-xl mt-2">
                                          <img src={Boy}
                                                alt="Boy" class="object-cover mt-2 ml-8 h-[10rem]" />
                                    </div>
                                    <div class="p-1">
                                          <h6
                                                class="ml-1 block mb-1 font-roboto text-sm font-semibold text-white">
                                                KK Vinay
                                          </h6>
                                          <h4 class="ml-1 block mb-1 font-roboto text-sm font-semibold text-white">
                                                Vinay090@gmail.com
                                          </h4>
                                          <p class="ml-1 block font-roboto text-xl font-semibold text-white">
                                                vinay060
                                          </p>

                                          <div className='flex'>

                                                <button className='ml-1 w-16 h-8 rounded-full bg-blue-500 text-white text-xs'>Next Page</button>

                                                <button className='ml-1 w-16 h-8 rounded-full bg-blue-500 text-white text-xs'>Next Page</button>

                                          </div>


                                          <div className='flex'>

                                                <button className='ml-1 w-16 h-8 rounded-full bg-blue-500 text-white text-xs'>Next Page</button>

                                                <button className='ml-1 w-16 h-8 rounded-full bg-blue-500 text-white text-xs'>Next Page</button>

                                          </div>

                                    </div>

                              </div>



                              {/* <div class="ml-12 mt-11 mb-8 flex rounded-3xl bg-blue-700 text-gray-700 shadow-md w-[48rem] h-[18rem] flex-row"> */}

                              <div>

                                    <div class='ml-12 mt-2 w-[24rem] h-[5rem] flex font-roboto font-bold bg-pink-500 rounded-t-3xl'>
                                          <p class='text-white mt-4 ml-12 text-xl'>12-10-2023</p>
                                          <p class='text-white mt-4 ml-12 text-xl'>05:35 PM</p>
                                    </div>

                                    <div class='mb-24 ml-12 w-[24rem] h-[7rem] flex font-roboto font-bold bg-indigo-900'>
                                          <div>
                                                <img src={Cloud} class='p-3 h-20'></img>
                                                <p class='text-white pl-3 text-xs'>Heavy Rain</p>
                                          </div>
                                          <h1 class='text-white ml-0'>|</h1>
                                          <div>
                                                <p class='text-white ml-4 mt-3 text-xl'>24°C</p>
                                                <div class='flex mt-6'>
                                                      <img src={Meter} class='ml-4 h-10'></img>
                                                      <p class='text-white ml-2 mr-2 text-xs'>1010 mbar <br />Pressure</p>
                                                </div>

                                          </div>
                                          <h1 class='text-white ml-0'>|</h1>
                                          <div>
                                                <div class='flex mt-4 ml-8'>
                                                      <img src={Wind} class='h-6'></img>
                                                      <p class='text-white ml-2 text-xs'>3.7km <br /> Wind</p>
                                                </div>


                                                <div class='flex ml-8 mt-4'>
                                                      <img src={Drop} class='h-6'></img>
                                                      <p class='text-white ml-4 text-xs'>83% <br /> Humidity</p>
                                                </div>
                                          </div>

                                    </div>




                              </div>





                        </div>




                        <div class=' w-[24rem] h-[25rem] bg-white ml-12 mt-11 mb-4 flex rounded-xl text-gray-700'>
                              <h1>hii</h1>
                        </div>






                        <div class="mt-10 ml-20 mb-12 rounded-2xl max-w-sm overflow-hidden bg-white">
                              <div class='bg-black w-30 h-30 '>
                                    <img class='h-80 w-full' src={Mountain} alt="Sunset in the mountains"></img>
                                    <h2 class='text-2xl ml-0 mb-2 px-4 py-2 text-white'>Want to climb Mount Everest?</h2>
                                    <h3 class='h-15 text-white px-4 py-2'>2-20-2023 | 07:35 PM</h3>
                              </div>

                              <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2 bg-white">The Coldest Sunset</div>
                                    <p class="text-gray-700 text-base bg-white">
                                          In the years since human beings first reached the summit of Mount Everest in 1953, climbing the world’s highest mountain has changed dramatically. Today, hundreds of mountaineers manage the feat each year thanks to improvements in knowledge, technology, and the significant infrastructure provided by commercially guided expeditions that provide a veritable highway up the mountain for those willing to accept both the......</p>
                              </div>

                        </div>

                  </div>


            </>
      )
}

export default PageFour