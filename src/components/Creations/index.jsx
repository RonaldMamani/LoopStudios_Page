import Button from "../Buttons/Button";
import Title from "../Texts/Title";
import GridImage from "./GridImage";

export default function Creations() {
    return (
        <section className="
            mx-5 py-20 flex flex-col gap-10
            md:px-10 md:gap-12
            lg:px-32 lg:gap-20
            ">
            <div className="lg:flex lg:justify-between">
                <Title className="font-light text-4xl text-center lg:text-5xl" text="OUR CREATIONS" />
                <Button className="
                    max-[1023px]:hidden
                    px-14 py-2 border-2 border-slate-950 text-slate-900 text-lg font-semibold
                    hover:bg-slate-950 hover:text-slate-100 transition-colors" content="SEE ALL" />
            </div>
            <div className="
                grid grid-rows-[repeat(8,minmax(0,1fr))] gap-5
                lg:grid-cols-4
                ">
                <GridImage className="
                    bg-[url('./assets/mobile/image-deep-earth.jpg')] bg-cover bg-center bg-no-repeat relative
                    hover:opacity-40 cursor-pointer transition-opacity
                    lg:row-span-4 lg:bg-[url('./assets/desktop/image-deep-earth.jpg')] lg:h-[75vh]
                    " text="DEEP EARTH" />
                <GridImage className="
                    bg-[url('./assets/mobile/image-night-arcade.jpg')] bg-cover bg-center bg-no-repeat relative
                    hover:opacity-40 cursor-pointer transition-opacity
                    lg:row-span-4 lg:bg-[url('./assets/desktop/image-night-arcade.jpg')]
                    " text="NIGHT ARCADE" />
                <GridImage className="
                    bg-[url('./assets/mobile/image-soccer-team.jpg')] bg-cover bg-center bg-no-repeat relative
                    hover:opacity-40 cursor-pointer transition-opacity
                    lg:row-span-4 lg:bg-[url('./assets/desktop/image-soccer-team.jpg')]
                    " text="SOCCER TEAM VR" />
                <GridImage className="
                    bg-[url('./assets/mobile/image-grid.jpg')] bg-cover bg-center bg-no-repeat p-16 relative
                    hover:opacity-40 cursor-pointer transition-opacity
                    lg:row-span-4 lg:bg-[url('./assets/desktop/image-grid.jpg')]
                    " text="THE GRID" />
                <GridImage className="
                    bg-[url('./assets/mobile/image-from-above.jpg')] bg-cover bg-center bg-no-repeat relative
                    hover:opacity-40 cursor-pointer transition-opacity
                    lg:row-span-4 lg:bg-[url('./assets/desktop/image-from-above.jpg')]
                    " text="FROM UP ABOVE VR" />
                <GridImage className="
                    bg-[url('./assets/mobile/image-pocket-borealis.jpg')] bg-cover bg-center bg-no-repeat relative
                    hover:opacity-40 cursor-pointer transition-opacity
                    lg:row-span-4 lg:bg-[url('./assets/desktop/image-pocket-borealis.jpg')]
                    " text="POCKET BOREALIS" />
                <GridImage className="
                    bg-[url('./assets/mobile/image-curiosity.jpg')] bg-cover bg-center bg-no-repeat relative
                    hover:opacity-40 cursor-pointer transition-opacity
                    lg:row-span-4 lg:bg-[url('./assets/desktop/image-curiosity.jpg')]
                    " text="THE CURIOSITY" />
                <GridImage className="
                    bg-[url('./assets/mobile/image-fisheye.jpg')] bg-cover bg-center bg-no-repeat relative
                    hover:opacity-40 cursor-pointer transition-opacity
                    lg:row-span-4 lg:bg-[url('./assets/desktop/image-fisheye.jpg')]
                    " text="MAKE IT FISHEYE" />
            </div>
            <div className="flex justify-center lg:hidden">
                <Button className="
                    px-14 py-2 border-2 border-slate-950 text-slate-900 text-lg font-semibold
                    hover:bg-slate-950 hover:text-slate-100 transition-colors
                    " content="SEE ALL" />
            </div>
        </section>
    )
}