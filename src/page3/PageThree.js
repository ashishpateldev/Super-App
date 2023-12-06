import React from 'react'
import Boy from './components/boy.png';

function PageThree() {
      return (
            <>
                  <div className='flex'>

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

                                    <div class='ml-12 w-[48rem] h-[11rem] flex font-roboto font-bold bg-indigo-900'>
                                          <h1 class='text-white mt-4'>12-10-2023</h1>
                                          <h1 class='text-white mt-4'>05:35 PM</h1>
                                    </div>
                              {/* </div> */}


                        </div>

                        <div>
                              <h1>hello   </h1>
                        </div>

                  </div>
            </>
      )
}

export default PageThree