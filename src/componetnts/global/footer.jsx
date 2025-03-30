const Footer = () => {
    return (
        <div className="relative text-sm w-[100vw]">
            {/* امواج بالای فوتر */}
            <div className="absolute top-0 left-0 w-full overflow-hidden bg-[#fafcfd] border-none">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-20"
                    style={{ transform: 'scaleY(-1)' }}
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity="0.25"
                        className="fill-current text-gray-900"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity="0.5"
                        className="fill-current text-gray-900"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className="fill-current text-gray-900"
                    ></path>
                </svg>
            </div>

            {/* فوتر */}
            <footer className="bg-gray-900 text-white pt-20 pb-12 ">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1100px]">
                    <div className=" flex flex-col items-center">
                        <img className=" w-36" src="../../images/vandad.webp" alt="" />
                        <span>ونداد نوین</span>
                    </div>
                    {/* اطلاعات */}
                    <div className=" flex flex-col justify-center items-center mdmax:items-start">
                        <h3 className="font-bold text-lg mb-6 text-blue-400">اطلاعات</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">درباره ما</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">تماس با ما</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">فرصت‌های شغلی</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-300">اخبار</a></li>
                        </ul>
                    </div>

                    {/* تماس با ما */}
                    <div className=" flex flex-col justify-center items-center mdmax:items-start">
                        <h3 className="font-bold text-lg mb-6 text-blue-400">تماس با ما</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-400">📞</span>
                                <span>۰۲۱-۱۲۳۴۵۶۷</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-400">📱</span>
                                <span>۰۲۱-۱۲۳۴۵۶۷</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-400">✉️</span>
                                <span>info@example.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className=" flex flex-col justify-center items-center mdmax:items-start">
                        <a referrerPolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=561858&Code=NxrtsXIyrOI28mXu4aiA2LnIGKP5x9wD'>
                            <img referrerPolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=561858&Code=NxrtsXIyrOI28mXu4aiA2LnIGKP5x9wD' alt='' style={{ cursor: "pointer" }} code='NxrtsXIyrOI28mXu4aiA2LnIGKP5x9wD'></img>
                        </a>
                        <span>نماد الکترونیک</span>
                    </div>
                </div>

                {/* حقوقی */}
                <div className="mt-12 pt-8 text-center">
                    <h3 className="font-bold text-lg mb-4 text-blue-400">حقوقی</h3>
                    <p className="mt-6 text-gray-400">
                        © {new Date().getFullYear()} تمام حقوق محفوظ است.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;