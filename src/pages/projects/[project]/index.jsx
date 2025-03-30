import { useRouter } from "next/router";
import Layout from "../layout";
import allProjects from "@/project";
import { useEffect, useState } from "react";
import DescT from "@/componetnts/projects/descT";
import DescF from "@/componetnts/projects/descF";

function Project1() {
    const router = useRouter()
    const {project} = router.query;

    const [projectItem , setProjectItem] = useState({})

    useEffect(() => {
        const find = allProjects.find((item) => item.link.split("/")[2] === project)
        setProjectItem(find)
    } , [router])

    if(!projectItem){
        return
    }

    return (
        <Layout>
            <div className=" w-full h-auto flex justify-center">
                <div className=" w-full h-full max-w-[1300px]">
                    {
                        projectItem.desc &&
                        <DescT item={projectItem}/>
                    }
                    {
                        !projectItem.desc &&
                        <DescF item={projectItem}/>
                    }
                </div>
            </div>
        </Layout>
    );
}

export default Project1;