import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Costumer() {
    const costumers = [
        { name: "سایاهو", type: "قراردادی", phone: "09018619939", img: "../../images/logo/logo (1).webp" },
        { name: "تولید نور", type: "قراردادی", phone: "09019109939", img: "../../images/logo/logo (2).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09015006639", img: "../../images/logo/logo (3).webp" },
        { name: "سایاهو", type: "پروژه ای", phone: "09011239939", img: "../../images/logo/logo (4).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017309939", img: "../../images/logo/logo (5).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09015909939", img: "../../images/logo/logo (6).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017409939", img: "../../images/logo/logo (7).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017369269", img: "../../images/logo/logo (8).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09658709939", img: "../../images/logo/logo (9).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017422648", img: "../../images/logo/logo (10).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09018509951", img: "../../images/logo/logo (11).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017409369", img: "../../images/logo/logo (12).webp" },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                },
            },
        ],
    };
    return (
        <div className="contractCostumers w-full h-auto flex justify-center">
            <div className="contractCostumers-container w-full h-full flex flex-col items-center">
                <div data-aos="fade-left" className=" flex justify-center ">
                    <h2 className=" px-3 py-2 border-b border-gray-400 text-2xl font-bold ">مشتریان ما</h2>
                </div>
                <div className=" w-full h-72 rounded-md flex justify-center items-center max-w-[1100px]">
                    <div className='carousel-container w-full'>
                        <Slider {...settings}>
                            {
                                costumers.map((item, i) => {
                                    return (
                                        <div data-aos="fade-up" key={i} className=" w-full h-full">
                                            <div className=' w-full h-full flex justify-center translate-x-[-15px]'>
                                                <div className=' w-[95%] bg-white p-3 rounded-lg'>
                                                    <div className=" w-full flex justify-center">
                                                        <img className=' w-32' src={item.img} alt="" />
                                                    </div>
                                                    <div className=" w-full px-4 flex flex-col gap-3">
                                                        <p className=" text-xs text-end"> {item.name} </p>
                                                        <p className=" text-xs text-end"> نوع همکاری : <span className=' text-red-500'>{item.type}</span> </p>
                                                        <p className=" text-xs text-end"> شماره تماس : {item.phone} </p>
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
    );
}

export default Costumer;