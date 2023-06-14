import extra from "../../../../assets/extra-animation.json";
import line from "../../../../assets/line.json";
import Lottie from "lottie-react";

const ExtraSection = () => {
  return (
    <div>
      <div className="mb-3">
        <Lottie animationData={extra} loop={true} />
      </div>
      <div className="mb-6">
        <Lottie animationData={line} loop={true} />
      </div>
    </div>
  );
};

export default ExtraSection;
