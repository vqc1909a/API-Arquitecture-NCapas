const BaseService = require("./baseService");

class IdeaService extends BaseService{
 constructor({Idea}){
  super(Idea);
 }
 async createUpVoteIdea(ideaId){
  if(!ideaId){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  } 
  const idea = await this.model.findById(ideaId);
  if(!idea){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  }
  idea.upvotes.push(true);
  return idea.save()
 }

 async createDownVoteIdea(ideaId){
  if(!ideaId){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  } 
  const idea = await this.model.findById(ideaId);
  if(!idea){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  }
  idea.downvotes.push(true);
  return idea.save()
 }
 async getAuthorIdea(ideaId){
   if(!ideaId){
    const error = new Error({message: "Page Not Found", status : 404});
    throw error
   }
   const idea = await this.model.findById(ideaId);
   if(!idea){
    const error = new Error({message: "Page Not Found", status : 404});
    throw error
   }
   return idea.author   
 }
 async getCommentsIdea(ideaId){
   if(!ideaId){
    const error = new Error({message: "Page Not Found", status : 404});
    throw error
   }
   const idea = await this.model.findById(ideaId);
   if(!idea){
    const error = new Error({message: "Page Not Found", status : 404});
    throw error
   }
   return idea.comments
  }
}
module.exports = IdeaService;