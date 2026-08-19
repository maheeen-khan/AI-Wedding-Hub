import db from '../DB/dbConnection.mjs';

export const findProfileByUserId = async (userId) => {
  const [rows] = await db.query('SELECT * FROM wedding_profiles WHERE user_id = ?', [userId]);
  return rows[0] || null;
};

export const createProfile = async (userId, data) => {
  const { bride_name, groom_name, wedding_date, city, area, total_budget, guest_count } = data;
  const [result] = await db.query(
    `INSERT INTO wedding_profiles 
     (user_id, bride_name, groom_name, wedding_date, city, area, total_budget, guest_count) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [userId, bride_name || null, groom_name || null, wedding_date || null,
     city || null, area || null, total_budget || null, guest_count || null]
  );
  return result.insertId;
};

export const updateProfile = async (userId, data) => {
  const { bride_name, groom_name, wedding_date, city, area, total_budget, guest_count } = data;
  await db.query(
    `UPDATE wedding_profiles SET 
      bride_name = COALESCE(?, bride_name),
      groom_name = COALESCE(?, groom_name),
      wedding_date = COALESCE(?, wedding_date),
      city = COALESCE(?, city),
      area = COALESCE(?, area),
      total_budget = COALESCE(?, total_budget),
      guest_count = COALESCE(?, guest_count)
     WHERE user_id = ?`,
    [bride_name, groom_name, wedding_date, city, area, total_budget, guest_count, userId]
  );
};