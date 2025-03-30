

function Services2() {

    const services = [
        { id: 1, img: "../../images/services/sketch.png", title: "طراحی و زیر ساخت شبکه", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
        { id: 2, img: "../../images/services/wifi.png", title: "اینترنت و شبکه های وایرلس", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
        { id: 3, img: "../../images/services/firewall.png", title: "فایروال های سخت افزار", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
        { id: 4, img: "../../images/services/monitoring-red.png", title: "نظارت پیشرفته بر شبکه", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
        { id: 5, img: "../../images/services/server-windows.png", title: "سرور مجازی", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
        { id: 6, img: "../../images/services/network-cable.png", title: "کابل کشی شبکه", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
        { id: 7, img: "../../images/services/voip.png", title: "تلفن VOIP", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
        { id: 8, img: "../../images/services/user-red.png", title: "مدیریت کاربران", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
        { id: 9, img: "../../images/services/security-lock.png", title: "آنتی ویروس", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
        { id: 10, img: "../../images/services/cctv.png", title: "دوربین مدار بسته", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
        { id: 11, img: "../../images/services/network.png", title: "ارتباط امن بین دفاتر", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
        { id: 12, img: "../../images/services/management.png", title: "مشاوره رایگان", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
    ]
    return (
        <div className="services w-full h-auto relative flex justify-center">
            <div className="services-container w-full h-auto max-w-[1300px]">
                <div className=' w-full flex justify-center mb-5'>
                    <h2 data-aos="fade-left" className=' px-3 border-b border-gray-400 py-3 font-bold text-2xl xsmax:text-lg'>ونداد نوین چه خدماتی اراعه میدهد؟</h2>
                </div>
                <div className="service-items flex flex-wrap  justify-center items-center gap-5">
                    {
                        services.map((item, i) => {
                            return (
                                <div
                                    data-aos="fade-left"
                                    data-aos-delay={`${i}0`}
                                    className="w-72 mdmax:w-72 external:w-96 bg-white shadow-md p-2 space-y-3 relative overflow-hidden rounded-xl"
                                    key={i}
                                >
                                    <div className="fill-violet-500 w-12 mr-[50%] translate-x-[50%]">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <h1 className="text-md mr-[50%] translate-x-[50%] w-full text-center">{item.title}</h1>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default Services2;