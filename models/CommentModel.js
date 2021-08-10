const {Schema, model} = require("mongoose");

const CommentSchema = new Schema({
  comment: {type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: "User", required: true, autopopulate: true},
})

CommentSchema.plugin(require("mongoose-autopopulate"));

module.exports = model("Comment", CommentSchema);