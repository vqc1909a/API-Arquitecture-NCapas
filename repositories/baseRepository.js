class BaseRepository{
 constructor(model){
  this.model = model;
 }
 get(id){
  return this.model.findById(id)
  .then(response => response)
  .catch(err => console.log(err))
 }
 getAll(){
  return this.model.find({})
  .then(response => response)
  .catch(err => console.log(err))
 }
 create(entity){
  this.model.create(entity)
  .then(response => response)
  .catch(err => console.log(err))
 }
 //El new true es simplemente para que me retorn el nuevo valor con los cmbiso aplicados de un documento

 update(id, entity){
  this.model.findByIdAndUpdate(id, entity, {new: true})
  .then(response => response)
  .catch(err => console.log(err))}

 delete(id){
  this.model.findByIdAndDelete(id)
  .then(response => response)
  .catch(err => console.log(err)) }
}

module.exports = BaseRepository