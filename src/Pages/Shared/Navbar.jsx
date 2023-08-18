import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.jpg'
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const [nameVisible, setNameVisible] = useState(false);
    const handleLogout = () => {
        logOutUser()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }

    const navText = <>
        <ActiveLink to='/'>Home</ActiveLink>
        <ActiveLink to='/allToys'>All Toys</ActiveLink>
        {user && <>
            <ActiveLink to='/myToys'>My Toys</ActiveLink>
            <ActiveLink to='/addToys'>Add A Toy</ActiveLink>
        </>
        }
        <ActiveLink to='/blog'>Blogs</ActiveLink>
    </>

    return (
        <nav className="navbar bg-pink-600 bg-opacity-80 text-white md:py-2 font-serif lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn bg-pink-500 border-none lg:hidden mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-pink-500 rounded-box w-52">
                        {navText}
                    </ul>
                </div>

                <div className='flex items-center gap-1'>
                    <img className='w-10 md:w-16 h-10 md:h-16 rounded-full' src={logo} alt="" />
                    <h1 className="text-xs md:text-4xl md:font-bold">Car Zone <span className='text-secondary'>Kids</span></h1>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-2xl font-bold gap-x-10">
                   {navText}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex items-center gap-5 relative'>
                        <div className=''>
                            {
                                user.photoURL && <img className='w-12 h-12 rounded-full' src={user.photoURL} onMouseEnter={() => setNameVisible(true)} onMouseLeave={() => setNameVisible(false)} alt="" />
                            }
                            <p className='absolute t-0 text-lg font-semibold'>{nameVisible && <span className="user-name">{user?.displayName}</span>}</p>
                        </div>
                        <button onClick={handleLogout} className='border border-secondary hover:bg-pink-600 hover:border-none px-2 md:px-7 py-1 lg:py-2 text-xs md:text-xl text-white'>Sign Out</button>
                    </div> :
                        <div className='text-secondary'>
                            <ActiveLink to='/login'><div className='border border-secondary hover:bg-pink-600 hover:border-none px-2 md:px-7 py-1 lg:py-2 text-xs md:text-xl text-white'>
                                Login
                            </div></ActiveLink>
                        </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;