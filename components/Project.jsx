import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Project(props) {
  return (
    <div className=" lg:w-[33.3333%] md:w-[50%] w-full h-[610px] lg:basis-[33.33%] md:basis-[50%] basis-full pt-10 px-5 ">
      <div className=" w-full h-full p-7.5 rounded-3xl bg-white relative overflow-hidden ">
        <div className="img w-full h-60 bg-teal-500 rounded-2xl overflow-hidden">
          <img src={props.imgLink} alt={props.imgAlt} className=" w-full h-full object-cover " />
        </div>
        <div className="desc mt-7.5 w-full ">
          <p className=" text-[13px] text-[#29a587] font-[font1] font-bold uppercase ">
            {props.desc}
          </p>
          <h5 className=" text-2xl font-bold mt-1.5 "> {props.descTitle} </h5>
          <p className=" my-4 min-h[125px] leading-[1.7] text-[#262626] ">
            {props.info}
          </p>
          <a href={props.websiteLink} className=" font-bold group relative mt-5 inline-block" target="blank">
                see project
                <span className="text-[#29a587] font-black ml-5 transition01 absolute group-hover:translate-x-[-6px]">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
          </a>
        </div>
        <div className="bg w-35 h-35 absolute -right-6.5 -bottom-6.5 ">
          <img src="./../img/pat-2.png" alt="" className=" w-full " />
        </div>
      </div>
    </div>
  );
}
