import Articles from "@/componetnts/index/articles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Comments from "@/componetnts/article/comments";
import { CiCalendarDate } from "react-icons/ci";
import * as shamsi from 'shamsi-date-converter';
import Request from "@/requestHandler/Request";
import MyContext from "@/context";
import Loading from "@/componetnts/loading/loading";

function ArticleItem() {
    const { loading, setLoading } = useContext(MyContext)
    const router = useRouter()
    const { article } = router.query
    const [articleItem, setArticleItem] = useState({})

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    const handleFindArticle = async () => {
        setLoading(true)
        try {
            const [response1, response2] = await Promise.all([
                Request(`get-single-article/${article}`, "GET"),
                Request(`get-mac/${article}`, "GET")
            ]);
            setArticleItem(response1[0])
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }

    useEffect(() => {
        handleFindArticle()
    }, [router])

    if (!articleItem) {
        return
    }

    return (
        <div className=" w-full h-auto flex justify-center mt-36 mdmax:mt-24  scroll-smooth">
            {
                loading &&
                <Loading />
            }
            <div className=" w-full h-full max-w-[1300px]">
                <div className=" my-4 flex mdmax:flex-col justify-between">
                    <h2 className=" text-4xl font-bold border-r-4 border-red-500 px-2 ">{ articleItem.title}</h2>
                    <span className=" flex items-center mdmax:mt-5 gap-1"><CiCalendarDate size={25} />{ shamsi.gregorianToJalali(articleItem.createdAt).join('/')}</span>
                </div>
                <img data-aos="fade" className=" w-full h-auto max-h-[500px] object-cover  rounded-xl" src={ articleItem.img} alt="" />
                <div className=" p-5" data-aos="fade-up">
                    <p className=" py-4 text-sm">{ articleItem.text}</p>
                </div>
                <Comments />
            </div>
        </div>
    );
}

export default ArticleItem;