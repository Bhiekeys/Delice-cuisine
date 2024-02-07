import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
const Testimonial = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={true}
        className="w-[50%]">
        <SwiperSlide>
          <div className="w-[100%] flex justify-center py-32 ">
            <div className="w-[100%] bg-[#e759ac]  shadow-[3px_5px_5px_#eed9e5] px-12 text-center py-20 rounded-[30px]">
              <p className="text-[#fff] mb-8 text-[22px] ">
                This cozy restaurant has left the best impressions! Hospitable
                hosts, delicious dishes, beautiful presentation, wide wine list
                and wonderful dessert. I recommend to everyone! I would like to
                come back here again and again.
              </p>
              <span className="font-bold text-[#fff] text-[19px]">
                Tinu Bhie
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%] flex justify-center py-32 ">
            <div className="w-[100%] bg-[#e759ac]  shadow-[3px_5px_5px_#eed9e5] px-12 text-center py-20 rounded-[30px]">
              <p className="text-[#fff] mb-8 text-[22px] ">
                This place is great!They know what they’re doing and what
                they’re talking about, and you can tell making the customers
                happy is their main priority. Food is pretty good, it’s 100% worth
                it.
              </p>
              <span className="font-bold text-[#fff] text-[19px]">
                Abraham Happy
              </span>
            </div>
          </div>{' '}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
