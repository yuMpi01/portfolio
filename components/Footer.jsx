import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin , faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className=" py-15 border-t-solid border-t-black/10 border-t-[1px] relative z-20 overflow-x-hidden ">
      <div className=" px-28 flex flex-wrap justify-between md:flex-row flex-col items-center ">
        <div className=" md:w-[33%] px-3 flex justify-start gap-4 ">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nima-yamini-026658339/"
            className="text-[26px] hover:text-[#00A787] duration-[500ms] "
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            href="https://github.com/yuMpi01"
            className="text-[26px] hover:text-[#00A787] duration-[500ms] "
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className=" md:w-[33%] px-3 flex justify-center items-center text-center md:mt-0 mt-4 ">
            <span className=" text-[13px] font-bold uppercase font-[font1] tracking-wider ">© 2025 <strong className=" text-[#29a587] font-bold ">yumpi</strong>. All rights reserved</span>
        </div>
        <div className=" md:w-[33%] px-3 flex justify-end items-center text-center md:mt-0 mt-4 ">
            <span className=" text-[13px] font-bold uppercase font-[font1] tracking-wider">Developed by <strong className="text-[#29a587] font-bold">nima yamini</strong></span>
        </div>
      </div>
    </footer>
  );
}
