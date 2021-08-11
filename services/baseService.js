class BaseService{
 constructor(model){
  this.model = model;
 }
 get(id){
  if(!id){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  } 
  return this.model.findById(id)
 }
 getAll(){
  return this.model.find({})
 }
 create(entity){
  return this.model.create(entity)
 }
 //El new true es simplemente para que me retorn el nuevo valor con los cmbiso aplicados de un documento

 update(id, entity){
  if(!id){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  } 
  return this.model.findByIdAndUpdate(id, entity, {new: true})
 }

 delete(id){
  if(!id){
   const error = new Error({message: "Page Not Found", status : 404});
   throw error
  } 
  return this.model.findByIdAndDelete(id)
 }
}

module.exports = BaseService