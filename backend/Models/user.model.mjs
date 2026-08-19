import db from '../DB/dbConnection.mjs';

export const findUserByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0] || null;
};

export const findUserById = async (id) => {
  const [rows] = await db.query(
    'SELECT id, full_name, email, phone, role, created_at FROM users WHERE id = ?',
    [id]
  );
  return rows[0] || null;
};

export const createUser = async ({ full_name, email, password, phone, role = 'client' }) => {
  const [result] = await db.query(
    'INSERT INTO users (full_name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)',
    [full_name, email, password, phone, role]
  );
  return { id: result.insertId, full_name, email, phone, role };
};