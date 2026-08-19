import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByEmail, findUserById, createUser } from '../Models/user.model.mjs';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES_IN || '7d';

export const signup = async (req, res) => {
  try {
    const { full_name, email, password, phone, role = 'client' } = req.body;

    if (!full_name || !email || !password || password.length < 6) {
      return res.status(400).json({ message: 'Valid name, email, and 6+ char password required.' });
    }

    const exists = await findUserByEmail(email);
    if (exists) return res.status(409).json({ message: 'Email already registered.' });

    const hashed = await bcrypt.hash(password, 12);
    const user = await createUser({ full_name, email, password: hashed, phone, role });

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES });

    res.status(201).json({ message: 'User created', token, user });
  } catch (err) {
  console.error('====================');
  console.error(err);
  console.error('Message:', err.message);
  console.error('Code:', err.code);
  console.error('SQL:', err.sql);
  console.error('====================');

  res.status(500).json({
    message: err.message
  });
}
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email and password required.' });

    const user = await findUserByEmail(email);
    if (!user) return res.status(401).json({ message: 'Invalid email or password.' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid email or password.' });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES }
    );

    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, full_name: user.full_name, email: user.email, role: user.role, phone: user.phone },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login.' });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await findUserById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found.' });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};