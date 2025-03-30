import { IoIosArrowBack  } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";



function Slogan() {
    return (
        <div className="slogan w-full h-auto flex justify-center mt-28">
            <div className="slogan-container w-full h-full max-w-[1300px] text-center">
                <div
                    className="mx-auto w-full max-w-96 relative flex flex-col items-center justify-center text-center overflow-visible"
                >
                    <h3 className="text-2xl font-bold mb-3">صمیمانه در کنار شما هستیم!</h3>
                    <div className="w-full relative flex flex-col items-center justify-center">
                        <div
                            className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[2px] w-full blur-sm"
                        ></div>
                        <div
                            className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-full"
                        ></div>

                        <div
                            className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"
                        ></div>
                    </div>
                    <div className=" flex py-5 gap-2 items-center">
                        <div data-aos="fade-left">تخصص بالا</div>
                        <span data-aos="fade-left" data-aos-delay="150"><FaPlus size={15}/></span>
                        <div data-aos="fade-left" data-aos-delay="300">اتصال مطمئن</div>
                        <span data-aos="fade-left" data-aos-delay="450"><FaPlus size={15}/></span>
                        <div data-aos="fade-left" data-aos-delay="600">امنیت برتر</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Slogan;