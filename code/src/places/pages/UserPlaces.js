import React from "react";
import  {useParams} from 'react-router-dom'
import PlaceList from "../components/PlaceList";


const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the Most famous Sky Scrapers in the world!',
        imageUrl: 'https://s39023.pcdn.co/wp-content/uploads/2022/10/Where-Are-Those-Morgans-Empire-State-Building.jpg.optimal.jpg',
        address: '20 W 34th St., New York, NY 10001, United States',
        location: {
            lat: 40.784405,
            lng: -73.9878584
        },
        creator: 'U1'

    },
    {
        id: 'p2',
        title: 'Empireeee State Building',
        description: 'One of the Most famous Sky Scrapers in the world!',
        imageUrl: 'https://s39023.pcdn.co/wp-content/uploads/2022/10/Where-Are-Those-Morgans-Empire-State-Building.jpg.optimal.jpg',
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