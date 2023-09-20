import { Link } from "react-router-dom"

import logo from "../../assets/logo.svg"
import Facebook from "../../assets/icon-facebook.svg"
import Twitter from "../../assets/icon-twitter.svg"
import Pinterest from "../../assets/icon-pinterest.svg"
import Instagram from "../../assets/icon-instagram.svg"

import TextCommon from "../Texts/TextCommom"

export default function Footer() {
    return (
        <footer className="
            bg-black py-20 mt-14 flex flex-col gap-10 items-center text-center
            lg:px-32 lg:grid lg:grid-cols-2 lg:grid-rows-2
            ">
            <div className="lg:order-1">
                <img src={logo} alt="" />
            </div>
            <div className="
                flex flex-col items-center text-center gap-4
                lg:flex-row lg:order-3
                ">
                <Link to="/" className="text-gray-400 hover:text-gray-200 transition-colors hover:border-b-2 hover:border-b-slate-100 hover:pb-1">About</Link>
                <Link to="/" className="text-gray-400 hover:text-gray-200 transition-colors hover:border-b-2 hover:border-b-slate-100 hover:pb-1">Careers</Link>
                <Link to="/" className="text-gray-400 hover:text-gray-200 transition-colors hover:border-b-2 hover:border-b-slate-100 hover:pb-1">Events</Link>
                <Link to="/" className="text-gray-400 hover:text-gray-200 transition-colors hover:border-b-2 hover:border-b-slate-100 hover:pb-1">Products</Link>
                <Link to="/" className="text-gray-400 hover:text-gray-200 transition-colors hover:border-b-2 hover:border-b-slate-100 hover:pb-1">Support</Link>
            </div>
            <div className="
                flex justify-center items-center gap-4
                lg:justify-end lg:order-2
                ">
                <img className="hover:border-b-2 hover:border-b-slate-100 hover:pb-1" src={Facebook} alt="" />
                <img className="hover:border-b-2 hover:border-b-slate-100 hover:pb-1" src={Twitter} alt="" />
                <img className="hover:border-b-2 hover:border-b-slate-100 hover:pb-1" src={Pinterest} alt="" />
                <img className="hover:border-b-2 hover:border-b-slate-100 hover:pb-1" src={Instagram} alt="" />
            </div>
            <div className="lg:order-4 lg:text-end">
                <TextCommon 
                    className="text-gray-600" 
                    text="© 2023 Loopstudios. All rights reserved." />
            </div>
        </footer>
    )
}