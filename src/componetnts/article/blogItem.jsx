import MyContext from "@/context";
import Request from "@/requestHandler/Request";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import * as shamsi from 'shamsi-date-converter';
import Swal from "sweetalert2/dist/sweetalert2";


function BlogItem({ item }) {
    const { loading, setLoading } = useContext(MyContext)
    const [chechAdmin, setCheckAdmin] = useState("")

    const handelDeleteArticle = async () => {
        setLoading(true)
        try {
            const data = await Request(`delete-article/${item._id}`, "DELETE")
            Swal.fire({
                icon: data.notification.success ? "success" : "error",
                text: data.notification.message,
            });
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }

    const hadnleChekAuth = async () => {
        try {
            const data = await Request('check-auth', "GET")
            data.notification.username === "sobhan" ? setCheckAdmin(data.notification.username) : setCheckAdmin("")
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        hadnleChekAuth()
    }, [])

    return (
        <>
            <Link href={`/articles/${item._id}`}>
                <div className=" w-full h-auto rounded-lg overflow-hidden">
                    <div className=" w-full h-full flex mdmax:flex-col bg-gray-200">
                        <div className=" flex items-center">
                            <img className=" max-w-[150px] mdmax:max-w-full h-full object-cover rounded-lg" src={item.img} alt="" />
                        </div>
                        <div className=" p-3">
                            <div className=" flex justify-between py-2">
                                <h2 className=" font-bold">{item.title}</h2>
                                <span>{shamsi.gregorianToJalali(item.createdAt).join('/')}</span>
                            </div>
                            <p className=" text-sm">{item.text.slice(0 , 500)}</p>
                        </div>
                    </div>
                </div>
            </Link>
            {
                chechAdmin === "sobhan" &&
                <div>
                    <button onClick={() => handelDeleteArticle()} className=" bg-red-500 text-white p-1 rounded-md">حذف مقاله</button>
                </div>
            }
        </>
    );
}

export default BlogItem;