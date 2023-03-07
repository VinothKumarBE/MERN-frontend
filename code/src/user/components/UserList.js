import React from "react";
import './UserList.css';

import UserItem from "./UserItem";


const UserList = props =>{
    

    if(props.items.length === 0){
        return(<div className="center">
            <h2> No Users Found</h2>
        </div>
        );
    }

    return(
    <ul className="user-list">
            {props.items.map(user => (
                 <UserItem key={user.id}
                   id={user.id}
                   image={user.image}
                   name={user.name}
                   placesCount={user.places}
                 
                 
                 />
            ))}

    </ul>
    )  
}

export default UserList;