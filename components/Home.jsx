import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faMap,
  faEnvelope,
  faAddressBook,
} from "@fortawesome/free-regular-svg-icons";
import profile from "./../img/profile.png";
import Button01 from "./Button01";
import Button02 from "./Button02";
import projectsData from "../projectsData/projectsData";
import Project from "./Project";
import blog01 from "./../img/blog01.jpg"
import blog02 from "./../img/blog02.jpg"
import blog03 from "./../img/blog03.jpg"
import pat1 from "./../img/pat-1.png"
import pat2 from "./../img/pat-2.png"
import pat3 from "./../img/pat-3.png"

export default function Home() {

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
      <Project
        key={elem.id}
        {...elem}
      />
    )
  })

  return (
    <div className="wrapper w-full overflow-x-hidden overflow-y-clip">

      {/* start header */}

      <section id="home" className="w-screen h-screen flex lg:flex-row flex-col lg:justify-center items-center relative lg:px-11 lg:mt-0 mt-24">

        {/* left side (name) */}

        <div className="flex flex-col lg:items-start items-center relative z-20">
          <p className="xl:text-[15px] sm:text-[13px] text-[10px] font-[font1] uppercase font-bold">
            <span>Hello, </span>
            <span className="text-[#00A787]">my name is</span>
          </p>
          <p className="xl:text-[90px] md:text-7xl sm:text-[55px] text-4xl font-[font1] font-bold uppercase shadow1 tracking-wider ">
            <span className=" text-[#00A787] ">nima</span>
            <span className=" text-white ">yamini</span>
          </p>
          <p className="font-bold">
            <span className=" md:text-[15px] sm:text-[13px] text-[10px] font-[font1] uppercase mr-2.5 ">
              i am
            </span>
            <span className=" xl:text-3xl md:text-2xl sm:text-[22px] text-[16px] font-[font2] ">
              FrontEnd Developer
            </span>
          </p>
          <p className=" xl:text-[18px] md:text-[16px] sm:text-[18px] text-[10px] sm:px-0 px-20 lg:text-left text-center opacity-80 text-[#262626] mt-10 max-w-lg ">
            From Iran, Tehran. I have rich experience in FrontEnd, I love to
            talk with you about our unique.
          </p>
          <div className="flex gap-5 mt-7.5 mb-10">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nima-yamini-026658339/"
              className="sm:text-2xl text-[20px] hover:text-[#00A787] duration-500 "
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              target="_blank"
              href="https://github.com/yuMpi01"
              className="sm:text-2xl text-[20px] hover:text-[#00A787] duration-500 "
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <Button01 text="my skills"/>
        </div>

        {/* right side (profile) */}

        <div className="relative -bottom-12.5 z-20">
          <div className="xl:w-2xl xl:h-2xl md:w-lg md:h-lg sm:w-md sm:h-md w-xs h-xs bg-[#29a587] rounded-full relative ">
            <img
              src={profile}
              alt="nima yamini profile yuMpi"
              className=" w-full h-full "
            />
            <div className=" xl:w-64 xl:h-20 sm:w-48 sm:h-16 w-28 h-11 flex justify-center items-center xl:gap-5 sm:gap-4 gap-2 border-solid border-[2px] border-black rounded-[82px] shadow2 absolute bg-white bottom-36 -left-8 ">
              <div className=" font-[font1] xl:text-4xl sm:text-2xl text-[16px] font-bold ">
                <span>2</span>
                <span className=" text-[#29a587] xl:ml-2.5 ml-1 ">+</span>
              </div>
              <div className=" font-[font1] xl:text-[13px] sm:text-[12px] text-[8px] font-bold uppercase ">
                <p>Years of </p>
                <p className=" text-[#29a587] sm:mt-1 mt-0 ">experience</p>
              </div>
            </div>
            <div className=" xl:w-64 xl:h-20 sm:w-48 sm:h-16 w-28 h-11 flex justify-center items-center xl:gap-5 sm:gap-4 gap-2 border-solid border-[2px] border-black rounded-[82px] shadow2 absolute bg-white bottom-20 right-0 ">
              <div className=" font-[font1] xl:text-4xl sm:text-2xl text-[16px] font-bold ">
                <span>18</span>
              </div>
              <div className=" font-[font1] xl:text-[13px] sm:text-[12px] text-[8px] font-bold uppercase ">
                <p>Completed </p>
                <p className=" text-[#29a587] mt-1 ">Projects</p>
              </div>
            </div>
            <div className=" sm:w-56 sm:h-56 w-44 h-44 absolute sm:top-0 -top-4 right-2 -z-10 ">
              <img src={pat1} alt="" className=" w-full " />
            </div>
            <div className=" sm:w-36 w-24 h-24 sm:h-36 absolute bottom-12 sm:-left-32 -left-14 -z-10 ">
              <img src={pat2} alt="" className=" w-full " />
            </div>
            <div className=" sm:w-36 w-24 h-24 sm:h-36 absolute bottom-0 -right-5 -z-10 ">
              <img src={pat3} alt="" className=" w-full " />
            </div>
          </div>
        </div>

        {/* background text */}

        <div className="absolute lg:bottom-[-25%] md:bottom-36 bottom-48 left-[50%] translate-x-[-50%] cursor-default z-0">
          <span className="xl:text-[350px] lg:text-[250px] md:text-[180px] text-[130px] font-[font2] text-black/2 font-bold whitespace-nowrap">
            {" "}
            Web Developer{" "}
          </span>
        </div>
      </section>

      {/* end header */}

      {/* start section1 (Professional Skills) */}

      <section id="Skills" className=" w-screen h-screen lg:mt-40 sm:mt-80 mt-28 flex flex-col items-center relative ">

        {/* section title */}

        <div className="divSTitle relative z-20">
          <Title h2="Professional Skills" span="Talent" />
        </div>

        {/* skills */}

        <div className="divSkills relative z-20 flex md:flex-col sm:flex-row flex-col items-center md:justify-center justify-between xl:w-[80%] w-[90%] mt-14.5">
          <div className="flex md:flex-nowrap flex-wrap md:flex-row flex-col md:w-full sm:w-[45%] w-full justify-between">
            <div className="md:w-[30%] w-full md:mt-0 mt-2.5">
              <div className="flex justify-between items-center">
                <span className=" text-[21px] font-[font1] font-bold ">
                  Html & Css
                </span>
                <span className=" text-[16px] font-[font1] font-bold ">
                  90 <span className="text-[#29a587] ">%</span>
                </span>
              </div>
              <p className=" text-[#262626] font-normal leading-[1.7] mt-2.5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="relative w-full h-0.5 bg-[rgb(0,0,0)]/10 mt-7.5 ">
                <div className=" w-[90%] h-full flex absolute left-0 ">
                  <div className=" w-full h-full bg-black "></div>
                  <div className=" w-6.5 h-6.5 border-solid border-[2px] border-black rounded-[50%] bg-[#29a587] shadow2 absolute right-0 top-[50%] translate-y-[-50%] "></div>
                </div>
              </div>
            </div>
            <div className="md:w-[30%] w-full md:mt-0 mt-4">
              <div className="flex justify-between items-center">
                <span className=" text-[21px] font-[font1] font-bold ">
                  Tailwind
                </span>
                <span className=" text-[16px] font-[font1] font-bold ">
                  90 <span className="text-[#29a587] ">%</span>
                </span>
              </div>
              <p className=" text-[#262626] font-normal leading-[1.7] mt-2.5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="relative w-full h-0.5 bg-[rgb(0,0,0)]/10 mt-7.5 ">
                <div className=" w-[90%] h-full flex absolute left-0 ">
                  <div className=" w-full h-full bg-black "></div>
                  <div className=" w-6.5 h-6.5 border-solid border-[2px] border-black rounded-[50%] bg-[#29a587] shadow2 absolute right-0 top-[50%] translate-y-[-50%] "></div>
                </div>
              </div>
            </div>
            <div className="md:w-[30%] w-full md:mt-0 mt-4">
              <div className="flex justify-between items-center">
                <span className=" text-[21px] font-[font1] font-bold ">
                  Bootstrap
                </span>
                <span className=" text-[16px] font-[font1] font-bold ">
                  90 <span className="text-[#29a587] ">%</span>
                </span>
              </div>
              <p className=" text-[#262626] font-normal leading-[1.7] mt-2.5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="relative w-full h-0.5 bg-[rgb(0,0,0)]/10 mt-7.5 ">
                <div className=" w-[90%] h-full flex absolute left-0 ">
                  <div className=" w-full h-full bg-black "></div>
                  <div className=" w-6.5 h-6.5 border-solid border-[2px] border-black rounded-[50%] bg-[#29a587] shadow2 absolute right-0 top-[50%] translate-y-[-50%] "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-nowrap flex-wrap md:w-full sm:w-[45%] w-full justify-between md:mt-16.5">
            <div className="md:w-[30%] w-full md:mt-0 mt-4">
              <div className="flex justify-between items-center">
                <span className=" text-[21px] font-[font1] font-bold ">
                  JavaScript
                </span>
                <span className=" text-[16px] font-[font1] font-bold ">
                  70 <span className="text-[#29a587] ">%</span>
                </span>
              </div>
              <p className=" text-[#262626] font-normal leading-[1.7] mt-2.5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="relative w-full h-0.5 bg-[rgb(0,0,0)]/10 mt-7.5 ">
                <div className=" w-[70%] h-full flex absolute left-0 ">
                  <div className=" w-full h-full bg-black "></div>
                  <div className=" w-6.5 h-6.5 border-solid border-[2px] border-black rounded-[50%] bg-[#29a587] shadow2 absolute right-0 top-[50%] translate-y-[-50%] "></div>
                </div>
              </div>
            </div>
            <div className="md:w-[30%] w-full md:mt-0 mt-4">
              <div className="flex justify-between items-center">
                <span className=" text-[21px] font-[font1] font-bold ">
                  ReactJs
                </span>
                <span className=" text-[16px] font-[font1] font-bold ">
                  75 <span className="text-[#29a587] ">%</span>
                </span>
              </div>
              <p className=" text-[#262626] font-normal leading-[1.7] mt-2.5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="relative w-full h-0.5 bg-[rgb(0,0,0)]/10 mt-7.5 ">
                <div className=" w-[75%] h-full flex absolute left-0 ">
                  <div className=" w-full h-full bg-black "></div>
                  <div className=" w-6.5 h-6.5 border-solid border-[2px] border-black rounded-[50%] bg-[#29a587] shadow2 absolute right-0 top-[50%] translate-y-[-50%] "></div>
                </div>
              </div>
            </div>
            <div className="md:w-[30%] w-full md:mt-0 mt-4">
              <div className="flex justify-between items-center">
                <span className=" text-[21px] font-[font1] font-bold ">
                  Jquery
                </span>
                <span className=" text-[16px] font-[font1] font-bold ">
                  85 <span className="text-[#29a587] ">%</span>
                </span>
              </div>
              <p className=" text-[#262626] font-normal leading-[1.7] mt-2.5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="relative w-full h-0.5 bg-[rgb(0,0,0)]/10 mt-7.5 ">
                <div className=" w-[85%] h-full flex absolute left-0 ">
                  <div className=" w-full h-full bg-black "></div>
                  <div className=" w-6.5 h-6.5 border-solid border-[2px] border-black rounded-[50%] bg-[#29a587] shadow2 absolute right-0 top-[50%] translate-y-[-50%] "></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* backgrounde text */}

        <div className=" divBg absolute md:bottom-[-10%] sm:bottom-[-25%] bottom-[-60%] left-[50%] translate-x-[-50%] cursor-default z-0 ">
          <span className="xl:text-[450px] lg:text-[350px] md:text-[300px] text-[200px] font-[font2] text-black/2 font-bold whitespace-nowrap">
            {" "}
            Skills{" "}
          </span>
        </div>

      </section>

      {/* end section1 (Professional Skills) */}

      {/* start section2 (Portfolio) */}

      <section id="Portfolio" className=" w-screen xl:mt-28 md:mt-16 sm:mt-40 mt-96 flex flex-col items-center relative ">

        {/* title */}

        <div className="divSTitle relative z-20">
          <Title h2="Portfolio" span="Projects" />
        </div>
        
        {/* projects */}

        <div className=" xl:w-[87%] w-[97%] flex flex-wrap relative z-20  ">
          {boxes}
        </div>

        <div className=" w-full flex justify-center relative z-20 mt-14 ">
          <Button01 text="View More"/>
        </div>

        {/* background text */}

        <div className=" divBg absolute lg:bottom-[-15%] md:bottom-[-10%] bottom-[-3%] left-[50%] translate-x-[-50%] cursor-default z-0 ">
          <span className="xl:text-[450px] lg:text-[350px] md:text-[300px] text-[200px] font-[font2] text-black/2 font-bold whitespace-nowrap">
            {" "}
            Portfolio{" "}
          </span>
        </div>
      </section>

      {/* end section2 (portfolio) */}

      {/* start section3 (latest blog) */}

      <section id="Blog" className=" w-screen xl:mt-64 md:mt-48 mt-36 flex flex-col items-center relative ">

        {/* title */}

        <div className="divSTitle relative z-20">
          <Title h2="Latest Blog" span="Articles and Advice" />
        </div>

        {/* blogs */}

        <div className=" xl:w-[87%] w-[97%] flex flex-wrap justify-center relative z-20 ">
          <div className=" lg:w-[33.3333%] md:w-[50%] w-full h-fit lg:basis-[33.33%] md:basis-[50%] basis-full mt-10 px-5">
            <div className=" w-full h-full p-7.5 rounded-3xl bg-white relative overflow-hidden ">
              <p className=" text-[13px] uppercase ">October 31, 2022</p>
              <h5 className=" text-2xl font-bold leading-[1.3] transition01 hover:text-[#29a587] mt-4 ">
                Follow Your Own Design Process
              </h5>
              <p className=" mt-3.5 min-h-31.5 leading-[1.7] text-[#262626] ">
                Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
                Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
                ornare eget…
              </p>
              <Button02 text="Read More" />
              <div className=" w-full h-45 bg-teal-400 rounded-3xl mt-5 overflow-hidden ">
                <img src={blog01} alt="blog1" className=" w-full h-full object-cover " />
              </div>
            </div>
          </div>
          <div className=" lg:w-[33.3333%] md:w-[50%] w-full h-fit lg:basis-[33.33%] md:basis-[50%] basis-full mt-10 px-5">
            <div className=" w-full h-full p-7.5 rounded-3xl bg-white relative overflow-hidden ">
              <p className=" text-[13px] uppercase ">October 31, 2022</p>
              <h5 className=" text-2xl font-bold leading-[1.3] transition01 hover:text-[#29a587] mt-4 ">
                Follow Your Own Design Process
              </h5>
              <p className=" mt-3.5 min-h-31.5 leading-[1.7] text-[#262626] ">
                Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
                Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
                ornare eget…
              </p>
              <Button02 text="Read More" />
              <div className=" w-full h-45 bg-teal-400 rounded-3xl mt-5 overflow-hidden ">
                <img src={blog02} alt="blog2" className=" w-full h-full object-cover " />
              </div>
            </div>
          </div>
          <div className=" lg:w-[33.3333%] md:w-[50%] w-full h-fit lg:basis-[33.33%] md:basis-[50%] basis-full mt-10 px-5">
            <div className=" w-full h-full p-7.5 rounded-3xl bg-white relative overflow-hidden ">
              <p className=" text-[13px] uppercase ">October 31, 2022</p>
              <h5 className=" text-2xl font-bold leading-[1.3] transition01 hover:text-[#29a587] mt-4 ">
                Follow Your Own Design Process
              </h5>
              <p className=" mt-3.5 min-h-31.5 leading-[1.7] text-[#262626] ">
                Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
                Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
                ornare eget…
              </p>
              <Button02 text="Read More" />
              <div className=" w-full h-45 bg-teal-400 rounded-3xl mt-5 overflow-hidden ">
                <img src={blog03} alt="blog3" className=" w-full h-full object-cover " />
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full flex justify-center relative z-20 mt-20 ">
          <Button01 text="View Blog"/>
        </div>

        {/* background text */}

        <div className=" divBg absolute lg:bottom-[-40%] md:bottom-[-15%] bottom-[-5%] left-[50%] translate-x-[-50%] cursor-default z-0 ">
          <span className="xl:text-[450px] lg:text-[350px] md:text-[300px] text-[200px] font-[font2] text-black/2 font-bold whitespace-nowrap">
            {" "}
            Blog{" "}
          </span>
        </div>
      </section>

      {/* end section3 (latest blog) */}

      {/* start section4 (contact me) */}

      <section id="Contact" className=" w-screen lg:mt-64 md:mt-48 mt-36 flex flex-col items-center relative mb-52 ">

        {/* title */}

        <div className="divSTitle relative z-20">
          <Title h2="Contact me" span="Talk About Ideas" />
        </div>

        <div className=" xl:w-[78%] w-[95%] flex md:flex-row flex-col mt-15 ">
          <div className=" md:w-[41%] w-full flex flex-col gap-10 ">
            <div className=" w-full flex ">
              <div className="h-full flex items-center mr-7.5">
                <div className=" w-14 h-14 rounded-[50%] bg-white shadow2 flex justify-center items-center border-solid border-black border-[2px] ">
                  <FontAwesomeIcon icon={faMap} className=" text-[20px] " />
                </div>
                <div className=" line w-10 h-0.5 bg-black "></div>
              </div>
              <div className=" flex flex-col flex-nowrap ">
                <p className=" text-3xl font-[font2] font-bold leading-[1] mt-3 ">
                  {" "}
                  Address{" "}
                </p>
                <p className=" text-[rgb(38,38,38)] leading-[1.7] font-normal text-nowrap mt-2.5 ">
                  Iran, Tehran
                </p>
              </div>
            </div>
            <div className=" w-full flex ">
              <div className="h-full flex items-center mr-7.5">
                <div className=" w-14 h-14 rounded-[50%] bg-white shadow2 flex justify-center items-center border-solid border-black border-[2px] ">
                  <FontAwesomeIcon icon={faUser} className=" text-[20px] " />
                </div>
                <div className=" line w-10 h-0.5 bg-black "></div>
              </div>
              <div className=" flex flex-col flex-nowrap ">
                <p className=" text-3xl font-[font2] font-bold leading-[1] mt-3 ">
                  {" "}
                  Freelance{" "}
                </p>
                <p className=" text-[rgb(38,38,38)] leading-[1.7] font-normal text-nowrap mt-2.5 ">
                  Available Right Now
                </p>
              </div>
            </div>
            <div className=" w-full flex ">
              <div className="h-full flex items-center mr-7.5">
                <div className=" w-14 h-14 rounded-[50%] bg-white shadow2 flex justify-center items-center border-solid border-black border-[2px] ">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className=" text-[20px] "
                  />
                </div>
                <div className=" line w-10 h-0.5 bg-black "></div>
              </div>
              <div className=" flex flex-col flex-nowrap ">
                <p className=" text-3xl font-[font2] font-bold leading-[1] mt-3 ">
                  {" "}
                  Email{" "}
                </p>
                <p className=" text-[rgb(38,38,38)] leading-[1.7] font-normal text-nowrap mt-2.5 ">
                  thisisyumpi8@gmail.com
                </p>
              </div>
            </div>
            <div className=" w-full flex ">
              <div className="h-full flex items-center mr-7.5">
                <div className=" w-14 h-14 rounded-[50%] bg-white shadow2 flex justify-center items-center border-solid border-black border-[2px] ">
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    className=" text-[20px] "
                  />
                </div>
                <div className=" line w-10 h-0.5 bg-black "></div>
              </div>
              <div className=" flex flex-col flex-nowrap ">
                <p className=" text-3xl font-[font2] font-bold leading-[1] mt-3 ">
                  {" "}
                  Phone{" "}
                </p>
                <p className=" text-[rgb(38,38,38)] leading-[1.7] font-normal text-nowrap mt-2.5 ">
                  +98 939 3897 185
                </p>
              </div>
            </div>
          </div>
          <div className=" md:w-[58%] w-full relative md:mt-0 mt-8 ">
            <div className=" w-full relative z-20 ">
              <form action="">
                <div className=" w-full flex flex-wrap ">
                  <div className=" w-[50%] px-3 ">
                    <label className=" text-[14px] uppercase font-bold indent-7.5 font-[font1] cursor-pointer ">
                      Your Full Name
                      <b className=" text-[#29a587] ml-2.5 ">*</b>
                      <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        required
                        value=""
                        className=" mt-2.5 w-full block h-15 resize-none font-normal px-7.5 outline-0 bg-white border-2 border-solid border-black rounded-[30px] transition02 "
                      />
                    </label>
                  </div>
                  <div className=" w-[50%] px-3 ">
                    <label className=" text-[14px] uppercase font-bold indent-7.5 font-[font1] cursor-pointer ">
                      Your Email Address
                      <b className=" text-[#29a587] ml-2.5 ">*</b>
                      <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        required
                        value=""
                        className=" mt-2.5 w-full block h-15 resize-none font-normal px-7.5 outline-0 bg-white border-2 border-solid border-black rounded-[30px] transition02 "
                      />
                    </label>
                  </div>
                  <div className=" w-full px-3 mt-7.5 ">
                    <label className=" text-[14px] uppercase font-bold indent-7.5 font-[font1] cursor-pointer ">
                      Your Subject
                      <b className=" text-[#29a587] ml-2.5 ">*</b>
                      <input
                        type="email"
                        name="subject"
                        id="subject"
                        required
                        value=""
                        className=" mt-2.5 w-full block h-15 resize-none font-normal px-7.5 outline-0 bg-white border-2 border-solid border-black rounded-[30px] transition02 "
                      />
                    </label>
                  </div>
                  <div className=" w-full px-3 mt-7.5 ">
                    <label className=" text-[14px] uppercase font-bold indent-7.5 font-[font1] cursor-pointer ">
                      Your Message
                      <b className=" text-[#29a587] ml-2.5 ">*</b>
                      <textarea
                        name="message"
                        id="message"
                        className=" py-5 px-7.5 mt-2.5 w-full h-[140px] block resize-none font-normal outline-0 bg-white border-2 border-solid border-black rounded-[30px] transition02 "
                        required=""
                      ></textarea>
                    </label>
                  </div>
                  <div className=" w-full px-3 mt-7.5 flex lg:flex-row flex-col lg:justify-end lg:items-center justify-center items-end ">
                    <p className=" text-[rgb(38,38,38)] mr-7.5 ">
                      * Accept the terms and conditions.
                    </p>
                    <button
                      type="submit"
                      className="skillsA sm:h-14 sm:px-10 h-10 px-5 relative overflow-hidden sm:text-[13px] text-[12px] font-bold uppercase tracking-wider rounded-[56px] border-[2px] border-black border-solid sm:leading-[52px] leading-9 shadow2 hover:text-white transition01 cursor-pointer lg:mt-0 mt-5"
                    >
                      Send Message
                      <div className="skillsBtn"></div>
                    </button>
                  </div>
                </div>
              </form>
              <div className=" w-60 h-60 absolute bottom-[-7%] left-[-18%] z-[-1] ">
                <img src={pat1} alt="" className=" w-full " />
              </div>
            </div>
          </div>
        </div>

        {/* background text */}
        <div className=" divBg absolute lg:bottom-[-40%] md:bottom-[-25%] bottom-[-10%] left-[50%] translate-x-[-50%] cursor-default z-0 ">
          <span className="xl:text-[350px] lg:text-[250px] md:text-[170px] text-[100px] font-[font2] text-black/2 font-bold whitespace-nowrap">
            {" "}
            Contact Me{" "}
          </span>
        </div>
      </section>

      {/* end section4 (contact me) */}
    </div>
  );
}
