import Menu from "../components/Menu"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReply } from "@fortawesome/free-solid-svg-icons"
import blog01 from "./../img/blog01.jpg"

export default function SinglePost(){
    return(
        <>
            <Menu/>

            <div className="wrapper w-full overflow-x-hidden overflow-y-clip">
                <section className=" w-screen relative ">
                    <div className=" w-full flex flex-col items-center pt-55 pb-20 ">
                        <p className=" font-normal leading-[1.7] ">
                            <span className=" font-[font1] text-[#29a587] font-bold ">Branding</span>
                            ,
                            <span className=" font-[font1] text-[#29a587] font-bold "> UI Design </span>
                            / October 31, 2022 / by admin
                        </p>
                        <h1 className=" max-w-[90%] lg:text-5xl text-4xl leading-[1.3] font-bold uppercase font-[font1] tracking-wider text-center mt-2.5 ">The Main Thing For The Designer</h1>
                    </div>
                    <div className=" w-full h-[740px] bg-teal-400 ">
                        <img src={blog01} alt="" className=" w-full h-full object-cover " />
                    </div>
                    <div className=" absolute right-8 bottom-40 flex-col sm:flex hidden ">
                        <div className=" w-56 h-56 absolute -top-45 -right-42.5 ">
                            <img src="./../img/pat-1.png" alt="" />
                        </div>
                        <div className=" w-0.5 h-[720px] bg-black relative ">
                            <div className=" w-7.5 h-7.5 shadow2 bg-white border-[2px] border-black border-solid rounded-[30px] absolute top-[-15px] right-[50%] translate-x-[50%] "></div>
                            <div className=" w-7.5 h-7.5 shadow2 bg-white border-[2px] border-black border-solid rounded-[30px] absolute bottom-[-15px] right-[50%] translate-x-[50%] "></div>
                        </div>
                    </div>
                </section>
                <section className=" w-screen h-fit relative py-25 flex justify-center ">
                    <div className=" xl:w-[70%] lg:w-[80%] w-[90%] flex flex-col items-start ">
                        <p className=" my-7.5 leading-[1.7] text-[rgb(38,38,38)] ">Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare eget ligula vel, commodo luctus felis. Ut dignissim sapien sit amet molestie rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque in porta dolor, a suscipit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac arcu in lorem rhoncus ullamcorper. Ut at nulla ut libero mollis viverra sed vitae purus.</p>
                        <p className=" mb-7.5 leading-[1.7] text-[rgb(38,38,38)] ">
                        Nam dui mauris, congue vel nisi in, tempus gravida enim. Nulla et tristique orci. Pellentesque lectus sapien, maximus id gravida sit amet, tristique non eros. Etiam aliquet, sem vitae sagittis convallis, ante sapien tincidunt nisl, eget dapibus tortor velit quis ex. Proin et condimentum est, sed pretium ex. Mauris posuere est metus, vitae commodo sem posuere eget. Praesent maximus augue rutrum, consequat magna id, facilisis lorem. Quisque molestie, turpis ac interdum gravida
                        </p>
                        <div className=" w-full my-12.5 ml-12.5 px-12.5 pt-16 text-[22px] leading-[1.3] border-l-[1px] border-l-black border-l-solid relative ">
                            <div className=" absolute top-0 ">
                                <img src="./../img/quote2.png" alt="" />
                            </div>
                            <p className=" text-[22px] text-[rgb(38,38,38)] leading-[1.3] my-7.5 ">Photography is the story I fail to put into words get ligula vel, commodo luctus felis. Ut dignissim sapien sit amet molestie rutr</p>
                            <p className=" text-[16px] font-bold text-[#29a587] ">– Destin Sparks</p>
                        </div>
                        <h3 className=" mt-23 font-bold leading-[1.3] text-4xl ">Aliquam vel sem vel vellesuada</h3>
                        <p className=" my-7.5 text-[rgb(38,38,38)] leading-[1.7] ">Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare eget ligula vel, commodo luctus felis. Ut dignissim sapien sit amet molestie rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque in porta dolor, a suscipit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac arcu in lorem rhoncus ullamcorper. Ut at nulla ut libero mollis viverra sed vitae purus.</p>
                        <div className=" w-full flex sm:flex-nowrap flex-wrap justify-between ">
                            <div className=" sm:w-[50%] w-full p-4 ">
                            <img src="./../img/img01.jpg" alt="" />
                            </div>
                            <div className=" sm:w-[50%] w-full p-4 ">
                            <img src="./../img/img02.jpg" alt="" />
                            </div>
                        </div>
                        <p className=" my-7.5 text-[rgb(38,38,38)] leading-[1.7] ">Nam dui mauris, congue vel nisi in, tempus gravida enim. Nulla et tristique orci. Pellentesque lectus sapien, maximus id gravida sit amet, tristique non eros. Etiam aliquet, sem vitae sagittis convallis, ante sapien tincidunt nisl, eget dapibus tortor velit quis ex. Proin et condimentum est, sed pretium ex. Mauris posuere est metus, vitae commodo sem posuere eget. Praesent maximus augue rutrum, consequat magna id, facilisis lorem. Quisque molestie, turpis ac interdum gravida</p>
                        <ul className=" list-disc list-inside ">
                            <li className=" leading-[1.7] ">Donec arcu lacus, ornare eget ligula vel, commodo luctus felis.</li>
                            <li className=" leading-[1.7] ">Ut dignissim sapien sit amet molestie rutrum.</li>
                            <li className=" leading-[1.7] ">Orci varius natoque penatibus et magnis dis parturient montes.</li>
                            <li className=" leading-[1.7] ">Ut at nulla ut libero mollis viverra sed vitae purus.</li>
                        </ul>
                        <p className=" my-7.5 text-[rgb(38,38,38)] leading-[1.7] ">Nam dui mauris, congue vel nisi in, tempus gravida enim. Nulla et tristique orci. Pellentesque lectus sapien, maximus id gravida sit amet, tristique non eros. Etiam aliquet, sem vitae sagittis convallis, ante sapien tincidunt nisl, eget dapibus tortor velit quis ex.</p>
                        <div className=" flex items-center gap-2.5 my-7.5 ">
                            <p>Tags:</p>
                            <div className=" text-[14px] py-2 px-5 border-[1px] border-solid border-[#29a587] font-bold leading-[1] ">Design</div>
                            <div className=" text-[14px] py-2 px-5 border-[1px] border-solid border-[#29a587] font-bold leading-[1] ">HTML</div>
                            <div className=" text-[14px] py-2 px-5 border-[1px] border-solid border-[#29a587] font-bold leading-[1] ">Css</div>
                            <div className=" text-[14px] py-2 px-5 border-[1px] border-solid border-[#29a587] font-bold leading-[1] ">React</div>
                        </div>
                        <div className=" w-full mt-25 ">
                            <div className=" w-full ">
                                <div className=" text-[font1] text-4xl font-bold font-[font1] tracking-wider leading-[1.3] uppercase ">2 Comments</div>
                                <div className=" w-full ">
                                    <div className=" flex my-15 ">
                                        <div className=" w-16 h-16 rounded-full overflow-hidden mr-10 ">
                                            <img src="./../img/avatar.png" alt="" className=" w-full h-full " />
                                        </div>
                                        <div className=" w-[80%] ">
                                            <h5 className=" text-[22px] font-bold leading-[1.3] font-[font1] ">
                                                Robert Brown 
                                                <p className=" text-[16px] mt-2 font-normal text-[#777777] ">December 9, 2021</p>
                                            </h5>
                                            <p className=" my-7.5 text-[rgb(38,38,38)] leading-[1.7] ">Nam dui mauris, congue vel nisi in, tempus gravida enim. Nulla et tristique orci. Pellentesque lectus sapien, maximus id gravida sit amet, tristique non eros. Etiam aliquet, sem vitae sagittis convallis, ante sapien tincidunt nisl, eget dapibus tortor velit quis ex.</p>
                                            <p className=" font-bold text-[#29a587] flex gap-2.5 items-center ">
                                                <FontAwesomeIcon icon={faReply} />
                                                Reply
                                            </p>
                                        </div>
                                    </div>
                                    <div className=" flex ">
                                        <div className=" w-16 h-16 rounded-full overflow-hidden mr-10 ">
                                            <img src="./../img/avatar.png" alt="" className=" w-full h-full " />
                                        </div>
                                        <div className=" w-[80%] ">
                                            <h5 className=" text-[22px] font-bold leading-[1.3] font-[font1] ">
                                                Ryan Berg
                                                <p className=" text-[16px] mt-2 font-normal text-[#777777] ">December 9, 2021</p>
                                            </h5>
                                            <p className=" my-7.5 text-[rgb(38,38,38)] leading-[1.7] ">Proin et condimentum est, sed pretium ex. Mauris posuere est metus, vitae commodo sem posuere eget.</p>
                                            <p className=" font-bold text-[#29a587] flex gap-2.5 items-center ">
                                                <FontAwesomeIcon icon={faReply} />
                                                Reply
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full mt-25 ">
                                <div className=" text-[font1] text-4xl font-bold font-[font1] tracking-wider leading-[1.3] uppercase ">Leave a comment</div>
                                <form className=" my-8 ">
                                    <div className=" mb-7.5 ">
                                        <textarea name="comment" rows="3" placeholder="Comment" required className=" w-full h-36 py-5 px-7.5 border-[2px] border-black border-solid rounded-4xl bg-white resize-none "></textarea>
                                    </div>
                                    <div className=" mb-7.5 ">
                                        <input type="text" name="author" placeholder="Name" required className=" w-full h-15 py-5 px-7.5 border-[2px] border-black border-solid rounded-4xl bg-white resize-none "/>
                                    </div>
                                    <div className=" mb-7.5 ">
                                        <input type="email" name="email" placeholder="Email" required className=" w-full h-15 py-5 px-7.5 border-[2px] border-black border-solid rounded-4xl bg-white resize-none "/>
                                    </div>
                                    <div className=" mb-7.5 ">
                                        <button type="submit" name="submit" className="skillsA sm:h-14 sm:px-10 h-10 px-5 relative overflow-hidden sm:text-[13px] text-[12px] font-bold uppercase tracking-wider rounded-[56px] border-[2px] border-black border-solid sm:leading-[52px] leading-9 shadow2 hover:text-white transition01 cursor-pointer">
                                            submit
                                            <div className="skillsBtn"></div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className=" absolute left-3 bottom-40 flex-col sm:flex hidden ">
                        <div className=" w-56.5 h-56.5 absolute -top-45 -left-42.5 ">
                            <img src="./../img/pat-1.png" alt="" />
                        </div>
                        <div className=" w-0.5 h-[3000px] bg-black relative ">
                            <div className=" w-7.5 h-7.5 shadow2 bg-white border-[2px] border-black border-solid rounded-[30px] absolute -top-3.5 right-[50%] translate-x-[50%] "></div>
                            <div className=" w-7.5 h-7.5 shadow2 bg-white border-[2px] border-black border-solid rounded-[30px] absolute -bottom-3.5 right-[50%] translate-x-[50%] "></div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer/>
        </>
    )
}