// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../../assets/image1.jpg';
import slide_image_2 from '../../assets/image2.jpg';
import slide_image_3 from '../../assets/image3.jpg';
import slide_image_4 from '../../assets/image4.jpg';


function Banner() {
    const bannerHeading = <>
        <div className=" text-white">
            <h2 className="font-bold text-3xl md:text-7xl">DREAM<span className="text-blue-500">DESTINATION</span></h2>
            <p>Choose your destination</p>
        </div>
    </>

    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${slide_image_1})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${slide_image_2})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div  className=" w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${slide_image_3})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div  className="w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${slide_image_4})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;