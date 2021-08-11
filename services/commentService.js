const BaseService = require("./baseService");

class CommentService extends BaseService{
 constructor({Comment}){
  super(Comment);
 }
 async createComment(ideaId, comment){
  if(!ideaId){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  }
  const idea = await this.model.findById(ideaId);
  if(!idea){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  }
  const createdComment = await this.model.create(comment); 
  idea.comments.push(createdComment._id);

  return idea.save();
 }
 async getUserComment(commentId){
  if(!commentId){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  }
  const comment = await this.model.findById(commentId);
  if(!comment){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  }
  return comment
 }
}
module.exports = CommentService;