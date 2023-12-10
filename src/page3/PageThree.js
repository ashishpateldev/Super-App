import React from 'react'
import Boy from './components/boy.png';
import Mountain from './components/mountain.png';
import Cloud from './components/cloud.png';
import Meter from './components/meter.png';
import Wind from './components/wind.png';
import Drop from './components/drop.png';

function PageThree() {
      return (
            <>
                  <div className='flex mb-12'>

                        <div>
                              <div class="ml-12 mt-11 mb-10 flex rounded-xl bg-blue-700 text-gray-700 shadow-md w-[48rem] h-[24rem] flex-row">
                                    <div
                                          class="w-60 m-0 text-gray-700 rounded-xl mt-2">
                                          <img src={Boy}
                                                alt="Boy" class="object-cover mt-2 ml-8 h-[22rem]" />
                                    </div>
                                    <div class="p-6">
                                          <h6
                                                class="ml-4 block mb-3 font-roboto text-2xl font-semibold text-white">
                                                KK Vinay
                                          </h6>
                                          <h4 class="ml-4 block mb-2 font-roboto text-2xl font-semibold text-white">
                                                Vinay090@gmail.com
                                          </h4>
                                          <p class="ml-4 block mb-8 font-roboto text-5xl font-semibold text-white">
                                                vinay060
                                          </p>

                                          <div className='flex'>

                                                <button className='ml-1 w-40 rounded-full bg-blue-500 text-white text-xl'>Next Page</button>

                                                <button className='ml-1 w-40 rounded-full bg-blue-500 text-white text-xl'>Next Page</button>

                                          </div>


                                          <div className='flex'>

                                                <button className='ml-1 w-40 rounded-full bg-blue-500 text-white text-xl'>Next Page</button>

                                                <button className='ml-1 w-40 rounded-full bg-blue-500 text-white text-xl'>Next Page</button>

                                          </div>

                                    </div>

                              </div>



                              {/* <div class="ml-12 mt-11 mb-8 flex rounded-3xl bg-blue-700 text-gray-700 shadow-md w-[48rem] h-[18rem] flex-row"> */}

                              <div class='ml-12 mt-11 w-[48rem] h-[7rem] flex font-roboto font-bold bg-pink-500 rounded-t-3xl'>
                                    <h1 class='text-white mt-4'>12-10-2023</h1>
                                    <h1 class='text-white mt-4'>05:35 PM</h1>
                              </div>

                              <div class='mb-12 ml-12 w-[48rem] h-[11rem] flex font-roboto font-bold bg-[rgba(16,23,68,1)]'>
                                    <div>
                                          <img src={Cloud} class='p-3'></img>
                                          <p class='text-white pl-3'>Heavy Rain</p>
                                    </div>
                                    <h1 class='text-white'>|</h1>
                                    <div>
                                          <h1 class='text-white mb-4 mt-4'>24°C</h1>
                                          <div class='flex'>
                                                <img src={Meter} class='ml-8'></img>
                                                <p class='text-white text-xl ml-6'>1010 mbar <br />Pressure</p>
                                          </div>

                                    </div>
                                    <h1 class='text-white'>|</h1>
                                    <div>
                                          <div class='flex mt-4 ml-8 mb-8'>
                                                <img src={Wind}></img>
                                                <p class='text-white ml-4'>3.7km <br /> Wind</p>
                                          </div>


                                          <div class='flex mt-6 ml-8'>
                                                <img src={Drop}></img>
                                                <p class='text-white ml-9'>83% <br /> Humidity</p>
                                          </div>
                                    </div>

                              </div>
                              {/* </div> */}


                        </div>

                        <div class="mt-10 ml-28 mb-12 rounded-2xl max-w-sm overflow-hidden bg-white">
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

export default PageThree