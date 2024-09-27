import { Request, Response } from 'express';
import { Challenge } from '../models/Challenge';

// Get all challenges
export const getAllChallenges = async (req: Request, res: Response): Promise<void> => {
  try {
    const challenges = await Challenge.find();  // Fetch all challenges from the database
    res.status(200).json(challenges);  // Send challenges as a response
  } catch (error) {
    res.status(500).json({ message: error.message });  // Send an error response if something goes wrong
  }
};
