const express =require('express')
const app =express()
const cors =require('cors')
const {graphqlHTTP} =require('express-graphql')
app.use(cors())
const schema = require('./schema/resolvers')
app.use(express.json())
app.get("/graphql",
  graphqlHTTP({
      schema,
      graphiql: true

  })

)
app.listen(5000,()=>console.log('listening on port 5000'))