import stylesjs from "../stylesjs";

const ShowMore = () => (

    <section className="flex md:mr-4 mr-4 p-4 justify-center text-center">

        <div className={`${stylesjs.flexCenter} w-[140px] h-[75px] rounded-3xl bg-blue-gradient p-1 cursor-pointer`}>
            <div className={`${stylesjs.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-3xl`}>
                <div className={`${stylesjs.flexStart}`}>
                <p id="button"></p>
                </div>
            </div>
        </div>

    </section>

)

export default ShowMore