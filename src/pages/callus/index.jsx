import Header from "@/componetnts/aboutus/header";
import ComunicationPart from "@/componetnts/call/comunicationpart";
import SocialMedia from "@/componetnts/call/socialmedia";
import StayInTouch from "@/componetnts/call/stayInTouch";

function Call() {
    return (
        <div className=" w-[100vw] flex flex-col items-center">
            <Header/>
            <StayInTouch/>
            <SocialMedia/>
            <ComunicationPart/>
        </div>
    );
}

export default Call;