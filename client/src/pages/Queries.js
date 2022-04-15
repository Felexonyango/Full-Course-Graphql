import {gql} from '@apollo/client'


export const LOAD_USER =gql`
query{
getAllUsers{
name
username
age
nationality
}


}

`