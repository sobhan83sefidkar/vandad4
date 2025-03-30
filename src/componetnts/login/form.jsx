import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Request from "@/requestHandler/Request";
import MyContext from "@/context";
import Loading from "../loading/loading";
import Swal from 'sweetalert2/dist/sweetalert2.js'


function Form() {
    const { loading, setLoading } = useContext(MyContext)

    const [info, setInfo] = useState({
        username: "",
        password: ""
    })
    const router = useRouter();

    const handleLogin = async () => {
        setLoading(true)
        try {
            const data = await Request("login", "POST", info)
            if (data.notification.success && data.notification.admin === true && data.notification.username === "sobhan") {
                router.push('/admin-panel');
            } else if (data.notification.success && data.notification.admin === false) {
                router.push(`/user-panel/${data.notification.username}`);
            } else {
                router.push("/login")
            }
            console.log(data)
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
        setLoading(true)
        try {
            const data = await Request("check-auth", "GET")
            if (data.notification.success) {
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
            {loading &&
                <Loading />
            }
            <div className=" w-full h-full max-w-[1300px] flex justify-center">
                <div
                    className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                >
                    <div
                        className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40"
                    >
                        <h3
                            className="block text-3xl font-semibold leading-snug tracking-normal text-white antialiased"
                        >
                            ورود به حساب
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4 p-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                onChange={(e) => setInfo({ ...info, username: e.target.value })}
                                placeholder=""
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                            >
                                نام کاربری
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                onChange={(e) => setInfo({ ...info, password: e.target.value })}
                                placeholder=""
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                            >
                                رمز عبور
                            </label>
                        </div>

                    </div>
                    <div className="p-6 pt-0">
                        <button
                            onClick={() => handleLogin()}
                            data-ripple-light="true"
                            type="button"
                            className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            ورود
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;