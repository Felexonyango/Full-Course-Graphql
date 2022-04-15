import React,{useState} from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from './Mutation';

const Form = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");


  const [createUser,{error}] = useMutation(CREATE_USER_MUTATION);

 const addUser =()=>{
   createUser({
     variables:{
      name:name,
      username:username,
      age:age,
      nationality:nationality
     }
     
   })

 }
 if(error){
   console.log(error);
 }
  return (
    <div>
    <input
    type="text"
    placeholder="Name..."
    onChange={(event) => {
      setName(event.target.value);
    }}
  />
  <input
    type="text"
    placeholder="Username..."
    onChange={(event) => {
      setUsername(event.target.value);
    }}
  />
  <input
    type="number"
    placeholder="Age..."
    onChange={(event) => {
      setAge(event.target.value);
    }}
  />
  <input
    type="text"
    placeholder="Nationality..."
    onChange={(event) => {
      setNationality(event.target.value.toUpperCase());
    }}
  />
        <button
          onClick={addUser}>
          Create User
        </button>
  </div>
  )
}

export default Form