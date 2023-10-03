import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardVideo from "../CardsVideo";
import styles from './Slides.module.css'
register();

const Slides = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
  return (
    <div className={styles.container}>
      <Swiper
    slidesPerView={1}
    pagination={{clickable: true}}
    navigation
    
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} >
          <CardVideo className={styles.item} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};
export default Slides;
