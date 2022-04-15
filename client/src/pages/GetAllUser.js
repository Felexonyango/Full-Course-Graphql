import React, { useState,useEffect } from "react";
import { useQuery,gql } from "@apollo/client";
import { LOAD_USER } from "./Queries";


function GetAllUser() {
  const { data,loading,error } = useQuery(LOAD_USER)
 

  const[users,setUsers]= useState([]);

 
  useEffect(()=>{
    if(data){
      setUsers(data.getAllUsers[0])


    }

  },[data])
 

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;


  return (
    <div>
    
      {
        users.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Username: {user.username}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Nationality: {user.nationality}</h1>
            </div>
          );
        })}

     
      </div>
   
  );
}

export default GetAllUser
