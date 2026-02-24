import React from 'react';
import CartImg from "../assets/cardimg.jpg"

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
        }, {
            id: 3,
            title: "Card 1",
            description:"Description for Card 1",
            imageUrl: "http://via.placeholder.com/150"
        },
    ];

  return (
    <div className="text-white md:px-4">
        <h2 className="pt-10 pb-5 text-lg font-medium">Upcoming</h2>

        <div className="flex">
        {data.map((item) =>(
            <div>
                <img src={CartImg} alt=""/>
                <p className="text-center pt-2"> A very good movie </p>
            </div>
        ))}
    </div>
    </div>
  );
};

export default CardList;
