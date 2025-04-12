import { model, models, Schema, Types } from "mongoose";

interface IAccount {
  name: string;
  provider: string;
  password?: string;
  userId: Types.ObjectId;
  image?: string;
  providerAccountId: string;
}

const accountSchema = new Schema<IAccount>(
  {
    name: { type: String, required: true },
    provider: { type: String, required: true },
    password: { type: String },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    image: { type: String },
    providerAccountId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Account = models?.Account || model<IAccount>("Account", accountSchema);

export default Account;
