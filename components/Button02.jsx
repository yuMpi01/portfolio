import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button02(props) {
  return (
    <a href="#" className=" font-bold group relative mt-5 inline-block">
      {props.text}
      <span className="text-[#29a587] font-black ml-5 transition01 absolute group-hover:translate-x-[-6px]">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </a>
  );
}
