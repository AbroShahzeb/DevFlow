import { models, model, Schema, Types } from "mongoose";

interface ITagQuestion {
  tag: Types.ObjectId;
  question: Types.ObjectId;
}

const tagQuestionSchema = new Schema<ITagQuestion>(
  {
    tag: { type: Schema.Types.ObjectId, required: true, ref: "Tag" },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
  },
  {
    timestamps: true,
  }
);

const TagQuestion =
  models?.TagQuestion || model<ITagQuestion>("TagQuestion", tagQuestionSchema);
export default TagQuestion;
