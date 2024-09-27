import { Request, Response } from 'express';
import { Challenge } from '../models/Challenge';

// Update a challenge
export const updateChallenge = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;  // Get challenge ID from request params
    const updatedChallenge = await Challenge.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedChallenge) {
      res.status(404).json({ message: 'Challenge not found' });  // Return 404 if no challenge is found
      return;
    }

    res.status(200).json(updatedChallenge);  // Send the updated challenge as a response
  } catch (error) {
    res.status(400).json({ message: error.message });  // Send an error response if something goes wrong
  }
};
