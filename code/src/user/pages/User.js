import React from "react";

import UserList from "../components/UserList";

const User = () =>{

    const USERS= [
      {id:'U1',
    name:'vinothKumar', 
    image:'https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg',
    places:3}
  ];

    return(
       

          <UserList items={USERS}></UserList>

       
    )
}

export default User;