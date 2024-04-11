import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <br />
      <div className="fixed top-0 left-0 w-full z-50 bg-blue-700 border-b backdrop-blur-lg bg-opacity-80">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between items-center">
            <h3 className="text-2xl text-white font-semibold">Dashboard</h3>
            <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
              <FontAwesomeIcon icon={faCog} className="text-white text-xl border-2 border-gray-50 rounded-xl p-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;