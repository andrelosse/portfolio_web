import stylesjs from "../stylesjs";

const ContactIcon = () => (
        <div className={`${stylesjs.flexCenter} w-[140px] h-[75px] rounded-3xl bg-blue-gradient p-1 cursor-pointer`}>
            <div className={`${stylesjs.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-3xl`}>
                <div className={`${stylesjs.flexStart}`}>
                    <p className="font-poppins font-medium leading-[23px] text-[17px] text-gradient">Contact</p>
                </div>
            </div>
        </div>
    )

export default ContactIcon