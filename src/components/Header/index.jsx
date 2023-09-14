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
                mt-36 mx-6
                md:p-10
                lg:px-32 lg:mt-20
                ">
                <Title className="
                    text-slate-50 text-5xl font-light border-2 py-5 px-8
                    md:w-[60%] lg:text-8xl md:border-4 lg:py-8
                    " text="IMMERSIVE EXPERIENCES THAT DELIVER" />
            </div>
        </div>
    )
}