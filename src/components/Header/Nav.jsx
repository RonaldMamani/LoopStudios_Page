import logo from "../../assets/logo.svg"
import menu from "../../assets/icon-hamburger.svg"
import close from "../../assets/icon-close.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import NavBarDesk from "./NavBar"

export default function Nav() {
    const [Open,setOpen] = useState(false)

    return (
        <nav className="
            my-5 mx-5 flex justify-between items-center
            md:p-10
            lg:mx-28
            ">
            <img src={logo} alt="" />
            <button className="lg:hidden" onClick={() => {setOpen(!Open)}}>
                {Open ? (
                    <>
                        <img src={menu} alt="" />
                    </>
                ) : (
                    <div className="bg-black transition-colors  absolute h-screen w-screen left-0 top-0">
                        <div className="flex justify-between items-center m-5 md:p-10">
                                <img className="" src={logo} alt="" />
                                <img className="" src={close} alt="" />                           
                        </div>
                        <div className="mx-5 mt-32 text-start flex flex-col gap-5 md:p-10 ">
                            <Link to="/" className="text-3xl text-slate-100 font-light uppercase hover:font-bold">About</Link>
                            <Link to="/" className="text-3xl text-slate-100 font-light uppercase hover:font-bold">Careers</Link>
                            <Link to="/" className="text-3xl text-slate-100 font-light uppercase hover:font-bold">Events</Link>
                            <Link to="/" className="text-3xl text-slate-100 font-light uppercase hover:font-bold">Products</Link>
                            <Link to="/" className="text-3xl text-slate-100 font-light uppercase hover:font-bold">Support</Link>
                        </div>
                    </div>
                )}
            </button>
            <NavBarDesk />
        </nav>
    )
}