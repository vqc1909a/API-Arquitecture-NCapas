const {Schema, model} = require("mongoose")

const IdeaSchema = new Schema({
  idea: {type: String, required: true},
  description: {type: String},
  upvotes: [{type: Boolean}],
  downvotes: [{type: Boolean}],
  author: {type: Schema.Types.ObjectId, ref: "User", required: true, autopopulate: true},
  comments: [{type: Schema.Types.ObjectId, ref: "Comment", autopopulate: true}]
});
//!Consume muchos recursos hacer un autopoupulate, lo mejor es usar pues el moetodo populate y no hacerlo auto
IdeaSchema.plugin(require("mongoose-autopopulate"));
 
module.exports = model("Idea", IdeaSchema);
