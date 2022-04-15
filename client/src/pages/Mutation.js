import { gql } from "@apollo/client";
export const CREATE_USER_MUTATION =gql`


mutation  createUser(
$name:string!,
$username:string!,
$age:integer!,
$nationality:string!
){
    createUser (
        name:$name,
        username:$username,
        age:$age,
        nationality:$nationality
    ){

     id
    }


}



`