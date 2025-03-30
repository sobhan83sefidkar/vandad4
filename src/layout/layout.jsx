import MobileSidebar from "@/componetnts/global/mobileSidebar";
import Navbar from "@/componetnts/global/navbar";
import Footer from "@/componetnts/global/footer";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'sweetalert2/src/sweetalert2.scss'



function Layout({ children }) {
    const [openMenu , setOpenMenu] = useState(false)
    const [backToTop , setBackToTop] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll" , () => {
            if(window.scrollY >= 100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })
    } , [])
    useEffect(() => {
        // راه‌اندازی AOS
        AOS.init({
          duration: 1000, // مدت زمان انیمیشن
          once: true, // آیا انیمیشن فقط یک بار اجرا شود؟
        });
      }, []);
    return (
        <div className=" app app max-w-[1535px] 2xlmax:w-full h-auto">
            <div className="app-container w-full h-full flex items-center flex-col">
                <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
                <MobileSidebar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
                <a href="#" className={`  ${backToTop ? " opacity-1 visible" : " opacity-0"} fixed transition-all bottom-5 left-5 z-[99] bg-red-600 p-2 rounded-full`} >
                    <IoIosArrowUp size={25} fill="white"/>
                </a>
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
        </div>
    );
}

export default Layout;