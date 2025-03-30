import Link from "next/link";
import Request from "@/requestHandler/Request";
import { useEffect, useState } from "react";

function Articles() {
    const [article , setArticle] = useState([])
    const getArticle = async () => {
        try{
            const data = await Request("get-article" , "GET")

            setArticle(data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getArticle()
    } , [])
    return (
        <div className="articles w-full h-auto flex justify-center">
            <div className="articles-container w-full h-full max-w-[1300px]">
                <div data-aos="fade-left" className=" flex justify-center">
                    <h2 className=" text-center max-w-max py-2 text-2xl border-b border-gray-400 font-bold">مقالات آموزشی</h2>
                </div>
                <div className=" flex gap-3 flex-wrap justify-center">
                    {
                        article.length >= 1 &&
                        article.slice(0 , 4).map((item, i) => {
                            return (
                                <div key={i} data-aos="fade-left" data-aos-delay={`${i+2}00`} className="relative flex w-72 flex-col mt-10 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-2xl">
                                        <img className=" w-full h-full object-cover bg-center hover:scale-[1.03] duration-500" src={item.img} alt="" />
                                    </div>
                                    <div className="p-6">
                                        <h5 className="mb-2 block  text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                            {item.title}
                                        </h5>
                                        <p className="block  text-sm font-light leading-relaxed text-inherit antialiased">
                                            {item.text.slice(0 , 100)}...
                                        </p>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <Link href={`articles/${item._id}`} data-ripple-light="true" type="button" className="select-none rounded-lg bg-red-500 py-2 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                            بیشتر
                                        </Link>
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

export default Articles;