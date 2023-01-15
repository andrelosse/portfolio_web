import { balls } from '../assets';

const ProjectCard = ({icon, title, content, url}) => (
    <a href={url}><div className="flex justify-between flex-col px-10 py-12 rounded-[20px] w-[357px] h-[375px] md:mr-10 sm:mr-5 mr-0 my-5 project-card">
        <div className='flex flex-row'>
            <img src={balls} alt={title} className="w-[52px] h-[52px] object-contain"/>
            <div className='flex flex-col ml-4'>
                <h4 className='centertext font-poppins font-semibold text-[21px] text-white'>{title}</h4>
            </div>
        </div>
        <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
    </div></a>
)

export default ProjectCard