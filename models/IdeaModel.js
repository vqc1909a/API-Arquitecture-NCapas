const {Schema, model} = require("mongoose")

const IdeaSchema = new Schema({
  idea: {type: String, required: true},
  description: {type: String, required: true},
  upvotes: [{type: Boolean, required: true}],
  downvotes: [{type: Boolean, required: true}],
  author: {type: Schema.Types.ObjectId, ref: "User", required: true, autopopulate: true},
  comments: [{type: Schema.Types.ObjectId, ref: "Comment", required: true, autopopulate: true}]
});

IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports = model("Idea", IdeaSchema);
