import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style';
import 'swiper/css/swiper.css';
import Swiper from 'swiper';

function Slider (props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;


  // const changeList = () => {
  //   console.log('a');
  //   bannerList.push({imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg", key: bannerList.length})
  //   setBannerList([...bannerList]);
  // } 


  useEffect(() => {
    if(bannerList.length && !sliderSwiper) {
      let sliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {el: '.swiper-pagination'}
      });
      setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map(slider => {
              return (
                <div className="swiper-slide" key={slider.key}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} alt="推荐" width="100%" height="100%"/>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
      {/* <button onClick={changeList}></button> */}
    </SliderContainer>
  )
}

export default React.memo(Slider, (prev, next)=> {
  if(prev.bannerList.length !== next.bannerList.length) {
    return false
  }
});