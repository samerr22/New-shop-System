import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdminSidebar = ({children}) => {

    const menus = [
        {
            name: 'Dashboard',
            link: 'dashboard'
        },
        {
            name: 'Shops',
            link: 'shops'
        },
        {
            name: 'Game Center',
            link: 'game-center'
        },
        {
            name: 'Gaming Room Bookings',
            link: 'gaming-room-bookings'
        }
    ]

  return (
    <>
<div className="flex w-screen h-screen text-gray-700">
     
            <div className="flex flex-col w-56">

                
            <div className="flex items-center mr-5 py-5 px-2">
                <div className="mr-5">
                    <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                    <img
                        className="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]"
                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                        alt="avatar image"
                    />
                    </div>
                </div>
                <div className="mr-2 ">
                    <a
                    href="SEO-Manager"
                    className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse"
                    >
                    Robert Jason
                    </a>
                    <span className="text-secondary-dark dark:text-stone-500 font-medium block text-[0.85rem]">
                     Admin
                    </span>
                </div>
            </div>

            <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

                <div className="flex flex-col flex-grow p-4 overflow-auto">

                    {menus.map((menu, index) => (
                        <NavLink key={index} className="flex my-1 items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 hover:text-black transition-all" to={menu.link}>
                            <span className="leading-none">{menu.name}</span>
                        </NavLink>
                    ))}


                    {/* <Link className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
                        to="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="ml-2 leading-none">Logout</span>
                    </Link> */}
                </div>

            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex items-center flex-shrink-0 h-16 px-8">
                    <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded text-white bg-red-500 hover:bg-gray-300">
                        Logout
                    </button>
                    {/* <button className="relative ml-2 text-sm focus:outline-none group">
                        <div className="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>
                        <div className="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex">
                            <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                            <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                            <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                        </div>
                    </button> */}
                </div>
                <div className="flex-grow p-6 overflow-auto bg-gray-100">

                        {children}
                        
                </div>
            </div>
</div>

    </>
  );
};

export default AdminSidebar;
