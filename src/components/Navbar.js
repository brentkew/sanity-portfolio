import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar(){
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact className="inflex-flex items-center text-white py-9 px-3 text-4xl font-bold cursive tracking-widest" activeClassName="text-red-100 bg-red-700" >Home</NavLink>
                    <NavLink to="/about" className="inline-flex items-center text-white-200 hover:text-red-800 py-3 px-3 my-6 rounded " activeClassName="text-red-100 bg-red-700" >About Us</NavLink>
                    <NavLink to="/project" className="inline-flex items-center text-white-200 hover:text-red-800 py-3 px-3 my-6 rounded " activeClassName="text-red-100 bg-red-700" >Projects</NavLink>
                    <NavLink to="/post" className="inline-flex items-center text-white-200 hover:text-red-800 py-3 px-3 my-6 rounded" activeClassName="text-red-100 bg-red-700">Blog Post</NavLink>
                </nav>
                <div className="inline-flex py-6 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com" target="_blank" className="mr-4" fgColor="#fff" style={{ width: 30, height: 30 }} /> 
                </div>
            </div>
            
        </header>
    );
}