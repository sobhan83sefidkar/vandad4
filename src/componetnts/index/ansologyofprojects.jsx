
function services() {
    const topImages = [
        { id: 1, image: "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/live-projects/1%20(1).webp" },
        { id: 2, image: "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/live-projects/1%20(2).webp" },
        { id: 3, image: "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/live-projects/1%20(3).webp" },
        { id: 4, image: "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/live-projects/1%20(4).webp" },
        { id: 5, image: "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/live-projects/1%20(5).webp" },
        { id: 6, image: "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/live-projects/1%20(6).webp" },
        { id: 7, image: "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/live-projects/1%20(7).webp" },
        { id: 8, image: "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/live-projects/1%20(8).webp" },
        { id: 9, image: "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/live-projects/1%20(9).webp" },
    ]

    return (
            <div className="gallery h-auto overflow-hidden mdmin:mt-10">
                <div className="gallery-containe w-full h-full max-w-[1300px]">
                    <div className="top-images w-full h-1/2 flex gap-4 p-2">
                        {
                            topImages.map((item, i) => {
                                return (
                                    <img key={i} className=" w-48 rounded-lg" src={item.image} alt="" />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    );
}

export default services;