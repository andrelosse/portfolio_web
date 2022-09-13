import { projects } from '../constcontent';
import stylesjs from "../stylesjs";
import ProjectCard from './ProjectCard';
import ShowMore from './ShowMore';

const Projects = () => (
    <section id="projects" className={`${stylesjs.paddingY} ${stylesjs.flexCenter} flex-col relative`}>
        <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />
        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
            <h1 className={stylesjs.heading2}>Projects<br className='sm:block hidden' /></h1>
            <div className='w-full md:mt-0 mt-6'>
                <p className={`${stylesjs.paragraph} text-left max-w-[575px]`}>Personal projects made during courses or independently to gain experience. All of them are on Github.</p>
            </div>
        </div>

        <div className="showoption">

            <input id='ch' type='checkbox'></input>
            <label for='ch' className='ml-[40%] flex items-center justify-center cursor-pointer font-poppins font-medium leading-[23px] text-[17px] bg-blue-gradient w-[140px] h-[75px] rounded-3xl'></label>
            <div className='flex flex-wrap sm:justify-start justify-center w-full project-container relative z-[1] showprojs'>
                {projects.map((card) => (
                    <ProjectCard key={card.id} {...card} />
                ))}
            </div>
        </div>

    </section>
)

export default Projects