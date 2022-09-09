import {useState} from 'react'
import {logo, menu, close, menugif} from '../assets';
import {navigation} from '../constcontent';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="Andre's logo" className="w-[72px] h-[72px]"/>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navigation.map((nav, index) => (
                    <li key={nav.id} className={`font-poppins 
                    font-normal 
                    cursor-pointer 
                    text-[17px] 
                    text-white
                    ${index === navigation.length-1 ? 'mr-0' : 'mr-10'}`}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu} alt='menu' className='w-[43px] h-[43px] object-contain cursor-pointer'
                onClick={() => setToggle((prev) => !prev)}/>
            </div>

            <div className={`${toggle ? 'flex' : 'hidden'} p-7 bg-black-gradient box-shadow absolute top-20 right-0 mx-4 my-7 min-w-[140] rounded-xl sidebar`}>

                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    {navigation.map((nav, index) => (
                        <li key={nav.id} className={`font-poppins 
                        font-normal 
                        cursor-pointer 
                        text-[17px] 
                        text-white
                        ${index === navigation.length-1 ? 'mr-0' : 'mb-3'}`}>
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    )
}

export default Navbar