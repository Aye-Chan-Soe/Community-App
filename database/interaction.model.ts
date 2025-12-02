import { Document, model, models, Schema, Types } from "mongoose";

export interface IInteraction {
  user: Types.ObjectId;
  action: string;
  actionId: Types.ObjectId;
  actionType: "question" | "answer";
}

export interface IInteractionDoc extends IInteraction, Document {}

const InteractionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    actionId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    actionType: {
      type: String,
      enum: ["question", "answer"],
      required: true,
    },
  },
  { timestamps: true }
);

InteractionSchema.index(
  { user: 1, action: 1, actionId: 1, actionType: 1 },
  { unique: true }
);

const Interaction =
  models?.Interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
