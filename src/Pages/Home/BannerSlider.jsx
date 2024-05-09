// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SingleSlide from './SingleSlide';



const BannerSlider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='relative'>
                    <img className='h-[600px] w-full' src="https://i.ibb.co/7zWX59z/Cartoon-Drawing-2.jpg" alt="" />
                    <SingleSlide text="Champion Change: Volunteer with Purpose!"></SingleSlide>

                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[600px] w-full' src="https://i.ibb.co/8DqsGcC/clay-banks-82-O37br-TLz-E-unsplash.jpg" alt="" />
                    <SingleSlide text="Community Catalysts: Activate Change Now!"></SingleSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[600px] w-full' src="https://i.ibb.co/12qw1VJ/alexandra-gorn-JIUjvqe2-ZHg-unsplash.jpg" alt="" />
                    <SingleSlide text="Hands-On Heroes: Make a Difference"></SingleSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[600px] w-full' src="https://i.ibb.co/hm5x5qX/chastity-cortijo-98-WE9h-WWji-Q-unsplash.jpg" alt="" />
                    <SingleSlide text="Creating Change Together: Volunteer Today!"></SingleSlide>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default BannerSlider;