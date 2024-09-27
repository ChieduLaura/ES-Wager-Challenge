import { Request, Response } from 'express';
import { Challenge } from '../models/Challenge';

// Accept a challenge
export const acceptChallenge = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;  // Get challenge ID from request params
    const { acceptorId } = req.body;  // Get acceptorId from the request body

    // Find the challenge by its ID
    const challenge = await Challenge.findById(id);

    if (!challenge) {
      res.status(404).json({ message: 'Challenge not found' });
      return;
    }

    // Check if the challenge is still available (status must be 'new')
    if (challenge.status !== 'new') {
      res.status(400).json({ message: 'Challenge is no longer available for acceptance' });
      return;
    }

    // Update the challenge with the acceptorId and change the status to 'accepted'
    challenge.acceptorId = acceptorId;
    challenge.status = 'accepted';

    // Save the updated challenge
    await challenge.save();

    res.status(200).json({ message: 'Challenge accepted', challenge });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
