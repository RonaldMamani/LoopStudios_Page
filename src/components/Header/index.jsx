import Title from "../Texts/Title";
import Nav from "./Nav";
import NavBarDesk from "./NavBar";

export default function Header() {
    return (
        <div className="
            bg-[url('./assets/mobile/image-hero.jpg')] bg-cover h-screen flex flex-col relative
            lg:bg-[url('./assets/desktop/image-hero.jpg')] lg:p
            ">
            <Nav />
            <div className="
                mt-32 mx-6
                md:px-10
                lg:px-32 lg:mt-20
                ">
                <Title className="
                    text-slate-50 text-5xl font-light border-2 py-5 px-8
                    md:w-[60%] md:p-10 md:border-4
                    lg:w-[90%] lg:text-8xl lg:px-16
                    xl:w-[65%]
                    " text="IMMERSIVE EXPERIENCES THAT DELIVER" 
                />
                <div></div>
            </div>
        </div>
    )
}