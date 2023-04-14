import React from 'react'

export default function Participation() {
  return (
    <div name="participation" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex items-center justify-center">
            <h2 className="font-bold text-4xl border-b-8 border-pink-600 inline">My Participations</h2>
        </div>
        <div className="m-20">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-pink-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <p className="text-3xl font-bold text-gray-300 px-10">BENGAL HACKAZARD 2022 | E-Commerce Development Hackathon</p>
            </div>
            <div className="flex items-center mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-pink-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <p className="text-3xl font-bold text-gray-300 px-10">STEX 2022 | Technical Exhibition by IEE Calcutta University</p>
            </div>
            <div className="flex items-center mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-pink-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <p className="text-3xl font-bold text-gray-300 px-10">BrainDead 2023 | Data Science Hackathon by IIEST Shibpur</p>
            </div>
        </div>
        
    </div>
  )
}
