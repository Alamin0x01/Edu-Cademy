import line0 from "../../../src/assets/icon.json";
import line from "../../../src/assets/line-animation.json";
import Lottie from "lottie-react";
const SectionTitle = ({ title }) => {
  return (
    <div className=" text-center gap-2">
      <div>
        <Lottie className="h-16" animationData={line0} loop={true} />
      </div>
      <div>
        <h3 className="text-3xl  font-bold text-cyan-400">{title}</h3>
      </div>
      <div>
        <Lottie className="h-16" animationData={line} loop={true} />
      </div>
    </div>
  );
};

export default SectionTitle;
