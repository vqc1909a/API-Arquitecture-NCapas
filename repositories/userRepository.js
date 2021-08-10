const BaseRepository = require("./baseRepository");

class UserRepository extends BaseRepository{
 constructor({User}){
  super(User);
 }
 getUserByUsername(username){
  return this.model.findOne({username})
  .then(response => response)
  .catch(err => console.log(err))
 }
}
module.exports = UserRepository;