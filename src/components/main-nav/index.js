import React from 'react';

import 'flag-icons/css/flag-icons.min.css';

import logo192 from '../../images/logo192.png';

class MainNav extends React.Component {
  render() {
    return (
      <nav id="header" className="fixed w-full z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <span className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
              <img className="h-8 inline" src={logo192} alt="COVID-19 Logo" /> COVID-19 Data Tracker
            </span>
          </div>
          <div className="block lg:hidden pr-4">
            <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <span className="mr-3">
                <span className={`flag-icon flag-icon-${this.props.geoLocationData.country_code?.toLowerCase()}`}></span>
                {this.props.geoLocationData.country_name}
              </span>
              <li className="mr-3">
                Map
              </li>
              <li className="mr-3">
                About
              </li>
            </ul>
            <button
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              style={{ display: 'none' }}
            >
              Action
            </button>
          </div>

        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
    );
  }
}

export default MainNav;
