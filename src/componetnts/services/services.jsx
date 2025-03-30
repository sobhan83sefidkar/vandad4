function ServicesItem({ img, text, list, dir, id }) {
    return (
        <div className=" w-full h-auto flex justify-center">
            <div className=" w-full h-full max-w-[1300px] flex gap-10 relative px-5 mdmax:flex-col" dir={dir}>

                <div className=" w-1/2 mdmax:w-full h-auto" data-aos="zoom-in">
                    <img src={img} alt="" />
                </div>
                <div className=" w-1/2 mdmax:w-full h-auto flex flex-col justify-center relative" dir="rtl">
                    <h2 className=" text-3xl font-bold my-8 text-red-500" data-aos="fade-down">{id}- عنوان</h2>
                    <p data-aos="fade-down">
                        {text}
                    </p>
                    <ul className=" my-6">
                        {
                            list.map((item, i) => {
                                return (
                                    <li key={i} data-aos="fade-left" data-aos-delay={`${i}00`} className=" flex gap-5 items-center">
                                        <img src="../../images/service/checklist.png" alt="" />
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

export default ServicesItem;