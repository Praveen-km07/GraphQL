const {ApolloServer,gql} = require('apollo-server')
const mongoose = require('mongoose')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const PORT = 4000

const URL = "mongodb+srv://testingudemyprojects:wJDd43uXzGpVmHSQ@cluster0.0qqdtj3.mongodb.net/testDB"

// mongoose.set('useFindAndModify', false);

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology: true})
mongoose.connection.once('open',()=>{
    console.log('Database connection is successful')
})
mongoose.connection.on('error',()=>{
    console.log('Error while connecting data base')
})

//Printing Hello World
// //schema
// const typeDefs = gql `
//    type Query{
//     hello:String
//    }
// `

// //Resolver
// const resolvers= {
//     Query:{
//         hello:function(){
//             return 'Hello, welcome to GraphQL'
//         }
//     }
// }

const server= new ApolloServer({typeDefs,resolvers})
server.listen(PORT).then(function({url}){
    console.log(`Server started at ${url}`)
})