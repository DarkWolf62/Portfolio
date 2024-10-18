import React from 'react';

const HeadMenu: React.FC = () => {
  return (
    <div className="flex items-center bg-gray-900 p-4 shadow-2xl fixed w-full top-0 z-50">
      <h1 className="mr-5 text-white font-bold text-2xl">Portfolio</h1>
      <button className="mr-5 bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded text-xl">
        Présentation
      </button>
      <button className="mr-5 bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded text-xl">
        Compétences
      </button>
      <button className="mr-5 bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded text-xl">
        Projets
      </button>
    </div>
  );
}

export default HeadMenu;