import React,{useEffect, useState} from "react";
import UserList from "../components/UserList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIelement/ErrorModal";
import LoadingSpinner from "../../shared/components/UIelement/LoadingSpinner";

const User = () =>{
  const {isLoading, error, sendRequest, clearError}= useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState()

useEffect(()=>{
 const fetchUsers = async()=>{ 

  try{
     const responseData = await sendRequest('http://localhost:4500/api/users');
     setLoadedUsers(responseData.users);
  }catch(err){
        console.log("Error in function fetchUsers: " + err)  
  }

 };
   fetchUsers();
},[sendRequest]);


return(  
        <React.Fragment>
            {/* <ErrorModal  error={error}  onClear={clearError} /> */}
            {isLoading &&(
            <div className="center">
              <LoadingSpinner />
              </div>
            )}
          {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
        </React.Fragment>       
    );
};

export default User;