import { findProfileByUserId } from '../Models/profile.model.mjs';
import { addEvents, getEventsByProfileId, deleteEvent } from '../Models/event.model.mjs';

export const createEvents = async (req, res) => {
  try {
    const { events } = req.body;
    if (!Array.isArray(events) || events.length === 0) {
      return res.status(400).json({ message: 'Events must be a non-empty array.' });
    }

    const profile = await findProfileByUserId(req.user.id);
    if (!profile) return res.status(404).json({ message: 'Wedding profile not found.' });

    await addEvents(profile.id, events);
    res.status(201).json({ message: `${events.length} event(s) added.` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding events.' });
  }
};

export const getEvents = async (req, res) => {
  try {
    const profile = await findProfileByUserId(req.user.id);
    if (!profile) return res.status(404).json({ message: 'No profile found.' });

    const events = await getEventsByProfileId(profile.id);
    res.json({ events });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching events.' });
  }
};

export const removeEvent = async (req, res) => {
  try {
    const profile = await findProfileByUserId(req.user.id);
    if (!profile) return res.status(404).json({ message: 'Profile not found.' });

    const deleted = await deleteEvent(req.params.id, profile.id);
    if (!deleted) return res.status(404).json({ message: 'Event not found or unauthorized.' });

    res.json({ message: 'Event deleted.' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting event.' });
  }
};