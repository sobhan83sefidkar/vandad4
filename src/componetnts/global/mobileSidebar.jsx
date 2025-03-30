import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

function MobileSidebar({ setOpenMenu, openMenu }) {
    return (
        <div className={`mobile-sidebar duration-700 ${openMenu ? " translate-x-0" : " translate-x-[100%]"} fixed top-0 left-0 w-[100vw] h-[100vh] bg-gray-100 z-[100]`}>
            <div className="mobile-sidebar-container w-full h-full ">
                <div className=" w-full h-12 flex items-center justify-end px-4">
                    <span className=" cursor-pointer" onClick={() => setOpenMenu(false)}>
                        <IoCloseSharp size={30} />
                    </span>
                </div>
                <ul className=" flex flex-col items-start text-gray-500 text-sm">
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">
                        <Link href={"/"} onClick={() => setOpenMenu(false)}>
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">
                        <Link href={"/services"} onClick={() => setOpenMenu(false)}>
                            خدمات ما
                        </Link>
                    </li>
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">
                        <Link href={"/projects/project1"} onClick={() => setOpenMenu(false)}>
                            پروژه ها
                        </Link>
                    </li>
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">
                        <Link href={"/articles"} onClick={() => setOpenMenu(false)}>
                            مقاله
                        </Link>
                    </li>
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">
                        <a href="https://s6.uupload.ir/filelink/iCJ5o0DjNwqU_840b8f4d18/رزومه_فناوری_اطلاعات_ونداد_نوین_f9eo.pdf" target="_blank" rel="noopener noreferrer">دانلود رزومه</a>
                    </li>
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">
                        <Link href={"/aboutus"} onClick={() => setOpenMenu(false)}>
                            درباره ما
                        </Link>
                    </li>
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">
                        <Link href={"/callus"} onClick={() => setOpenMenu(false)}>
                            تماس با ما
                        </Link>
                    </li>
                </ul>
                <div className=" w-full h-auto flex justify-center">
                    <img className=" w-48" src="../../images/vandad.webp" alt="" />
                </div>
            </div>
        </div>
    );
}

export default MobileSidebar;