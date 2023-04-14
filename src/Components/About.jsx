import React from 'react'
import Self from "../Images/selfImg.jpg"

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex items-center justify-center">
            <h2 className="font-bold text-4xl border-b-8 border-pink-600 inline">About Me</h2>
        </div>
        <div className="flex gap-5 items-center justify-center m-10 p-5">
            <img src={ Self } alt="error" className="w-[300px] h-[400px]"/>
            <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <p className="text-gray-200 font-bold text-xl">Secondary Education:</p>
                    <p className="text-[#8892b0] font-serif text-lg">Passed from Birla Bharati High School with 10CGPA(CBSE) 2017.</p>
                </div>
                <div className="flex gap-2">
                    <p className="text-gray-200 font-bold text-xl">High-Secondary Education:</p>
                    <p className="text-[#8892b0] font-serif text-lg">Passed from Birla Bharati High School with 88.2%(CBSE) 2019.</p>
                </div>
                <div className="flex gap-2">
                    <p className="text-gray-200 font-bold text-xl">Graduation:</p>
                    <p className="text-[#8892b0] font-serif text-lg">Heritage Institute Of Technology Kolkata(2020-2024).</p>
                </div>
                <div className="flex gap-2">
                    <p className="text-gray-200 font-bold text-xl">Hobbies:</p>
                    <p className="text-[#8892b0] font-serif text-lg">Music, Dance</p>
                </div>
                <div className="flex gap-2">
                    <p className="text-gray-200 font-bold text-xl">Languages Known:</p>
                    <p className="text-[#8892b0] font-serif text-lg">English, Bengali, Hindi</p>
                </div>
                <p className="text-[#ccd6f6] font-serif p-4 text-lg">Currently I am in my 3rd year of graduation, pursuing B.Tech in Computer Science (CGPA-8.5). I had an inclination towards technology since my childhood. Besides focussing on my semester, I have shown interest in Development and Data Science by participating in various hackathons, exhibitions, etc. that helped me work rigorously on these topics. Not only academics, I have also participated in college cultural programs and inter-college fests.</p>
            </div>
        </div>
    </div>
  )
}
