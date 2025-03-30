import Header from "@/componetnts/aboutus/header";
import Navbar from "@/componetnts/projects/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Layout({children}) {
    useEffect(() => {
        // راه‌اندازی AOS
        AOS.init({
          duration: 1000, // مدت زمان انیمیشن
          once: true, // آیا انیمیشن فقط یک بار اجرا شود؟
        });
      }, []);
    return (
        <>
            <Header/>
            <Navbar />
            <div className=" w-[100vw] flex flex-col items-center">
                {children}
            </div>
        </>
    );
}

export default Layout;