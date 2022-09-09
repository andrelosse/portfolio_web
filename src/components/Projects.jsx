import { projects } from '../constcontent';
import stylesjs, {layout} from "../stylesjs";
import Button from './Button';
import ProjectCard from './ProjectCard';

const Projects = () =>(
    <section id="projects" className={`${stylesjs.paddingY} ${stylesjs.flexCenter} flex-col relative`}>
        <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
            <h1 className={stylesjs.heading2}>Projects<br className='sm:block hidden'/></h1>
            <div className='w-full md:mt-0 mt-6'>
                <p className={`${stylesjs.paragraph} text-left max-w-[575px]`}>Personal projects made during courses or independently to gain experience. All of them are on Github.</p>
            </div>
        </div>

        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
            {projects.map((card) => (
                <ProjectCard key={card.id} {...card}/>
            ))}
        </div>

    </section>
)

export default Projects