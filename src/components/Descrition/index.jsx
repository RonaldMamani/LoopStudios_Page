import SubTitle from "../Texts/SubTitle";
import TextCommon from "../Texts/TextCommom";

export default function Descrition() {
    return (
        <section className="
            mx-5 my-20 grid grid-rows-2 gap-5
            md:p-10 sm:grid-rows-3
            lg:p-32 lg:relative lg:grid-cols-3 lg:grid-rows-1
            ">
            <div className="
                bg-[url('./assets/mobile/image-interactive.jpg')] bg-contain bg-center bg-no-repeat
                md:bg-[url('./assets/desktop/image-interactive.jpg')] sm:row-span-2
                lg:bg-cover lg:col-span-2 lg:h-[80vh]
            "></div>
            <div className="max-[1023px]:hidden"></div>
            <div className="
                text-center flex flex-col gap-4
                lg:absolute lg:px-24 lg:pt-20 lg:gap-10 lg:text-start lg:bg-slate-100 lg:w-[45%] lg:bottom-32 lg:right-10
                ">
                <SubTitle 
                    className="text-4xl uppercase font-light lg:text-6xl" 
                    text="The leader in interactive VR" />
                <TextCommon 
                    className="text-gray-500 px-3" 
                    text="Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand." />
            </div>
        </section>
    )
}