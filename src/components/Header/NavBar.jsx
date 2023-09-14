import { Link } from "react-router-dom";

export default function NavBarDesk() {
    return (
        <nav className="max-[1023px]:hidden flex items-center gap-14">
            <Link to="/" className="text-gray-100 transition-colors hover:font-bold hover:border-b-2 hover:border-b-slate-100 hover:pb-1">About</Link>
            <Link to="/" className="text-gray-100 transition-colors hover:font-bold hover:border-b-2 hover:border-b-slate-100 hover:pb-1">Careers</Link>
            <Link to="/" className="text-gray-100 transition-colors hover:font-bold hover:border-b-2 hover:border-b-slate-100 hover:pb-1">Events</Link>
            <Link to="/" className="text-gray-100 transition-colors hover:font-bold hover:border-b-2 hover:border-b-slate-100 hover:pb-1">Products</Link>
            <Link to="/" className="text-gray-100 transition-colors hover:font-bold hover:border-b-2 hover:border-b-slate-100 hover:pb-1">Support</Link>
        </nav>
    )
}