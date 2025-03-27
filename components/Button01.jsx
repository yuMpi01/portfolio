export default function Button01(props){
    return(
        <a
            href="#"
            className="skillsA sm:h-14 sm:px-10 h-10 px-5 relative overflow-hidden sm:text-[13px] text-[12px] font-bold uppercase tracking-wider rounded-[56px] border-[2px] border-black border-solid sm:leading-13 leading-9 shadow2 hover:text-white transition01 "
          >
            {props.text}
            <div className="skillsBtn"></div>
          </a>
    )
}