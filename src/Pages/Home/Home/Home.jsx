import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Edu-Cademy</title>
      </Helmet>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <Review></Review>
    </div>
  );
};

export default Home;
