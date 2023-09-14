import TextCommon from "../Texts/TextCommom";

export default function GridImage({className, text}) {
    return (
        <div className={className}>
            <TextCommon className="
                font-light text-2xl text-slate-100 absolute left-5 bottom-5 w-28
                lg:text-4xl lg:w-44 lg:left-10 lg:bottom-10
                " text={text} />
        </div>
    )
}