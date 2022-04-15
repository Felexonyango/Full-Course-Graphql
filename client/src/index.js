import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient,ApolloProvider,InMemoryCache,createHttpLink,from} from '@apollo/client'
import {onError} from '@apollo/client/link/error'
const errorLink = onError(({graphQLErrors, networkError})=>{
  if(graphQLErrors){
    graphQLErrors.map(({message,location,path})=>{
      alert(`Graphql Error ${message}`)
    })
  }
})

const link =from([
  errorLink,
 new createHttpLink({ uri:"http://localhost:5000/graphql"}),

])
const client = new ApolloClient({  
  cache:new InMemoryCache(),
  link:link
 })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ApolloProvider client={client}>
<App />
</ApolloProvider>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
