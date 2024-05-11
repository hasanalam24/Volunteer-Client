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
                <SwiperSlide className='relative '>
                    <img className='h-[600px] w-full ' src="https://i.ibb.co/ScrFjy0/shelley-pauls-Tsz-4-K1s-S9w-unsplash.jpg" alt="" />
                    <SingleSlide text="Champion Change: Volunteer with Purpose!"></SingleSlide>

                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[600px] w-full' src="https://i.ibb.co/vqqgXW7/ray-sangga-kusuma-7u-Sr-Oy-Y1-U0-I-unsplash.jpg" alt="" />
                    <SingleSlide text="Community Catalysts: Activate Change Now!"></SingleSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[600px] w-full' src="https://i.ibb.co/wpDNLSC/joel-muniz-A4-Ax1-Apccf-A-unsplash.jpg" alt="" />
                    <SingleSlide text="Hands-On Heroes: Make a Difference"></SingleSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[600px] w-full' src="https://i.ibb.co/hy19MkL/daniel-funes-fuentes-Ty-Lw3-IQALMs-unsplash.jpg" alt="" />
                    <SingleSlide text="Creating Change Together: Volunteer Today!"></SingleSlide>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default BannerSlider;