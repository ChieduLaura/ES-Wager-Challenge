import mongoose, { Schema, Document } from 'mongoose';

// Step 4: Create an interface for TypeScript to define the structure of the document
export interface IChallenge extends Document {
  status: 'new' | 'accepted' | 'finished';  // Enum for status
  challengerId: string;
  acceptorId?: string;
  winnerId?: string;
  rules: any;  // Object containing rules of the challenge
  prize: number;
  createdAt: string;
}

// Step 5: Define the schema using Mongoose's Schema class
const ChallengeSchema: Schema = new Schema({
  status: {
    type: String,
    enum: ['new', 'accepted', 'finished'],  // Enum: must be one of these values
    required: true,
  },
  challengerId: {
    type: String,
    required: true,
  },
  acceptorId: {
    type: String,
    default: '',  // Default is an empty string
  },
  winnerId: {
    type: String,
    default: '',  // Default is an empty string
  },
  rules: {
    type: Object,  // Storing rules as an object
    required: true,
  },
  prize: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

// Step 6: Create and export the Mongoose model
export const Challenge = mongoose.model<IChallenge>('Challenge', ChallengeSchema);
