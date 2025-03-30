import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import Request from "@/requestHandler/Request";
import { useContext } from "react";
import MyContext from "@/context";
import Loading from "../loading/loading";

function Navbar({ setOpenMenu }) {
    const { loading, setLoading } = useContext(MyContext)
    const router = useRouter()
    const [fixedNavbar, setFixedNavbar] = useState(false)
    const [username, setUsername] = useState("")
    const [login, setLogin] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 1) {
                setFixedNavbar(true)
            } else {
                setFixedNavbar(false)
            }
        })
    }, [])

    const handleLogout = async () => {
        setLoading(true)
        const data = await Request("logout", "POST")
        if (data.notification.success) {
            setLogin(false)
            router.push("/")
        }
        setLoading(false)
    }

    const handleCheckAuth = async () => {
        const data = await Request("check-auth", "GET")
        if (data.notification.success) {
            setLogin(true)
            setUsername(data.notification.username)
        }
    }

    useEffect(() => {
        handleCheckAuth()
    }, [router])
    return (
        <>
            {loading &&
                <Loading />
            }
            <div className={`navbar ${fixedNavbar ? "fixed top-0" : "absolute top-0"} left-0 w-full h-[75px] z-[100] p-2 flex justify-center`}>
                <div className="navbar-container relative w-full xlmax:w-[90%] lgmax:w-[95%] h-full flex justify-between px-10 xlmax:px-2 bg-white">
                    <div className=" h-full flex items-center overflow-hidden">
                        <span className=" mdmax:block hidden cursor-pointer" onClick={() => setOpenMenu(true)}>
                            <FiMenu size={30} />
                        </span>
                        <ul className=" flex items-center gap-5 mdmax:hidden text-gray-500 text-sm">
                            <li className=" cursor-pointer">
                                <Link href={`/`}>
                                    صفحه اصلی
                                </Link>
                            </li>
                            <li className=" cursor-pointer">
                                <Link href={"/services"}>
                                    خدمات ما
                                </Link>
                            </li>
                            <li className=" cursor-pointer">
                                <Link href={"/projects/project1"}>
                                    پروژه ها
                                </Link>
                            </li>
                            <li className=" cursor-pointer">
                                <Link href={"/articles"}>
                                    مقاله
                                </Link>
                            </li>
                            <li className=" cursor-pointer">
                                <a href="https://s6.uupload.ir/filelink/iCJ5o0DjNwqU_840b8f4d18/رزومه_فناوری_اطلاعات_ونداد_نوین_f9eo.pdf" target="_blank">دانلودرزومه</a>
                            </li>
                            <li className=" cursor-pointer">
                                <Link href={`/aboutus`}>
                                    درباره ما
                                </Link>
                            </li>
                            <li className=" cursor-pointer">
                                <Link href={"/callus"}>
                                    تماس با ما
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div className=" xlmax:hidden  absolute w-24 z-10 top-[40%] left-[50%] translate-x-[-50%]">
                        <img src="../../images/vandad.webp" alt="" />
                    </div>
                    <div className=" xlmax:hidden  absolute left-[50%] translate-x-[-50%] top-[99%] w-40">
                        <img src="../../images/half-circle.webp" alt="" />
                    </div>
                    {
                        login &&
                        <div className=" flex gap-2">
                            <div className=" flex items-center justify-center text-white">
                                <button onClick={() => handleLogout()} className=" px-3 bg-red-500 py-2 rounded-md">خروج</button>
                            </div>
                            <div className=" text-red-500 font-bold text-2xl h-full flex items-center italic overflow-hidden">
                                <Link href={username === "sobhan" ? "/admin-panel" : `/user-panel/${username}`} className=" counseling">
                                    {username}
                                    <span></span>
                                </Link>
                            </div>
                        </div>
                    }
                    {
                        !login &&
                        <div className=" text-red-500 font-bold text-2xl h-full flex items-center italic overflow-hidden">
                            <Link href={"/login"} className=" counseling">
                                ورود
                                <span></span>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Navbar;