USE weddingwala;

-- 4. VENDORS (main table for all 6 types)
CREATE TABLE vendors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  category ENUM(
    'venue',
    'catering', 
    'photography',
    'decor',
    'makeup',
    'car-rental'
  ) NOT NULL,
  location VARCHAR(200),
  city VARCHAR(100) DEFAULT 'Karachi',
  about TEXT,
  price_min DECIMAL(10,2),
  price_max DECIMAL(10,2),
  price_label VARCHAR(100),
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INT DEFAULT 0,
  is_verified BOOLEAN DEFAULT FALSE,
  is_recommended BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. VENDOR IMAGES
CREATE TABLE vendor_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vendor_id INT NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  is_main BOOLEAN DEFAULT FALSE,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (vendor_id) 
    REFERENCES vendors(id) ON DELETE CASCADE
);

-- 6. VENDOR TAGS
CREATE TABLE vendor_tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vendor_id INT NOT NULL,
  tag VARCHAR(100) NOT NULL,
  FOREIGN KEY (vendor_id) 
    REFERENCES vendors(id) ON DELETE CASCADE
);

-- 7. VENDOR AMENITIES
CREATE TABLE vendor_amenities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vendor_id INT NOT NULL,
  amenity VARCHAR(150) NOT NULL,
  FOREIGN KEY (vendor_id) 
    REFERENCES vendors(id) ON DELETE CASCADE
);

-- 8. VENUE DETAILS
CREATE TABLE venue_details (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vendor_id INT NOT NULL UNIQUE,
  venue_type VARCHAR(100),
  capacity_min INT,
  capacity_max INT,
  parking_slots INT,
  catering_policy VARCHAR(100),
  FOREIGN KEY (vendor_id) 
    REFERENCES vendors(id) ON DELETE CASCADE
);





-- CATERING DETAILS
CREATE TABLE catering_details (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vendor_id INT NOT NULL UNIQUE,
  min_pax INT,
  service_type VARCHAR(100),
  buffet_live VARCHAR(100),
  staffing_notice VARCHAR(100),
  FOREIGN KEY (vendor_id)
    REFERENCES vendors(id) ON DELETE CASCADE
);

-- MENU PACKAGES
CREATE TABLE menu_packages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vendor_id INT NOT NULL,
  name VARCHAR(100),
  profile TEXT,
  price VARCHAR(100),
  is_highlighted BOOLEAN DEFAULT FALSE,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (vendor_id)
    REFERENCES vendors(id) ON DELETE CASCADE
);

-- EVENT ADD-ONS
CREATE TABLE event_addons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vendor_id INT NOT NULL,
  addon_name VARCHAR(150),
  price VARCHAR(100),
  FOREIGN KEY (vendor_id)
    REFERENCES vendors(id) ON DELETE CASCADE
);