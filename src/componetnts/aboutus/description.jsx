function Description() {
    const items = [
        "طراحی و پیاده سازی شبکه",
        "بهینه سازی و مانیتورینگ",
        "تامین قطعات و تجهیزات بصورت بهینه و کارآمد",
        "راه اندازی سرور های مختلف",
        "تامین امنیت سیستم ها و کاربران",
        "پشتیبانی قوی از کاربران",
        "مشاوره رایگان",
    ]
    return (
        <div className="description w-full h-auto flex justify-center">
            <div className="description-container flex flex-col w-full h-full max-w-[1100px]">
                <div className=" flex justify-center">
                    <h2 className=" px-3 py-2 border-b border-gray-400 text-2xl" data-aos="fade-up">شرکت فناوری اطلاعات ونداد نوین</h2>
                </div>
                <div className=" flex flex-col text-[13px] my-5 px-2" >
                    <p data-aos="fade-up">با توجه به پیشرفت سریع فناوری و نیازهای رو به رشد بازار ما همیشه در تلاشیم تا خدمات نوآورانه‌تری ارائه دهیم. با تکیه بر تجربه چندین ساله تیم حرفه ای ما , <span className=" font-bold">پایداری , امنیت و کارایی</span> شبکه های خود را تضمین کنید.
                    ما در ونداد نوین، با تیمی از افراد خلاق و متخصص، خدمات شبکه‌های کامپیوتری با کیفیت بالا و قیمت رقابتی ارائه می‌دهیم. تیم ما همیشه آماده است تا همه دغدغه‌های شما را از طراحی و پیاده‌سازی تا بهینه‌سازی و مانیتورینگ شبکه برطرف کند. مواردی شامل:</p>
                    <ul className=" my-5 flex flex-col gap-3">
                        {
                            items.map((item, i) => {
                                return (
                                    <li data-aos="fade-left" data-aos-delay={`${i+1}00`} key={i} className=" w-max flex items-center justify-center gap-3">
                                        <img className=" w-5 rounded-lg" src="../../images/tick.webp" alt="" />
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Description;