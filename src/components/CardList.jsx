import React from 'react';
import CartImg from "../assets/cardimg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardList = () => {
    const data = [
        {
            id: 1,
            title: "Card 1",
            description:"Description for Card 1",
            imageUrl: "http://via.placeholder.com/150"
        },
         {
            id: 2,
            title: "Card 1",
            description:"Description for Card 1",
            imageUrl: "http://via.placeholder.com/150"
        }, 
        {
            id: 3,
            title: "Card 1",
            description:"Description for Card 1",
            imageUrl: "http://via.placeholder.com/150"
        },
        {
            id: 3,
            title: "Card 1",
            description:"Description for Card 1",
            imageUrl: "http://via.placeholder.com/150"
        },
        {
            id: 3,
            title: "Card 1",
            description:"Description for Card 1",
            imageUrl: "http://via.placeholder.com/150"
        },
        {
            id: 3,
            title: "Card 1",
            description:"Description for Card 1",
            imageUrl: "http://via.placeholder.com/150"
        },
        {
            id: 3,
            title: "Card 1",
            description:"Description for Card 1",
            imageUrl: "http://via.placeholder.com/150"
        },
    ];

  return (
    <div className="text-white md:px-4">
        <h2 className="pt-10 pb-5 text-lg font-medium">Upcoming</h2>

        <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
        {data.map((item, index) =>(
            <SwiperSlide key={index} className="max-w-72">
                <img src={CartImg} alt="" 
                className="h-44 w-full object-center object-cover"
                />
                <p className="text-center pt-2"> A very good movie </p>
            </SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
};

export default CardList;
