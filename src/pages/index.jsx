import Header from "@/componetnts/index/header";
import Widget from "@/componetnts/index/widget";
// import Gallery from "@/componetnts/index/ansologyofprojects"
// import Header from "@/componetnts/index/parralaxheader"
import Parallax from "@/componetnts/index/parallax";
import Services2 from "@/componetnts/index/services";
import Costumer from "@/componetnts/index/Costumers";
import Slogan from "@/componetnts/index/slogan";
import PopularServices from "@/componetnts/index/popularServices";
import Equipments from "@/componetnts/index/equipments";
import Articles from "@/componetnts/index/articles";

export default function Home() {
  return (
    <div className=" w-[100vw] flex flex-col items-center">
      <Header/>
      <Slogan/>
      <Widget/>
      <PopularServices/>
      <Services2/>
      {/* <Gallery/> */}
      <Equipments/>
      {/* <Parallax/> */}
      <Costumer/>
      <Articles/>
    </div>
  );
}
