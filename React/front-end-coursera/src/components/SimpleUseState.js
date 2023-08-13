import {useState} from 'react';

export default function SimpleUseState() {
    const restaurantName = useState("LEMON");
    console.log(restaurantName);
    return null;
};