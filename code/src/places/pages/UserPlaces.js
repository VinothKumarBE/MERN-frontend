import React from "react";
import  {useParams} from 'react-router-dom'
import PlaceList from "../components/PlaceList";


const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the Most famous Sky Scrapers in the world!',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=s1360-w1360-h1020',
        address: '20 W 34th St., New York, NY 10001, United States',
        location: {
            lat: 40.784405,
            lng: -73.9878584
        },
        creator: 'U1'

    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the Most famous Sky Scrapers in the world!',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=s1360-w1360-h1020',
        address: '20 W 34th St., New York, NY 10001, United States',
        location: {
            lat: 40.784405,
            lng: -73.9878584
        },
        creator: 'U2'

    }
];

const UserPlaces = () =>{


    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return<PlaceList items={loadedPlaces} />;


};
export default UserPlaces;