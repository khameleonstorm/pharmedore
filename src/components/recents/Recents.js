import s from './Recents.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation, Autoplay } from "swiper";
import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Recents({drugs}) {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 600) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={s.ctn}>
      <h1 className='title'>Our Recent Products</h1>
      <Swiper
        slidesPerView={slidesPerView}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation, Autoplay]}
        className={s.wrp}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >

          {drugs.map((drug, i) => 
          <SwiperSlide className={s.slide}>
            <div className={s.img}><img src={drug.img} alt='product image'/></div>

            <div className={s.txt}>
              <div className={s.header}>
                <h3>{drug.name}</h3>
                <div className={s.rating}> 
                  <Rating value={drug.rating} readOnly /> <p>Rating</p>
                </div>
              </div>

                <div className={s.desc}>
                  <p>{drug.desc}</p>
                </div>

                <p className={s.amount}>${drug.amount}</p>
            </div>
            <div className={s.btn}>+</div>
          </SwiperSlide> 
          )}
        
      </Swiper>
      <button className='bigBtn'>More Medications</button>
    </div>
  )
}
