import { Request, Response } from 'express';
import { Challenge } from '../models/Challenge';

// Create a new challenge
export const createChallenge = async (req: Request, res: Response): Promise<void> => {
  try {
    const challenge = new Challenge(req.body);  // Create a new Challenge from request body
    await challenge.save();  // Save to the database
    res.status(201).json(challenge);  // Send the newly created challenge as a response
  } catch (error) {
    res.status(400).json({ message: error.message });  // Send an error response if something goes wrong
  }
};
