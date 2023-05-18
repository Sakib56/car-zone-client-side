import React from 'react';
import logo from '../../assets/logo.jpg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-secondary text-white text-lg">
            <div>
                <img className='h-20 w-20 rounded-full' src={logo} alt="" />
                <p>Car Zone Kids Ltm.<br />Providing reliable store since 1992</p>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Store Information</span>
                <p>Address: Uttara Sector 12 park - Dhaka</p>
                <p>Email: carzonekids@shop.com</p>
                <p>Tele: (+88) 9276-543-210</p>
                
            </div>
        </footer>
    );
};

export default Footer;