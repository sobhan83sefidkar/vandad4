import { useState } from "react"

function DescF({ item }) {
    const { projects } = item
    const [imgSrc, setImgSrc] = useState("")
    const [popup, setPopup] = useState(false)

    const handlePopupPage = (img) => {
        setImgSrc(img)
        setPopup(true)
    }

    if (!projects) {
        return
    }
    return (
        <div className=" w-full h-full flex flex-wrap gap-5 mt-5 justify-center">
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
                        <img onClick={() => handlePopupPage(item.img)} className=" w-[300px] max-h-96 object-cover" key={i} src={item.img} alt="" />
                    )
                })
            }
        </div>
    );
}

export default DescF;