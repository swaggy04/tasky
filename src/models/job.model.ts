import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },

    payload: {
      type: Schema.Types.Mixed,
      required: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "PROCESSING", "COMPLETED", "FAILED"],
      default: "PENDING",
    },

    attempts: {
      type: Number,
      default: 0,
    },

    maxRetries: {
      type: Number,
      default: 3,
    },

    error: {
      type: String,
      default: null,
    },

    nextRunAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const Job = model("Job", jobSchema);