import Slider from "react-slick";

function PopularServices() {
    const items = [
        { img: "../../images/popular-services/test2.jpg", text: "مانیتورینگ شبکه" },
        { img: "../../images/popular-services/test2.jpg", text: "گزارش وب گردی" },
        { img: "../../images/popular-services/test2.jpg", text: "میزان ترافیک مصرفی" },
        { img: "../../images/popular-services/test2.jpg", text: "خدمات passive/active" },
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        autoplay: 100,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                },
            }, {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                },
            },
        ],
    };
    return (
        <div className=" w-full h-full flex justify-center">
            <div className=" w-full h-full max-w-[1300px] flex flex-col py-5 gap-5 relative">
                <div className=" w-full flex justify-center text-2xl font-bold mdmax:flex" data-aos="fade-left">
                    <h2 className=" max-w-max border-b border-gray-500 py-3">
                        خدمات محبوب ما
                    </h2>
                </div>
                <div className=" w-full h-full flex justify-between">
                    <div data-aos="fade-up" className=" max-w-[22%] max-h-[350px] flex items-center lgmax:hidden">
                        <img className=" w-full h-[90%] rounded-lg" src="../../images/popular-services/test.webp" alt="" />
                    </div>
                    <div className=" max-w-[75%] lgmax:max-w-full flex justify-center">
                        <div className=" w-[100%] h-full">
                            <Slider {...settings}>
                                {
                                    items.map((item, i) => {
                                        return (
                                            <div data-aos="fade-up" key={i} className=" max-w-full h-full ">
                                                <div className=" w-full h-full flex justify-center">
                                                    <div className=" w-[95%] h-full bg-white rounded-lg overflow-hidden">
                                                        <div className=" w-full h-[200px]">
                                                            <img className=" w-full h-full" src={item.img} alt="" />
                                                        </div>
                                                        <div className=" w-full h-[120px] flex justify-center items-center">
                                                            {item.text}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularServices;
