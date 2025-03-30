import Header from "@/componetnts/aboutus/header";
import Blog from "@/componetnts/article/blog";


function Article() {
    
    return (
        <div className=" w-[100vw] flex flex-col items-center">
            <Header/>
            <Blog/>
        </div>
    );
}

export default Article;