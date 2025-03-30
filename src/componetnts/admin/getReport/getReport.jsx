import { useContext, useEffect, useState } from "react"
import * as shamsi from 'shamsi-date-converter';
import MyContext from "@/context";
import Request from "@/requestHandler/Request";

function GetReport() {
    const { loading, setLoading } = useContext(MyContext)

    const [users, setUsers] = useState([])
    const [reports, setReports] = useState([])

    const handleGetUsers = async () => {
        const data = await Request("get-users" , "GET")
        setUsers(data)
    }

    const handlefilterReport = async (username) => {
        try {
            const data = await Request(`filter-report?username=${username}` , "GET")

            setReports(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleGetUsers()
    }, [])
    return (
        <div className=" w-[400px] h-auto max-h-[700px]">
            <div className=" w-full h-auto">
                <select className=" w-full border rounded-md p-2" onChange={(e) => handlefilterReport(e.target.value)} name="username" id="">
                    <option value="all">همه</option>
                    {
                        users.map((item, i) => {
                            return (
                                <option key={i} value={item.username}>{item.username}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="  overflow-auto max-h-[650px] my-1 rounded-md">
                {
                    reports &&
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
    );
}

export default GetReport;