import { findProfileByUserId, createProfile, updateProfile } from '../Models/profile.model.mjs';
import { getEventsByProfileId } from '../Models/event.model.mjs';

export const createWeddingProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const exists = await findProfileByUserId(userId);
    if (exists) return res.status(409).json({ message: 'Profile already exists. Use PUT to update.' });

    const profileId = await createProfile(userId, req.body);
    res.status(201).json({ message: 'Profile created', profileId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating profile.' });
  }
};

export const getWeddingProfile = async (req, res) => {
  try {
    const profile = await findProfileByUserId(req.user.id);
    if (!profile) return res.status(404).json({ message: 'No profile found.' });

    const events = await getEventsByProfileId(profile.id);
    res.json({ profile, events });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching profile.' });
  }
};

export const updateWeddingProfile = async (req, res) => {
  try {
    const exists = await findProfileByUserId(req.user.id);
    if (!exists) return res.status(404).json({ message: 'Profile not found.' });

    await updateProfile(req.user.id, req.body);
    res.json({ message: 'Profile updated successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating profile.' });
  }
};