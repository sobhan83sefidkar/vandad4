import { useEffect, useState } from "react"
import axios from "axios"
import * as shamsi from 'shamsi-date-converter';
import { useRouter } from "next/router";
import Request from "@/requestHandler/Request";

function User() {
    const router = useRouter()

    const hadnleChekAuth = async () => {
        try{
            const data = await Request("check-auth" , "GET")
            
            if(data.notification.success){
                router.push(`/user-panel/${checkAuth.data.notification.username}`);
            }else{
                router.push("/")
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        hadnleChekAuth()
    } , [])
    const [reports, setReports] = useState([])

    const handlefilterReport = async (username) => {
        try {
            const data = await Request(`filter-report?username=${username}` , "GET")
            setReports(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        handlefilterReport(router.query.username)
    }, [router])
    return (
        <div className=" w-full h-[100vh] flex justify-center mt-36">
            <div className=" w-full h-full max-w-[1300px] flex justify-center">
                <div className=" w-full h-auto max-h-[700px]">
                    <div className="  overflow-auto max-h-[650px] my-1 rounded-md">
                        {
                            reports.length >= 1 &&
                            reports.map((item, i) => {
                                return (
                                    <ul key={i} className=" w-full p-2 border border-gray-400">
                                        <li className=" w-full flex justify-between border-b py-1">
                                            <span>مجموعه :</span>
                                            <span>{item.username}</span>
                                        </li>
                                        <li className=" w-full flex justify-between border-b py-1">
                                            <span>تاریخ :</span>
                                            <span>{shamsi.gregorianToJalali(item.createdAt).join('/')}</span>
                                        </li>
                                        <li className=" w-full flex justify-between border-b py-1">
                                            <span>ورود :</span>
                                            <span>{item.entery}</span>
                                        </li>
                                        <li className=" w-full flex justify-between border-b py-1">
                                            <span>خروج :</span>
                                            <span>{item.exit}</span>
                                        </li>
                                        <li className=" w-full flex justify-between border-b py-1">
                                            <span>مهندسان :</span>
                                            <span>{item.engineers}</span>
                                        </li>
                                        <li>
                                            <span>گزارش کار :</span>
                                            <p>{item.report}</p>
                                        </li>
                                    </ul>
                                )
                            })
                        }
                        {
                            reports.length === 0 &&
                            <span>هیچ گزارشی ثبت نشده</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;