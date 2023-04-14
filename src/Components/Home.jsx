import React from 'react'

export default function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col gap-4 justify-center h-full">
            <p className="text-pink-600 text-2xl">Hi, My name is</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#ccd6f6]">Debasmita Majumdar</h1>
            <h2 className="text-2xl md:text-6xl font-bold text-[#8892b0]">I am a Full Stack Developer and an ML enthusiast.</h2>
            <p className="text-sm text-gray-200 py-1 md:py-5 max-w-screen font-serif md:text-lg">I have started my journey in web development with Html, CSS, Javascript. Currently I am focussed on MERN stack. I have been working on Reactjs for quite sometime now along with trying my hands on Node and Expressjs as well as MongodB. Alongside I am also an Machine Learning enthusiast.</p>
        </div>
    </div>
  )
}
