import stylesjs from '../stylesjs';
import Button from './Button';

const Contact = () => (
        <section className={`${stylesjs.flexCenter} ${stylesjs.marginY} ${stylesjs.padding} 
        sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
            <div className='flex-1 flex flex-col'>
                <h2 className={stylesjs.heading2}>Contact</h2>
                <p className={`${stylesjs.paragraph} max-w-[470px] mt-5`}>Links here</p>
            </div>
            <div className={`${stylesjs.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button/>
            </div>
        </section>
    )

export default Contact