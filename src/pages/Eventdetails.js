import { useState } from "react";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);


export default function Eventdetails() {

    let eventname = "Restaurant1"

    const initial_friends_price = {
        "Syed": 72.75,
        "Jame": 185.23,
        "Logan": 323.25,
        "Harsh": 25.25,
        "Ayman": 99.12,

    };

    const [friends_price, setFriendPrice] = useState(initial_friends_price);

    let total_price_update = 0;

    for(let key in friends_price){
        total_price_update += friends_price[key];

    }

    const [total_price, setTotal] = useState(total_price_update);

    const settlefunction = (key) => {
        let total_price_update = Math.round((total_price - friends_price[key])*100)/100;
        if (total_price_update < 0){
            total_price_update = 0;
        }
        friends_price[key] = 0;
        setFriendPrice(friends_price);
        setTotal(total_price_update)
        console.log(total_price)
        return;
    }

    const listItems = Object.keys(friends_price).map((key) =>
        <li>
            {key} owes: {friends_price[key]}
            <button onClick={() => settlefunction(key)}> Settle Up</button>
        </li>
    );

    const data = {
        labels: Object.keys(friends_price),
        datasets: [
          {
            label: 'money owed',
            data: Object.values(friends_price),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    


    return(
    <>
        <h1>{eventname}</h1>
        <h2>Total Price: {total_price}</h2>
        <ul>{listItems}</ul>
        <Pie data={data}></Pie>

    </>
    ); 
}