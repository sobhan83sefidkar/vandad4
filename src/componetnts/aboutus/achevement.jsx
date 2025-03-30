import { useState } from "react";

function Achevment() {
    const [imgSrc, setImgSrc] = useState("")
    const [popup, setPopup] = useState(false)
    const [achevments, setAchevments] = useState([
        { img: "../../images/loh.jpg", for: "تندیس طلایی رعایت حقوق مصرف‌کنندگان", from: "از سازمان حمایت از حقوق مصرف‌کنندگان و تولیدکنندگان", clicked: false },
        { img: "../../images/loh.jpg", for: "تندیس طلایی رعایت حقوق مصرف‌کنندگان", from: "از سازمان حمایت از حقوق مصرف‌کنندگان و تولیدکنندگان", clicked: false },
        { img: "../../images/loh.jpg", for: "تندیس طلایی رعایت حقوق مصرف‌کنندگان", from: "از سازمان حمایت از حقوق مصرف‌کنندگان و تولیدکنندگان", clicked: false },
        { img: "../../images/loh.jpg", for: "تندیس طلایی رعایت حقوق مصرف‌کنندگان", from: "از سازمان حمایت از حقوق مصرف‌کنندگان و تولیدکنندگان", clicked: false },
        { img: "../../images/loh.jpg", for: "تندیس طلایی رعایت حقوق مصرف‌کنندگان", from: "از سازمان حمایت از حقوق مصرف‌کنندگان و تولیدکنندگان", clicked: false },
        { img: "../../images/loh.jpg", for: "تندیس طلایی رعایت حقوق مصرف‌کنندگان", from: "از سازمان حمایت از حقوق مصرف‌کنندگان و تولیدکنندگان", clicked: false },
    ])

    const handlePopupPage = (img) => {
        setImgSrc(img)
        setPopup(true)
    }

    return (
        <div className="achevment w-full h-auto flex justify-center mt-10">
            <div className="achevment-container w-full h-full max-w-[1100px] flex flex-col">
                {popup &&
                    <div className=" w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#0000008e] z-[969999] flex justify-center items-center" onClick={() => {
                        setPopup(false)
                        setImgSrc("")
                    }}>
                        <img className=" max-w-[500px] smmax:max-w-[300px]" src={imgSrc} alt="" />
                    </div>
                }
                <div className=" flex justify-center">
                    <h2 className=" px-3 py-2 border-b border-gray-400 text-2xl" data-aos="fade-up">دستاورد های ونداد نوین</h2>
                </div>
                <div className=" mt-5 flex flex-wrap justify-evenly">
                    {
                        achevments.map((item, i) => {
                            return (
                                <div key={i} className=" flex gap-5 items-center border-b border-gray-300 px-3 mb-4" data-aos="fade-up">
                                    <div className="achevment-spinner p-1 overflow-hidden">
                                        <div onClick={() => {
                                            item.clicked = true
                                            setAchevments([...achevments])
                                        }} className={`${item.clicked === true ? "" : ""} bg-[rgb(231,231,231)] z-10`}>
                                            <img onClick={() => handlePopupPage(item.img)} className={`w-24`} src={item.img} alt="" />
                                        </div>
                                    </div>
                                    <div className=" flex flex-col">
                                        <span className=" text-sm">{item.for}</span>
                                        <span className=" text-gray-400 text-xs">{item.from}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Achevment;