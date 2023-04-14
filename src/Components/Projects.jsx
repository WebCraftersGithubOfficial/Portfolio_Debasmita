import React from 'react'

export default function Projects() {
  return (
    <div name="projects" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex items-center justify-center">
            <h2 className="font-bold text-4xl border-b-8 border-pink-600 inline">My Projects</h2>
        </div>
        <div className="m-10">
            <p className="text-3xl font-bold text-gray-300">BAKED BITES |Bakery Website|</p>
            <div className="mt-5 flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                    <p className="text-pink-600 font-bold text-2xl">Description:</p>
                    <p className="text-[#8892b0] text-xl">Full stack online bakery shop with features like select item, add to cart, remove from cart, admin dashboard, etc.</p>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="text-pink-600 font-bold text-2xl">Tech Stack Used:</p>
                    <p className="text-[#8892b0] text-xl">Reactjs | Nodejs | MongoDB | Expressjs | Tailwind CSS</p>
                </div>
            </div>
            <p className="text-3xl font-bold text-gray-300 mt-20">SLEEP STAGE CLASSIFICATION |Medical Diagnostic Website|</p>
            <div className="mt-5 flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                    <p className="text-pink-600 font-bold text-2xl">Description:</p>
                    <p className="text-[#8892b0] text-xl">Sleep stage prediction model from EEG signals.</p>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="text-pink-600 font-bold text-2xl">Tech Stack Used:</p>
                    <p className="text-[#8892b0] text-xl">Artificial Neural Network(ANN) for the model | HTML | Tailwind CSS | Flask</p>
                </div>
            </div>
            <p className="text-3xl font-bold text-gray-300 mt-20">EXPLORATORY DATA ANALYSIS PROJECT</p>
            <div className="mt-5 flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                    <p className="text-pink-600 font-bold text-2xl">Description:</p>
                    <p className="text-[#8892b0] text-xl">Analysis of placement data of a business school.</p>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="text-pink-600 font-bold text-2xl">Tech Stack Used:</p>
                    <p className="text-[#8892b0] text-xl">Numpy | Pandas | Matplotlib | Seaborn</p>
                </div>
            </div>
        </div>
    </div>
  )
}
