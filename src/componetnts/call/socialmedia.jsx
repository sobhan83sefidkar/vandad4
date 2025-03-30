function SocialMedia() {
    const arr = [
        "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/call2/Untitled-1.webp",
        "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/call2/Untitled-2.webp",
        "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/call2/Untitled-3.webp",
        "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/call2/Untitled-4.webp",
        "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/call2/Untitled-5.webp",
    ]
    return (
        <div className=" w-full h-auto flex justify-center">
            <div className=" w-full h-full flex flex-wrap justify-center gap-5 max-w-[1300px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d722.6700798724098!2d59.52088722328105!3d36.34643555370633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c8d9f08cd1e8d%3A0xc0f4e37924207ef5!2s8GWC%2BFGM%2C%20Mashhad%2C%20Razavi%20Khorasan%20Province%2C%20Iran!5e0!3m2!1sen!2snl!4v1742111455537!5m2!1sen!2snl" width="1300" height="600" style={{border : "0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default SocialMedia;