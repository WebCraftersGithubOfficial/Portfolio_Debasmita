import React from 'react'

export default function Contact() {
  return (
    <div name="contact" className="w-full h-[300px] bg-[#0a192f] text-gray-300">
        <div className="flex items-center justify-center">
            <h2 className="font-bold text-4xl border-b-8 border-pink-600 inline">Contact Details</h2>
        </div>
        <div className="m-20 flex gap-10 items-center justify-center">
            <div className="flex gap-3 items-center">
                <p className="text-pink-600 font-bold font-serif text-xl">Phone No:</p>
                <p className="text-lg text-[#8892b0]">8777259814</p>
            </div>
            <div className="flex gap-3 items-center">
                <p className="text-pink-600 font-bold font-serif text-xl">Email Address:</p>
                <p className="text-lg text-[#8892b0]">debasmita.tina2000@gmail.com</p>
            </div>
        </div>
    </div>
  )
}
