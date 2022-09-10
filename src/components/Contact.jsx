import stylesjs from '../stylesjs';

const Contact = () => (
    <section id='contact' className={`${stylesjs.flexCenter} ${stylesjs.marginY} ${stylesjs.padding} 
        sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className='flex-1 flex flex-col md:items-start items-center'>
            <h2 className={stylesjs.heading2}>Contact</h2>
            <p className={`${stylesjs.paragraph} max-w-[470px] mt-5`}>Form here</p>
        </div>
        <div className={`${stylesjs.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>

            <div className="flex md:mr-4 mr-4 p-4">
                <div className={`${stylesjs.flexCenter} w-[127px] h-[57px] rounded-[17px] bg-blue-gradient p-1 cursor-pointer`}>
                    <div className={`${stylesjs.flexCenter} flex-col bg-black-gradient w-[100%] h-[100%] rounded-[17px]`}>
                        <div className={`${stylesjs.flexStart}`}>
                            <p className="font-poppins font-medium leading-[23px] text-[17px] text-gradient">Send</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
)

export default Contact