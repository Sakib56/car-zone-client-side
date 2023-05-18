import React from 'react';
import logo from '../../assets/logo.jpg'
import ActiveLink from '../../ActiveLink/ActiveLink';

const Navbar = () => {
    return (
        <nav className="navbar bg-secondary text-white p-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn bg-primary lg:hidden mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/allToys'>All Toys</ActiveLink>
                        <ActiveLink to='/myToys'>My Toys</ActiveLink>
                        <ActiveLink to='/addAToys'>Add A Toy</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                    </ul>
                </div>

                <div className='flex items-center gap-1'>
                    <img className='w-16 h-16 rounded-full' src={logo} alt="" />
                    <h1 className="text-lg md:text-4xl md:font-bold">Car Zone <span className='text-primary'>Kids</span></h1>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-bold gap-x-10">
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/allToys'>All Toys</ActiveLink>
                    <ActiveLink to='/myToys'>My Toys</ActiveLink>
                    <ActiveLink to='/addAToys'>Add A Toy</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-primary">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;