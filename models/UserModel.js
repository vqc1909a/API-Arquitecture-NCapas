const {Schema, model} = require("mongoose");
const {compareSync, hashSync, genSaltSync} = require("bcryptjs");

const UserSchema = new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true}
}) 

UserSchema.methods.toJSON = function(){
  //Los documentos tienen un método toObject que convierte el documento mangosta en un objeto JavaScript simple. Este método acepta algunas opciones.En lugar de aplicar estas opciones por documento, podemos declarar las opciones a nivel de esquema y aplicarlas a todos los documentos del esquema de forma predeterminad cuando usemos toJSON
  let user = this.toObject();
  delete user.password;
  return user;
}

UserSchema.methods.comparePassword = function(password){
  return compareSync(password, this.password);
}

UserSchema.pre('save', async function(next){
  if(!this.isModified("password")){
    return next();
  }
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(this.password, salt);
  this.password = hashedPassword;
  return next();
})


module.exports = model("User", UserSchema);
