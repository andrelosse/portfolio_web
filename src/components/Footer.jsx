import stylesjs from "../stylesjs";
import { logo, linkedin, github } from "../assets";
import { link } from "../constcontent";

const Footer = () => (
        <section className={`${stylesjs.flexCenter} ${stylesjs.paddingY} flex-col`}>
            <div className={`${stylesjs.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-1 flex flex-col justify-start mr-10">
                    <img src={ logo } alt="Andre's logo" className="w-[57px] h-[57px] object-contain"/>
                    <p className={`${stylesjs.paragraph} mt-7 max-w-[275px]`}>That's it for now, come back later to see the more projects!</p>
                </div>

                <div className="flex-[0.7] w-full flex flex-row justify-evenly flex-wrap md:mt-0 mt-10">
                    {link.map((footerlink) => (
                        <a href={footerlink.content} target="_blank" rel="noopener noreferrer"><img key={footerlink.id} src={footerlink.icon} alt={footerlink.title} className={`w-[57px] h-[57px] object-contain cursor-pointer`}/></a>
                    ))}
                </div>

            </div>
        </section>
    )

export default Footer