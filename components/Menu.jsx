import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";

export default function Menu() {
  const [showPages, setShowPages] = React.useState(false);
  const [showMenu,setShowMenu]=React.useState(false);

  function isShowPages() {
    setShowPages((prev) => !prev);
  }
  function isShowMenu() {
    setShowMenu((prev) => !prev);
  }

  let overflow=document.querySelector("body")

  showMenu ? overflow.style.overflow="hidden" : overflow.style.overflowY="scroll"

  return (
    <header className="w-screen py-7.5 px-14 fixed top-0 left-0 z-50 overflow-x-hidden">
      <div className="w-full h-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="font-[font1] uppercase text-2xl text-black font-bold">
            yumpi
          </p>
          <div className="w-2 h-2 rounded-full border-[3px] border-[#00A787]"></div>
        </div>
        <div>
          <div className="w-7 h-7.5 relative z-50 cursor-pointer" onClick={isShowMenu}>
            <div className={showMenu ? " w-7 h-[2.5px] bg-black absolute left-[50%] top-[50%] duration-500 -rotate-45 translate-[-50%] " : " w-7 h-[2.5px] bg-black absolute left-0 top-2 duration-500 "  }></div>
            <div className={showMenu ? " w-7 h-[2.5px] bg-black absolute left-[50%] top-[50%] duration-500 rotate-45 translate-[-50%] " : " w-7 h-[2.5px] bg-black absolute left-0 bottom-2 duration-500 "  }></div>
          </div>
        </div>
      </div>
      <div className={showMenu ? " smneu absolute w-lg h-screen py-17.5 top-0 right-0 bg-white z-40 overflow-hidden duration-1000" : " smneu absolute w-lg h-screen py-17.5 top-0 right-[-130%] bg-white z-40 overflow-hidden duration-1000"} >
        <div className=" w-full h-full relative ">
          <nav className=" py-17 pl-36 ">
            <ul>
              <li className=" mb-5 ">
                <Link
                  to={"/"}
                  className=" text-2xl leading-4 uppercase tracking-wider font-bold font-[font1] hover:text-[#29A587] duration-500 "
                >
                  <span>Home</span>
                </Link>
              </li>
              <li className=" mb-5 ">
                <a
                  href="#Skills"
                  className=" text-2xl leading-4 uppercase tracking-wider font-bold font-[font1] hover:text-[#29A587] duration-500 "
                >
                  <span>Skills</span>
                </a>
              </li>
              <li className=" mb-5 ">
                <a
                  href="#Portfolio"
                  className=" text-2xl leading-4 uppercase tracking-wider font-bold font-[font1] hover:text-[#29A587] duration-500 "
                >
                  <span>works</span>
                </a>
              </li>
              <li className=" mb-5 ">
                <a
                  href="#Blog"
                  className=" text-2xl leading-4 uppercase tracking-wider font-bold font-[font1] hover:text-[#29A587] duration-500 "
                >
                  <span>blog</span>
                </a>
              </li>
              <li className=" mb-5 ">
                <a
                  href="#Contact"
                  className=" text-2xl leading-4 uppercase tracking-wider font-bold font-[font1] hover:text-[#29A587] duration-500 "
                >
                  <span>Contact</span>
                </a>
              </li>
              <li className=" mb-5 " onClick={isShowPages}>
                <span className=" text-2xl leading-4 uppercase tracking-wider font-bold font-[font1] hover:text-[#29A587] duration-500 cursor-pointer ">
                  <span>pages</span>
                  <span className=" ml-2.5 text-xl font-black ">
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={
                        showPages
                          ? "rotate-180 duration-500"
                          : "rotate-0 duration-500"
                      }
                    />
                  </span>
                </span>
                <div className=" overflow-hidden p-6 pl-3 ">
                    <div className={showPages ? " translate-y-0 duration-500 opacity-100 " : " translate-y-[-130%] duration-500 opacity-0 "}>
                    <li className=" mb-5 ">
                  <Link
                    to={"/Works"}
                    className=" text-xl leading-4 uppercase tracking-wider font-medium font-[font1] hover:text-[#29A587] duration-500 "
                  >
                    <span>Works (List)</span>
                  </Link>
                    </li>
                    <li className=" mb-5 ">
                  <Link
                    to={"/SinglePost"}
                    className=" text-xl leading-4 uppercase tracking-wider font-medium font-[font1] hover:text-[#29A587] duration-500 "
                  >
                    <span>Single Post</span>
                  </Link>
                    </li>
                    </div>
                </div>
              </li>
            </ul>
          </nav>
          <div className=" absolute top-0 left-16 flex-col flex ">
            <div className=" w-56.5 h-56.5 absolute -top-45 -left-41 ">
              <img src="./../img/pat-1.png" alt="" />
            </div>
            <div className=" w-0.5 height bg-black relative ">
              <div className=" w-7.5 h-7.5 shadow2 bg-white border-[2px] border-black border-solid rounded-[30px] absolute -top-3.5 right-[50%] translate-x-[50%] "></div>
              <div className=" w-7.5 h-7.5 shadow2 bg-white border-[2px] border-black border-solid rounded-[30px] absolute -bottom-3.5 right-[50%] translate-x-[50%] "></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
