import { Request, Response } from 'express';
import { Challenge } from '../models/Challenge';

// Delete a challenge
export const deleteChallenge = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;  // Get challenge ID from request params
    const deletedChallenge = await Challenge.findByIdAndDelete(id);

    if (!deletedChallenge) {
      res.status(404).json({ message: 'Challenge not found' });  // Return 404 if no challenge is found
      return;
    }

    res.status(200).json({ message: 'Challenge deleted successfully' });  // Return success message
  } catch (error) {
    res.status(500).json({ message: error.message });  // Send an error response if something goes wrong
  }
};
