import stylesjs from '../stylesjs';

const Contact = () => (
    <section id='contact' className={`${stylesjs.flexCenter} ${stylesjs.marginY} ${stylesjs.padding} 
        sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow md:mr-24 mr-0 md:ml-24 ml-0`}>

        <div className='flex-1 flex md:flex-row flex-col md:items-start items-center justify-center'>
            <div className='md:mr-44 mr-0'>
                <h2 className={stylesjs.heading2}>Contact</h2>
            </div>

            <div className='contact'>
                <form action='post' className={`${stylesjs.paragraph}`}>
                    <fieldset>
                        <label for='name' className='contact'>Name:</label>
                        <input type='text' name='name' id='name' placeholder='First Last' />
                        <label for='email' className='contact'>Email:</label>
                        <input type='email' name='email' id='email' placeholder='email@email.com' />
                        <div className={`${stylesjs.flexCenter} flex-col`}>
                            <label className='message'>Your message:</label>
                            <textarea className='message rounded-2xl' type='textfield' placeholder='Message...'></textarea>
                        </div>
                    </fieldset>

                    <div className='flex items-start justify-center mt-4'>

                        <div className={`${stylesjs.flexCenter} w-[120px] h-[57px] rounded-3xl bg-blue-gradient p-1 cursor-pointer font-poppins leading-[23px] text-[17px] font-bold sendbutton`}>
                            <label className='flex justify-center items-center cursor-pointer rounded-3xl'></label>Send<input></input>
                        </div>

                    </div>

                </form>
            </div>

        </div>
    </section>
)

export default Contact