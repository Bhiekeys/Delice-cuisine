import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
const Testimonial = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={true}
        className="lg:w-[50%] px-4"
        style={{ '--swiper-navigation-size': '30px' }}>
        {testimonials.map((testimonial) => {
          const { id, name, text } = testimonial;
          return (
            <SwiperSlide key={id}>
              <div className="w-full flex justify-center py-32 ">
                <div className="w-full bg-[#e759ac]   shadow-[3px_5px_5px_#eed9e5] md:px-12 px-6 text-center py-20 rounded-[30px]">
                  <p className="text-[#fff] mb-8 text-base md:text-[22px] ">
                    {text}
                  </p>
                  <span className="font-bold text-[#fff] text-base md:text-[19px]">
                    {name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

const testimonials = [
  {
    id: 1,
    name: 'Tinu Bhie',
    text: 'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
  },
  {
    id: 2,
    name: ' Abraham Happy',
    text: ' This place is great!They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, it’s 100% worth it.',
  },
];

export default Testimonial;
