import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';



function Navbar() {
    const router = useRouter();

    const { project } = router.query


    const [arr, setArr] = useState([
        { link: "/projects/project1", active: true, text: "پروژه ویپ", img: "../../images/projects/voip.png" },
        { link: "/projects/project2", active: false, text: "اینترنت رادیویی", img: "../../images/projects/antenna.png" },
        { link: "/projects/project3", active: false, text: "آرایش رک", img: "../../images/projects/server.png" },
        { link: "/projects/project4", active: false, text: "زیر ساخت", img: "../../images/projects/infrastructure.png" },
    ])

    useEffect(() => {
        const updatedArr = arr.map((item, i) => ({ ...item, active: item.link.split("/")[2] === project ? true : false }));
        setArr(updatedArr);
    }, [router])
    return (
        <div className="project-navbar flex justify-center">
            <div className=" w-full h-full max-w-[1000px] flex gap-3 justify-center flex-wrap">
                <ul className=" flex p-3 gap-3 border border-gray-300 rounded-md bg-white mx-3">
                    {
                        arr.map((item, i) => {
                            return (
                                <li key={i} className={`${item.active ? "bg-red-500 text-white" : "bg-white"} text-sm  p-2 text-center rounded-md`}>
                                    <Link href={item.link}>
                                        {item.text}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Navbar;