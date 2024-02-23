import { Document, Schema, model, models } from "mongoose";

export interface IJunction extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  available?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string };
  city: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}

const JunctionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String },
  available: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  city: { type: Schema.Types.ObjectId, ref: "City" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Junction = models.Junction || model("Junction", JunctionSchema);

export default Junction;
