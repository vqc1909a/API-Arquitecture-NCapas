const BaseRepository = require("./baseRepository");

class CommentRepository extends BaseRepository{
 constructor({Comment}){
  super(Comment);
 }
 getCommentsUser(author){ 
  return this.model.find({author})
  .then(response => response)
  .catch(err => console.log(err))
 }
}
module.exports = CommentRepository;