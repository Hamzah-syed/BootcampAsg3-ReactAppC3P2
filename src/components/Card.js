import React from 'react';
import '../css/tailwind.css'

const Card = ({name, age}) => {
return(
    
    <div className = "h-screen bg-gray-900 flex flex-wrap mx-auto content-start justify-center">
    <h1 className="text-white text-3xl text-center p-4 mt-12 w-full">Assignment Done With The Help Of tailwind</h1>
    <h1 className="lg:px-64 sm:px-32 px-8 text-gray-600 text-xl text-center mb-16 w-full">Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.</h1>
        <div className = "bg-gray-900 w-9/12 max-w-sm rounded-lg border-solid border-2 border-gray-700 self-center">
            <div className="relative flex justify-center bg-gray-800  rounded-t-lg h-32 items-end">
                {/* <div className="absolute h-32 w-32 bg-gray-800 rounded-full mx-auto bottom-0 -mb-12"></div> */}
            </div>
            <div className="px-4 py-6">
                <h1 className="text-md text-gray-600 ">Information</h1>
                <h1 className="text-xl text-white pb-2">{name}</h1>
                <h1 className="text-md text-gray-600 py-2">The Underline words are taken through Properties I Am <strong  className="text-lg"><u>{age-2}</u></strong> Old</h1>
                <button className="py-2 px-4 bg-purple-700 text-white my-4 rounded-md">More Information</button>
            </div>
        </div>
    </div>


);
}
export default Card;