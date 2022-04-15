
const graphql =require('graphql')
const {GraphQLObjectType,GraphQLSchema,GraphQLInt,GraphQLString,GraphQLList} =graphql
const {userData } = require("../UserData");
const {userType} =require("./userTypes");

const RootQuery = new GraphQLObjectType({
  name: 'rootQueryType',
  fields: {
    getAllUsers:{

      type:new GraphQLList(userType),
      args: {id :{type: GraphQLInt}},
      resolve(parent, args){
        return userData
      }
    }
  }
})

const mutation =new GraphQLObjectType({
  name: 'mutation',
  fields: {
    createUser:{
      type:userType,
      args:{
        name:{ type: GraphQLString},
        username:{ type: GraphQLString},
          age:{ type: GraphQLInt},
          nationality :{type:GraphQLString}
      },
      resolve(parent, args){
        userData.push({
          id:userData.length +1,
          name:args.name,
          username:args.username,
          age:args.age,
          nationality:args.nationality
        })
        return args
      }


    }
  }
})


 

module.exports = new GraphQLSchema({query:RootQuery,mutation:mutation})
