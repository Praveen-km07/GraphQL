const Article = require('../model/article')

const resolvers = {
    Query:{
        articles:async () =>{ 
            try{
                const articles = await Article.find({});
                return articles;
            }catch(err){
                console.error(err);
                throw new Error('Error fetching articles');
            }     
        },
        article:async(parent,args) => {
            try{
                const article= await Article.findById(args.id);
                return article;
            }catch(err){
                console.error(err);
                throw new Error('Error fetching article')
            }
          
        }
    },
    Mutation:{
        createArticle:async(parent,args) =>{
          try {
            let article = new Article(args.articleInput);
            return article.save();
            
          } catch (error) {
              console.error(error);
              throw new Error('Error Saving the articles')
          }
        },
        updateArticle:async(parent,args) =>{
            try {
                return Article.findByIdAndUpdate(args.id,args.articleInput,{new:true});
            } catch (error) {
                console.error(error);
                throw new Error('Error in updating the articles')
            }
        },
        deleteArticle:async(parent,args) =>{
            try {
                return Article.findByIdAndDelete(args.id)
            } catch (error) {
                console.error(error);
                throw new Error('Error delete the articles')
            }
        }
    }
}

module.exports = resolvers