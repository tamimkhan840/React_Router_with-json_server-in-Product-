/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar({ categories }) {
    // console.log(categories);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (

        <div className=" md:col-span-3 bg-white p-3 ">

             {/* Hamburger Button for Small and Medium Devices */}
             <button
                onClick={toggleDrawer}
                className="md:hidden fixed top-3 left-3 z-50 bg-green-600 text-white px-3 py-2 rounded"
            >
                ☰
            </button>

           <div  className={`fixed top-0 left-0 h-full w-8/12 md:w-full bg-white shadow-lg p-4 z-40 transform ${
                    isDrawerOpen ? "translate-x-0 " : "-translate-x-full"
                } transition-transform duration-300 md:static md:translate-x-0 md:col-span-2`}>
            <div className="sticky top-4">
                <h2 className="text-3xl font-bold mb-5">Product Categories</h2>
                <ul className="">
                    {categories.map((category) => (
                        <li key={category.id}>
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive
                                      ? "block p-2 bg-green-700 hover:text-white rounded mb-2 capitalize"
                                      : isPending
                                      ? "block p-2 bg-red-200 hover:text-white rounded mb-2 capitalize"
                                      : "block p-2 bg-green-400  hover:text-white rounded mb-2 capitalize"
                                  }
                                // className="block p-2 bg-green-200 hover:bg-green-600 hover:text-white rounded mb-2 capitalize"
                                to={`/CategoryBlogs/${category.title}`}
                            >
                                {category.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="mt-11 text-center  ">
                    <Link to="/" className="px-2 md:px-4 py-1 md:py-2 bg-rose-600  mb-3 block ">Go Home</Link>
                    <Link to="/CreateProduct" className="px-2 md:px-4 py-1 md:py-2 bg-green-600 md:text-xs lg:text-base block">Create Product</Link>
                </div>
            </div>
           </div>

           {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden w-8/12"
                    onClick={toggleDrawer}
                ></div>
            )}
        </div>
    );
}
