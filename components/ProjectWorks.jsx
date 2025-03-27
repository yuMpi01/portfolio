import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight , faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function ProjectWorks(props){
    return(
        <div className=" w-full flex h-[450px] justify-between md:flex-row flex-col mt-16 ">
              <div className=" md:w-[50%] w-full h-full relative group ">
                <div className="img w-full h-full relative bg-teal-500 group overflow-hidden md:hover:scale-[0.96] hover:rounded-[0] hover:scale-[0.96] transition01 md:rounded-[0] rounded-3xl">
                  <img
                    src={props.imgLink} alt={props.imgAlt}
                    className=" w-full h-full object-cover group-hover:scale-[1.07] transition01 "
                  />
                  <div className="overlay w-full h-full absolute top-0 left-0 bg-[#101e32]/50 transition01 opacity-0 group-hover:opacity-100 "></div>
                </div>
                <div className=" absolute w-6 h-6 top-7.5 right-7.5 transition01 opacity-0 group-hover:opacity-100 cursor-pointer ">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className=" text-2xl text-white "
                  />
                </div>
                <div className=" w-35 h-35 absolute bottom-0 lg:right-[-12%] right-[-15%] z-[-1] md:block hidden ">
                    <img src="./../img/pat-2.png" alt="" />
                </div>
              </div>
              <div className=" md:w-fit w-full flex flex-col justify-center relative md:mt-0 mt-4 ">
                <span className=" text-[13px] font-bold tracking-wider text-[#29a587] uppercase font-[font1] ">
                    {props.desc}
                </span>
                <h5 className=" text-6xl font-[font1] font-bold "> {props.descTitle} </h5>
                <p className=" text-[#262626] leading-[1.7] mt-2.5 xl:max-w-[500px] lg:max-w-[400px] md:max-w-[250px] ">
                    {props.info}
                </p>
                <a href={props.websiteLink} className=" font-bold group relative mt-5 inline-block" target="blank">
                               see project
                               <span className="text-[#29a587] font-black ml-5 transition01 absolute group-hover:translate-x-[-6px]">
                                 <FontAwesomeIcon icon={faArrowRight} />
                               </span>
                         </a>
              </div>
        </div>
    )
}