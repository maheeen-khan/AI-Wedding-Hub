import db from '../DB/dbConnection.mjs';

export const getEventsByProfileId = async (profileId) => {
  const [rows] = await db.query(
    'SELECT id, event_name FROM wedding_events WHERE wedding_profile_id = ?',
    [profileId]
  );
  return rows;
};

export const addEvents = async (profileId, eventsArray) => {
  const values = eventsArray.map(e => [profileId, e.event_name]);
  await db.query(
    'INSERT INTO wedding_events (wedding_profile_id, event_name) VALUES ?',
    [values]
  );
};

export const deleteEvent = async (eventId, profileId) => {
  const [result] = await db.query(
    'DELETE FROM wedding_events WHERE id = ? AND wedding_profile_id = ?',
    [eventId, profileId]
  );
  return result.affectedRows;
};