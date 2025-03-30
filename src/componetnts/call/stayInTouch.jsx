function StayInTouch() {
    return (
        <div className=" w-full h-auto flex justify-center">
            <div className=" w-full h-full max-w-[1300px] px-5">
                <div className=" w-full py-2  flex justify-center">
                    <h2 className="max-w-max py-2 text-3xl font-bold text-red-500">با ما در ارتباط باشید...</h2>
                </div>
                <div className=" w-full flex justify-center">
                    <p className=" text-center"> ما در ونداد نوین همیشه مشتاق دریافت نظرات، سوالات و پیشنهادهای شما مشتریان عزیز هستیم. تا با شناخت نیازها و درخواست‌های شما عزیزان بهترین خدمات را ارائه دهیم. </p>
                </div>
                <div className=" w-full flex flex-col items-center my-10">
                    <p className=" text-red-500 text-center">اگر هر سوالی دارید و یا نیاز به راهنمایی دارید، می‌توانید، سوالات و مشخصات خود را وارد کنید تا در اولین فرصت متخصصان ما به شما پاسخ دهند.</p>
                    <form class="bg-white w-[90vw] md:w-[50vw] p-6 rounded-lg shadow-md my-5">
                        <div class="mb-4">
                            <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
                                عنوان
                            </label>
                            <input
                                placeholder="عنوان شما"
                                type="text"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div class="mb-4">
                            <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
                                شماره تماس
                            </label>
                            <input
                                placeholder="09012345678"
                                type="text"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div class="mb-4">
                            <label for="content" class="block text-gray-700 text-sm font-bold mb-2">
                                موضوع
                            </label>
                            <textarea
                                rows="5"
                                placeholder="موضوع خود را وارد کنید"
                                id="content"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            ></textarea>
                        </div>
                        <div class="flex items-center justify-between">
                            <button
                                onClick={(e) => e.preventDefault()}
                                type="submit"
                                class="bg-red-500 text-sm hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                ارسال
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default StayInTouch;