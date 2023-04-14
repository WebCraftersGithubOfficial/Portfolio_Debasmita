import React from 'react'

export default function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex items-center justify-center">
            <h2 className="font-bold text-4xl border-b-8 border-pink-600 inline">My Skills</h2>
        </div>
        <div className="mt-5 flex flex-col gap-5 items-center justify-center m-5">
          <div className="flex gap-8 items-center justify-center">
            <div className="flex flex-col gap-2">
              <p className="text-xl text-[#8892b0] font-mono">HTML</p>
              <div class="w-[500px] bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"80%"}}>
                  80%
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl text-[#8892b0] font-mono">CSS</p>
              <div class="w-[500px] bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"85%"}}>
                  85%
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center justify-center">
            <div className="flex flex-col gap-2">
              <p className="text-xl text-[#8892b0] font-mono">JAVASCRIPT</p>
              <div class="w-[500px] bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"70%"}}>
                  70%
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl text-[#8892b0] font-mono">REACTjs</p>
              <div class="w-[500px] bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"65%"}}>
                  65%
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center justify-center">
            <div className="flex flex-col gap-2">
              <p className="text-xl text-[#8892b0] font-mono">NODEjs</p>
              <div class="w-[500px] bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"65%"}}>
                  65%
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl text-[#8892b0] font-mono">MONGODB</p>
              <div class="w-[500px] bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"70%"}}>
                  70%
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center justify-center">
            <div className="flex flex-col gap-2">
              <p className="text-xl text-[#8892b0] font-mono">EXPRESS</p>
              <div class="w-[500px] bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"65%"}}>
                  65%
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl text-[#8892b0] font-mono">MACHINE LEARNING</p>
              <div class="w-[500px] bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"45%"}}>
                  45%
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
