import React from "react";
import Card from "../../shared/components/UIelement/Card";
import PlaceItem from "./PlaceItem";
import './PlaceList.css';
import Button from "../../shared/components/FormElements/Button";
const PlaceList = props =>{
 if (props.items.length === 0){
    return(
      <div className="place-list center">
      <Card>
        <h2>No places found. maybe  create One?</h2>
        <Button to="/new/place">Share place</Button>
      </Card>
    </div>
    );
}
return<ul className="place-list">

    {props.items.map(place => (
    <PlaceItem key={place.id}
      id={place.id}
      image={place.imageUrl}
      title={place.title}
      description={place.description}
      address={place.address}
      creatorId={place.creator}
      coordinates={place.location}>

    </PlaceItem>))}
</ul>


};
export default PlaceList;