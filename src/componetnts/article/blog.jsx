import { useEffect, useState } from "react";
import BlogItem from "./blogItem";
// import arr from "@/article";
import Link from "next/link";
import Request from "@/requestHandler/Request";

function Blog() {
    const [article , setArticle] = useState([])
    const [topArticle , setTopArticle] = useState([])

    const handleGetArticle = async () => {
        try{
            const [response1, response2] = await Promise.all([
                Request(`get-article` , "GET"),
                Request(`top-article` , "GET")
            ]);

            setArticle(response1)
            setTopArticle(response2)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        handleGetArticle()
    } , [])

    return (
        <div className=" w-full h-auto flex justify-center ">
            <div className=" w-full h-full max-w-[1300px]">
                <div className=" w-full h-full flex lgmax:flex-col-reverse">
                    <div className=" w-[70%] lgmax:w-full p-3 flex flex-col gap-5">
                        {article.length >= 1 &&
                            article.map((item, i) => {
                                return (
                                    <BlogItem key={i} item={item} />
                                )
                            })
                        }
                    </div>
                    <div className=" w-[30%] lgmax:w-full p-3 sticky top-0">
                        <div className=" w-full h-auto flex flex-col gap-3 rounded-lg border border-gray-300 py-3">
                            <div className=" flex justify-center">
                                <h2 className=" text-center max-w-max py-1 border-r-4 border-red-500 px-2">پربازدید ترین مقالات</h2>
                            </div>
                            <ul className=" text-sm px-5 flex flex-col gap-2">
                                {
                                    topArticle.map((item, i) => {
                                        return (
                                            <Link key={i} href={`/articles/${item._id}`}>
                                                <li className=" text-center flex gap-2 border border-gray-300 rounded-lg overflow-hidden items-center">
                                                    <img className=" w-24 object-cover" src={item.img} alt="" />
                                                    <span className=" font-bold">{item.title}</span>
                                                </li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;