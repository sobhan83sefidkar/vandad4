import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Header() {
    const arr = [
        "../../images/header.webp",
        "../../images/header.webp"
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed : 2000,        
        responsive: [
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
        <div className="header3 w-full h-[500px] relative mt-36 lgmax:h-auto lgmin:max-h-[1000px] max-w-[1300px]">
            <div className=' w-full h-full flex justify-center lgmax:flex-col-reverse'>
                <div className=" w-full h-auto flex flex-col justify-center gap-6 px-3 mdmax:py-3">
                    <h1 className=" text-[40px] smmax:text-[25px] font-bold" data-aos="fade-down">شرکت ونداد نوین آماده خدمت<br /> رساندن به شماست.</h1>
                    <p className=" max-w-[500px] text-md text-gray-500 mdmax:text-gray-800 z-10" data-aos="fade-up">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    <button data-aos="fade-up" className=" max-w-28 border border-[#ED1C2B] shadow-2xl py-2 rounded-lg text-black hover:bg-[#ED1C2B] duration-500 hover:text-white">
                        درباره ما
                    </button>
                </div>
                <div className=' w-[50%] lgmax:w-full flex justify-center items-center'>
                    <div className=' w-full h-full'>
                        <Slider {...settings}>
                            {
                                arr.map((item, i) => {
                                    return (
                                        <div key={i} className=' w-full h-full'>
                                            <div className=' w-full h-full flex justify-center items-center'>
                                                <div className=' w-full h-full flex justify-center'>
                                                    <img className=' w-[85%]' src={item} alt="" />
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

export default Header;
