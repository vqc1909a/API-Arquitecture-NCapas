const BaseRepository = require("./baseRepository");

class IdeaRepository extends BaseRepository{
 constructor({Idea}){
  super(Idea);
 }
 getIdeasUser(author){ 
  return this.model.find({author})
  .then(response => response)
  .catch(err => console.log(err))
 }
}
module.exports = IdeaRepository;