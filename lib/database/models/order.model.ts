import { Document, Schema, model, models } from "mongoose";

export interface IOrder extends Document {
  createdAt: Date;
  stripeId: string;
  totalAmount: number;
  junction: {
    _id: string;
    name: string;
  };
  buyer: {
    _id: string;
    firstname: string;
    lastname: string;
  };
}

export type IOrderItem = {
  _id: string;
  totalAmount: string;
  createdAt: Date;
  junctionTitle: string;
  junctionId: string;
  buyer: string;
  buyerProfile?: string;
};

const OrderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  totalAmount: {
    type: String,
  },
  junction: {
    type: Schema.Types.ObjectId,
    ref: "Junction",
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
