import { useContext, useEffect, useState } from "react";
import AddReport from "./addReport/addReport";
import Register from "./register/register";
import GetReport from "./getReport/getReport";
import { useRouter } from 'next/router';
import Article from "./article/article";
import Comment from "./comment/comment";
import Request from "@/requestHandler/Request";
import MyContext from "@/context";
import Loading from "../loading/loading";


function Admin() {
    const router = useRouter()
    const { loading, setLoading } = useContext(MyContext)
    const hadnleChekAuth = async () => {
        setLoading(true)
        try {
            const data = await Request("check-auth", "GET")
            if (data.notification.error) {
                router.push('/');
            }
            if(!data.notification.username){
                router.push("/")
            }
            if (data.notification.admin === false && data.notification.username !== "sobhan") {
                router.push('/');
            }
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }

    useEffect(() => {
        hadnleChekAuth()
    }, [])

    return (
        <div className=" w-full h-auto flex justify-center mt-48">
            {
                loading &&
                <Loading />
            }
            <div className=" w-full h-full max-w-[1300px] flex flex-wrap gap-10 justify-center">
                <AddReport />
                <Register />
                <GetReport />
                <Article />
                <Comment />
            </div>
        </div>
    );
}

export default Admin;