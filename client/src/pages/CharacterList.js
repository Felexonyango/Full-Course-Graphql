import React from 'react'
import { gql, useQuery } from '@apollo/client';
const  GET_CHARACTER = gql`

query{
    country(code: "KE") {
    name
    native
    capital
    emoji
    currency
    
}


}

`

const CharacterList = () => {
    const {data,error,loading} =useQuery(GET_CHARACTER)

    console.log({data,error,loading})
if (loading) return <div>Loading ....</div>
if(error) return <div>Error  Something went wrong...</div> 
  return (
  <div>

      {data.country}
  </div>
  )
}

export default CharacterList