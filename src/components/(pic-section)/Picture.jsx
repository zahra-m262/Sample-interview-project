import Image from "next/image";
import LeftPic from "@/src/assets/left-pic.png";
import RightPic from "@/src/assets/right-pic.png";

import "@/src/styles/picture.modules.css";

const Picture = () => {
  return (
    <div className="picture-container">
      <Image className="left-pic" src={LeftPic} alt="picture" />
      <Image className="right-pic" src={RightPic} alt="picture" />
    </div>
  );
};

export default Picture;
