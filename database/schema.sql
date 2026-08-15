CREATE DATABASE WEDDINGWALA;
USE WEDDINGWALA;
-- 1. USERS (signup + login)
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255),
  phone VARCHAR(20),
  role ENUM('client','vendor','admin') DEFAULT 'client',
  google_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. WEDDING PROFILES (setup profile page)
CREATE TABLE wedding_profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL UNIQUE,
  bride_name VARCHAR(100),
  groom_name VARCHAR(100),
  wedding_date DATE,
  city VARCHAR(100),
  area VARCHAR(100),
  total_budget DECIMAL(12,2),
  guest_count INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) 
    REFERENCES users(id) ON DELETE CASCADE
);

-- 3. WEDDING EVENTS (Mehndi, Dholki, Barat, Valima)
CREATE TABLE wedding_events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  wedding_profile_id INT NOT NULL,
  event_name VARCHAR(50) NOT NULL,
  FOREIGN KEY (wedding_profile_id) 
    REFERENCES wedding_profiles(id) ON DELETE CASCADE
);