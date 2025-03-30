import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Request from "@/requestHandler/Request";
import MyContext from "@/context";
import Swal from "sweetalert2/dist/sweetalert2";

function Comments() {
    const { loading, setLoading } = useContext(MyContext)
    const router = useRouter()
    const [addComment, setAddComment] = useState({
        articleId: router.query.article,
        name: "",
        comment: ""
    })
    const [comment, setComment] = useState([])

    const handleAddComment = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const data = await Request("add-comment", "POST", addComment)
            Swal.fire({
                icon: data.notification.success ? "success" : "error",
                text: data.notification.message,
            });
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }

    const handleGetComment = async () => {
        try {
            const data = await Request(`get-show-comment/${router.query.article}`)
            setComment(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleGetComment()
    }, [router])

    return (
        <div className=" w-full h-auto">
            <div className=" w-full h-full">
                <div className=" flex justify-center">
                    <h2 className=" text-2xl font-bold border-b border-gray-400">دیدگاه ها</h2>
                </div>
                <div className=" flex lgmax:flex-col my-5">
                    <div className=" w-[30%] lgmax:w-full">
                        <form className="bg-white w-full h-max p-6 rounded-lg shadow-md" onSubmit={(e) => handleAddComment(e)}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                                    نام
                                </label>
                                <input
                                    required
                                    onChange={(e) => setAddComment({ ...addComment, name: e.target.value })}
                                    placeholder="نام شما"
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                                    دیدگاه
                                </label>
                                <textarea
                                    required
                                    onChange={(e) => setAddComment({ ...addComment, comment: e.target.value })}
                                    rows="5"
                                    placeholder="دیدگاه شما"
                                    id="content"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-red-500 text-sm hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    ارسال
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className=" w-[70%] lgmax:w-full lgmax:my-5 h-auto">
                        <div className=" w-full h-full px-2 flex flex-col gap-2">
                            {comment.length >= 1 &&
                                comment.map((item, i) => {
                                    return (
                                        <div key={i} className=" flex flex-col gap-3 border-r border-red-500 p-3">
                                            <h2 className=" text-sm">{item.name}</h2>
                                            <p className=" text-xs">{item.comment}</p>
                                        </div>
                                    )
                                })
                            }
                            {
                                comment.length == 0 &&
                                <p>کامنتی وجود ندارد</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;


// 237483d0-dd0c-4596-9db2-de24605afd0a
// ES_c180d85285c3457bac613552cd20ff48