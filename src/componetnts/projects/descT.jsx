import { useState } from "react"


function DescT({ item }) {
    const { projects } = item
    const [imgSrc, setImgSrc] = useState("")
    const [popup, setPopup] = useState(false)

    const handlePopupPage = (img) => {
        setImgSrc(img)
        setPopup(true)
    }

    return (
        <div className=" w-full h-full flex flex-col gap-5 mt-5">
            {popup &&
                <div className=" w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#0000008e] z-[969999] flex justify-center items-center" onClick={() => {
                    setPopup(false)
                    setImgSrc("")
                }}>
                    <img className=" max-w-[500px] smmax:max-w-[300px]" src={imgSrc} alt="" />
                </div>
            }
            {
                projects.map((item, i) => {
                    return (
                        <div key={i} className=" w-full h-auto rounded-lg overflow-hidden px-2">
                            <div className=" w-full h-full flex mdmax:flex-col border border-gray-300">
                                <div className=" max-w-[150px] min-w-[150px] mdmax:max-w-full flex justify-center">
                                    <img onClick={() => handlePopupPage(item.img)} className=" w-full h-full max-h-44 smmax:max-h-96 rounded-lg object-cover" src={item.img} alt="" />
                                </div>
                                <div className=" p-3">
                                    <div className=" flex justify-between py-2">
                                        <h2 className=" font-bold">{item.title}</h2>
                                    </div>
                                    <p className=" text-sm mt-7">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default DescT;