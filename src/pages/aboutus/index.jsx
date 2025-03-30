import Achevment from "@/componetnts/aboutus/achevement";
import Description from "@/componetnts/aboutus/description";
import Header from "@/componetnts/aboutus/header";
import Team from "@/componetnts/aboutus/team";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

function Aboutus() {
    useEffect(() => {
        // راه‌اندازی AOS
        AOS.init({
            duration: 1000, // مدت زمان انیمیشن
            once: true, // آیا انیمیشن فقط یک بار اجرا شود؟
        });
    }, []);
    return (
        <div className=" w-[100vw] flex flex-col items-center">
            <Header />
            <Description />
            <Team />
            <Achevment />
        </div>
    );
}

export default Aboutus;