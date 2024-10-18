import React from 'react';

export default function Presentation() {
  return (
    <div className="bg-gray-700 text-white min-h-screen min-w-screen flex flex-col items-center ">
        <div className="mt-10 bg-gray-900 shadow-2xl rounded-lg p-5 flex justify-between m-20 transition-all duration-500 ease-in-out transform hover:scale-105">
            <div>
                <h1 className="text-white font-bold text-5xl ml-5 mt-5">Bonjour, je suis Nourry Nicolas</h1>
                <p className="text-gray-300 text-2xl ml-5 mt-10">Je suis un développeur junior Back-end.
                     Aussi j&#39;aime explorer de nouvelles technologies ou d&#39;approfondir d&#39;autre.</p>
                <div>

                </div>
            </div>
            <img className="w-1/4 object-cover m-10 rounded transition-all duration-500 ease-in-out transform hover:scale-105" src="/public/images/portrait.JPG" alt="Portrait"/>
        </div>
    </div>
  );
}