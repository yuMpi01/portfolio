import Menu from "../components/Menu";
import Footer from "../components/Footer";
import ProjectWorks from "../components/ProjectWorks";
import projectsData from "../projectsData/projectsData";

export default function Works() {

  function Title(props){
    return(
      <>
        <h2 className=" lg:text-5xl sm:text-4xl text-2xl font-[font1] font-bold uppercase ">
            {props.h2}
          </h2>
          <p className=" text-center mt-2.5 ">
            <span className=" font-[font1] uppercase font-bold lg:text-[14px] sm:text-[12px] text-[10px] text-[#29a587] ">
              my
            </span>
            <span className=" font-[font2] lg:text-3xl sm:text-2xl text-[20px] font-bold ">
              {props.span}
            </span>
          </p>
      </>
    )
  }

  const boxes=projectsData.map((elem)=>{
      return(
        <ProjectWorks
          key={elem.id}
          {...elem}
        />
      )
    })

  return (
    <>
      <Menu />

      <div className="wrapper w-full overflow-x-hidden overflow-y-clip">
        <section className=" w-full mt-55 md:mb-30 mb-64 ">
          <div className=" w-full flex flex-col items-center ">
            <Title h2="Portfolio" span="Cases" />
          </div>
          <div className=" max-w-[1300px] mx-auto lg:mt-52 mt-28 lg:px-11 px-7 ">
            {boxes}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
