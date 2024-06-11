const {Schema,model} = require('mongoose')

const articleSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    }
})

module.exports = model('Article',articleSchema)