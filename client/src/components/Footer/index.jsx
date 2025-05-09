import "./index.css";
import slateLogo from "../../assets/SlateAI-Logo.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import insta from "../../assets/instagram.png";
import mail from "../../assets/mailIcon.png";

export const Footer = () => {
  return (
    <div className="h-[15%] mt-16 bg-white p-2 opacity-75  flex md:justify-between flex-col  md:flex-row  items-center">
      <div className="flex justify-between items-center">
        <img className="ml-5 mr-3 w-[40px]" src={slateLogo} alt="img" />
        <span className="text-gray-700 "> &#169; 2025 CoDraw.AI</span>
      </div>

      {/* socials */}
      <div className=" flex flex-col">
        <p className="my-3 font-semibold text-center text-xl text-gray-700 ">{`Let's Connect`}</p>
        <div className="flex justify-around items-center">
          <a href={"https://www.linkedin.com/in/choubeyashu/"}>
            <img className="w-[20px] " src={linkedin} alt="img" />
          </a>
          <a href={"https://twitter.com/"}>
            <img className="w-[20px]" src={twitter} alt="img" />
          </a>
          <a href={"https://www.instagram.com/"}>
            <img className="w-[20px]" src={insta} alt="img" />
          </a>
          <a href={"mailto: techashu18@gmail.com"}>
            <img className="w-[20px]" src={mail} alt="img" />
          </a>
        </div>
      </div>
    </div>
  );
};
