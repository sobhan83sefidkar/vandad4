
function Header() {

    
    return (
        <div className="header3 w-full h-[100vh] lgmax:h-auto lgmax:mt-36 max-w-[1300px] max-h-[1100px]">
            <div className="header-container3 relative w-full h-full flex justify-center items-center ">
                <div className=" w-full h-[200px] absolute bottom-0 left-0 bg-gradient-to-t from-[rgb(255,255,255)] to-transparent">

                </div>
                <div className=" w-full h-auto flex flex-col gap-6 px-3 mdmax:py-3">
                    <h1 className=" text-[40px] smmax:text-[25px] font-bold">شرکت ونداد نوین آماده خدمت<br /> رساندن به شماست.</h1>
                    <p className=" max-w-[500px] text-md text-gray-500 mdmax:text-gray-800 z-10">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    <button className=" max-w-28 border border-[#ED1C2B] shadow-2xl py-2 rounded-lg text-black hover:bg-[#ED1C2B] duration-500 hover:text-white">
                        درباره ما
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;