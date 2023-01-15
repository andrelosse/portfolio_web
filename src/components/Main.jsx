import stylesjs from "../stylesjs";
import { bgmain } from "../assets";

const Main = () => (
    <section id="home" className={`flex md:flex-row flex-col md:ml-10 ml-0 md:mr-10 mr-0 ${stylesjs.paddingY}`}>
        <div className={`flex-1 ${stylesjs.flexStart} flex-col xl:px-16 px-6`}>
            <div className="flex flex-row justify-between items-center">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white
                    ss:leading-[100px] leading-[75px]">
                    Welcome <br className="sm:block hidden" /> to my <br className="sm:block hidden" /> {" "}
                    <span className="text-gradient">portfolio</span>
                </h1>

                <div className="md:flex hidden md:mr-4 mr-4 p-4">

                    <div className={`${stylesjs.flexCenter} w-[140px] h-[75px] rounded-3xl bg-blue-gradient p-1 cursor-pointer`}>
                        <div className={`${stylesjs.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-3xl animbutton`}>
                            <div className={`${stylesjs.flexStart}`}>
                                <a href="#contact">
                                    <p className="font-poppins font-medium leading-[23px] text-[17px] text-gradient">Contact</p></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <p className={`${stylesjs.paragraph} max-w-[470px] mt-5 md:mb-0 mb-5`}>
                Computer engineer student and developer <br />.NET | C# | Python | React.js
            </p>

        </div>

        <div className="relative">
            
            <img src={bgmain} alt="Main Background Image" className=" bgmain -left-[34%] relative z-[5]" />

            <div className="absolute z-[0] w-[27%] h-[27%] right-20 bottom-20 pink__gradient" />
            <div className="absolute z-[1] h-[27%] w-[57%] right-20 bottom-20 white__gradient" />
            <div className="absolute z-[2] w-[57%] h-[57%] right-20 bottom-20 blue__gradient" />

        </div>

    </section>
)

export default Main