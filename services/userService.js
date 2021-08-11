const BaseService = require("./baseService");

class UserService extends BaseService{
 constructor({User}){
  super(User);
 }
 getUserByUsername(username){
  if(!username){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  } 
  return this.model.findOne({username})
 }

 getIdeasUser(author){ 
  if(!author){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  } 
  return this.model.find({author}, {comments: 1})
 }
 
 getCommentsUser(author){ 
  if(!author){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  } 
  return this.model.find({author})
 }
}
module.exports = UserService;