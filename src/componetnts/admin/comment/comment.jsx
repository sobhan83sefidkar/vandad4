import Request from "@/requestHandler/Request"
import { useEffect, useState } from "react"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md";


function Comment() {
    const [comment, setComment] = useState([])
    const handleGetComment = async () => {
        try {
            const data = await Request("get-comment", "GET")
            setComment(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleGetComment()
    }, [])

    const handleAcceptComment = async (id) => {
        try {
            const data = await Request(`show-comment/${id}`, "PUT")
            Swal.fire({
                icon: data.notification.success ? "success" : "error",
                text: data.notification.message,
            });
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className=" w-full h-auto flex flex-col gap-2 max-h-[500px] overflow-y-scroll">
            <h2 className=" text-2xl text-center">کامنت مقالات</h2>
            {
                comment.length >= 1 &&
                comment.map((item, i) => {
                    return (
                        <div key={i} className=" flex flex-col gap-4 border border-gray-400 p-2">
                            <div className=" flex gap-2">
                                {
                                    item.isShow &&
                                    <MdDone fill="green"/>
                                }
                                {
                                    !item.isShow &&
                                    <IoClose fill="red"/>
                                }
                                <span> نام : {item.name}</span>
                            </div>
                            <p className=" text-sm"> کامنت : {item.comment}</p>
                            <span> برای مقاله : {item?.articleId?.title ? item?.articleId?.title : "این مقاله حذف شده"}</span>
                            <button className=" max-w-max bg-red-500 p-2 rounded-lg text-white hover:bg-red-700" onClick={() => handleAcceptComment(item._id)}>تایید کامنت</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Comment;