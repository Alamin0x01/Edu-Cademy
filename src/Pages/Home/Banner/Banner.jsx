import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Banner = () => {
  return (
    <>
      <div className="">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper bg-cyan-300"
        >
          <SwiperSlide
            className="bg-cover bg-left md:bg-center cursor-grab"
            style={{
              backgroundImage: `url('https://i.ibb.co/SnW4wLh/stock-photo-learn-learning-education-knowledge-wisdom-studying-concept-372270265.jpg')`,
            }}
          >
            <div className="min-h-[calc(100vh-72px)] bg-gradient-to-r from-slate-800 to-transparent md:from-transparent md:to-cyan-800 grid grid-cols-12 items-center px-10 xl:px-20">
              <div className="col-span-1 md:col-span-6 lg:col-span-8"></div>

              <div className="space-y-3 col-span-11 md:col-span-6 lg:col-span-4 text-slate-300 font-semibold">
                <p>Fuel your imagination!</p>
                <h2 className="my-title text-cyan-300 !text-6xl">
                  Online <br /> Language School
                </h2>
                <p>
                  Premium course for the genuine start. The best place to your
                  buy best course. We provide course for all people.
                </p>
                <button className="btn border-none bg-cyan-400 hover:bg-cyan-700">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="bg-cover cursor-grab"
            style={{
              backgroundImage: `url('https://educationnorthwest.org/sites/default/files/graphics/teacher-instruction-ell.png')`,
            }}
          >
            <div className="min-h-[calc(100vh-72px)] bg-gradient-to-r from-emerald-200 to-transparent md:from-transparent md:to-cyan-800 grid grid-cols-12 items-center px-10 xl:px-20">
              <div className="col-span-1 md:col-span-6 lg:col-span-8"></div>
              <div className="space-y-3 col-span-11 md:col-span-6 lg:col-span-4 text-slate-300 font-semibold">
                <p>Your learning store!</p>
                <h2 className="my-title text-cyan-300 !text-6xl">
                  The Ultimate <br /> Best Course
                </h2>
                <p>
                  Delivering smile with Courses. Get your unbeatable fun and
                  learning experience with our creative ideas.
                </p>
                <button className="btn border-none bg-cyan-400 hover:bg-cyan-700">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="bg-cover bg-center cursor-grab"
            style={{
              backgroundImage: `url('https://ua-networks.com/assets/images/blog/imglernbl.jpg')`,
            }}
          >
            <div className="min-h-[calc(100vh-72px)] bg-gradient-to-r  from-slate-800 to-transparent md:from-transparent md:to-cyan-800 grid grid-cols-12 items-center px-10 xl:px-20">
              <div className="col-span-1 md:col-span-6 lg:col-span-8"></div>
              <div className="space-y-3 col-span-11 md:col-span-6 lg:col-span-4 text-slate-300 font-semibold">
                <p>Big fun for !</p>
                <h2 className="my-title text-cyan-300 !text-6xl">
                  Learn and <br /> Explore World
                </h2>
                <p>
                  Active learn for smart and active peoples. Bring fun and
                  non-stop learning for your little ones.
                </p>
                <button className="btn border-none bg-cyan-400 hover:bg-cyan-700">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
