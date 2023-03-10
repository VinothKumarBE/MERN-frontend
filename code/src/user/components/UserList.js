import React from "react";
import './UserList.css';
import Card from "../../shared/components/UIelement/Card";

import UserItem from "./UserItem";


const UserList = props =>{
    

    if(props.items.length === 0){
        return(
        <div className="center">
           <Card>
              <h2> No Users Found</h2>
           </Card>
        </div>
        );
    }

    return(
    <ul className="users-list">
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