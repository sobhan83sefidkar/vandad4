function Loading() {
    return (
        <div className=" w-[100vw] h-[100vh] top-0 left-0 fixed bg-[#ffffff] z-[9999999999999999999]">
            <div className=" w-full h-full flex justify-center items-center">
                <div
                    className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"
                ></div>
            </div>
        </div>
    );
}

export default Loading;