import stylesjs from "../stylesjs";
import ContactIcon from "../components/ContactIcon";

const Main = () => (
        <section id="home" className={`flex md:flex-row flex-col ${stylesjs.paddingY}`}>
            <div className={`flex-1 ${stylesjs.flexStart} flex-col xl:px-16 px-6`}>
                <div className="flex flex-row justify-between items-center">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white
                    ss:leading-[100px] leading-[75px]">
                        Welcome <br className="sm:block hidden"/> to my <br className="sm:block hidden"/> {" "}
                        <span className="text-gradient">portfolio</span>
                    </h1>

                    <div className="ss:flex hidden md:mr-4 mr-4 p-4">
                        <ContactIcon/>
                    </div>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[67px] text-[52px] text-white
                    ss:leading-[100px] leading-[75px] w-full"></h1>
                
                <p className={`${stylesjs.paragraph} max-w-[470px] mt-5`}>
                    Computer engineer student and developer <br/>.NET | C# | Python | React.js
                </p>

            </div>
        </section>
    )

export default Main