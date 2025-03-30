function Parallax() {
    return (
        <div className="parallax w-full h-[400px] relative my-7">
            <div className="parallax-container w-full h-full ">
                <form className="flex items-center justify-center flex-col gap-4 w-full h-full" data-aos="fade-up" onSubmit={(e) => e.preventDefault()}>
                    <img className=" w-20" src="../../images/vandad.webp" alt="" />
                    <p className=" text-black text-center smmax:text-white px-2">اگر سوالی دارید میتونید شماره تلفتون رو با ما به اشتراک بزارید تا در اولین فرصت با شما تماس بگیریم</p>
                    <input className=" rounded-md p-2" type="text" placeholder="شماره تماس" min={11} max={11} />
                    <div className=" p-1 rounded-md relative overflow-hidden">
                        <button className="submit-btn z-10">
                            ارسال
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Parallax;