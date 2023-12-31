import React from 'react'
import { useNavigate } from 'react-router-dom'
import SwiperTitle from '../app_title/app_title'
import AppSwiperSlide from '../app_swiper/app_swiper_slide'
import SwiperCard from '../app_swiper/swiper_card'
import AppSwiper from '../app_swiper/app_swiper'
import './swiper_container.css'

const SwiperContainer = ({ title, data }) => {
  let navigate = useNavigate()

  return (
    <div>
      <SwiperTitle>{title}</SwiperTitle>
      <AppSwiper >
        {data?.map((e, index) => (
          <AppSwiperSlide key={index}>
            <div className="box-container" style={{
              backgroundImage: `url(${e.poster})`,   
            }} 
              onClick={() => { navigate(`/${e.id}`) }}>
              <SwiperCard title={e.title}>
              </SwiperCard>
            </div>
          </AppSwiperSlide>
        ))}</AppSwiper>
    </div>
  )
}

export default SwiperContainer