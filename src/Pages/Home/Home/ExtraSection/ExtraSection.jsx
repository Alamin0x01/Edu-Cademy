import extra from "../../../../assets/extra-animation.json";
import Lottie from "lottie-react";

const ExtraSection = () => {
  return (
    <div>
      <div className="mb-6">
        <Lottie animationData={extra} loop={true} />
      </div>
    </div>
  );
};

export default ExtraSection;
