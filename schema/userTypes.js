const graphql =require("graphql");
const  {GraphQLObjectType,GraphQLInt,GraphQLString}=graphql

const userType = new GraphQLObjectType({
  name: "user",
  fields:()=>({
    id:{ type: GraphQLInt},
    name:{ type: GraphQLString},
  username:{ type: GraphQLString},
    age:{ type: GraphQLInt},
    nationality:{type: GraphQLString}
  })

})
module.exports={userType}