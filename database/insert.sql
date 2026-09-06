USE weddingwala;

INSERT INTO vendors 
(name, category, location, capacity, about, price_min, price_max, price_label, rating, review_count, is_verified, is_recommended) 
VALUES

('Sensational Marquee', 'venue', 'North Nazimabad', '300-1000', 'Discover the epitome of elegance at Sensational Marquee, Karachis premier destination for luxury celebrations.', 500, 1180, 'PKR 500/head', 4.7, 96, TRUE, TRUE),

('Royal Marquee', 'venue', 'Gulshan-e-Iqbal', '300-1000', 'Royal Marquee offers a stunning blend of modern amenities and traditional charm for your special day.', 800, 1500, 'PKR 800/head', 4.5, 78, TRUE, TRUE),

('Grand Palace', 'venue', 'DHA Phase 6', '400-800', 'Grand Palace is the most prestigious wedding venue in Karachi offering world class facilities.', 1000, 2000, 'PKR 1000/head', 4.8, 120, TRUE, FALSE);


-- INSERT IMAGES

-- Sensational Marquee images (vendor_id = 1)
INSERT INTO vendor_images (vendor_id, image_url, is_main, sort_order)
VALUES
(1, 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80', TRUE, 0),
(1, 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', FALSE, 1),
(1, 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80', FALSE, 2),
(1, 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=600&q=80', FALSE, 3),
(1, 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80', FALSE, 4),

-- Royal Marquee images (vendor_id = 2)
(2, 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1200&q=80', TRUE, 0),
(2, 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?w=600&q=80', FALSE, 1),
(2, 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80', FALSE, 2),
(2, 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80', FALSE, 3),

-- Grand Palace images (vendor_id = 3)
(3, 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=1200&q=80', TRUE, 0),
(3, 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&q=80', FALSE, 1),
(3, 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80', FALSE, 2),
(3, 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80', FALSE, 3);



-- INSERT TAGS

-- Sensational Marquee tags (vendor_id = 1)
INSERT INTO vendor_tags (vendor_id, tag)
VALUES
(1, 'Wedding Venue'),
(1, 'Verified Partner'),

-- Royal Marquee tags (vendor_id = 2)
(2, 'Wedding Venue'),
(2, 'Verified Partner'),

-- Grand Palace tags (vendor_id = 3)
(3, 'Wedding Venue'),
(3, 'Premium Venue');



-- INSERT AMENITIES

-- Sensational Marquee amenities (vendor_id = 1)
INSERT INTO vendor_amenities (vendor_id, amenity)
VALUES
(1, 'Full AC'),
(1, 'Valet Parking'),
(1, 'DJ Sound System'),
(1, '24/7 Security'),
(1, 'Buffet Service'),

-- Royal Marquee amenities (vendor_id = 2)
(2, 'Full AC'),
(2, 'Valet Parking'),
(2, 'Stage Lighting'),
(2, 'Backup Generator'),
(2, 'Bridal Room'),

-- Grand Palace amenities (vendor_id = 3)
(3, 'Full AC'),
(3, 'Valet Parking'),
(3, 'Swimming Pool'),
(3, '24/7 Security'),
(3, 'Bridal Suite'),
(3, 'Backup Generator');




----------------------------------------------------------------------------

-- Insert ALL Vendors (All 6 Categories)

USE weddingwala;

INSERT INTO vendors 
(name, category, location, city, about, price_min, price_max, price_label, rating, review_count, is_verified, is_recommended) 
VALUES

-- CATERING (vendor_id 4, 5, 6)
('Royal Flavors Catering', 'catering', 'Bahria Town', 'Karachi',
'With over 25 years of experience, Royal Flavors Catering is a premier choice for sophisticated Pakistani and continental cuisine.',
1500, 2800, 'PKR 1500/head', 4.69, 230, TRUE, TRUE),

('Spice Route Catering', 'catering', 'DHA Phase 6', 'Karachi',
'Spice Route brings authentic flavors from across Pakistan to your wedding table with elegance and style.',
1200, 2500, 'PKR 1200/head', 4.5, 180, TRUE, TRUE),

('Karachi Kitchen', 'catering', 'Gulshan-e-Iqbal', 'Karachi',
'Karachi Kitchen specializes in traditional desi cuisine with a modern twist for all wedding occasions.',
1000, 2000, 'PKR 1000/head', 4.3, 150, TRUE, FALSE),

-- PHOTOGRAPHY (vendor_id 7, 8, 9)
('Majestic Moments Studio', 'photography', 'Clifton', 'Karachi',
'Capturing your most precious moments with cinematic style and artistic precision since 2010.',
50000, 150000, 'PKR 50,000/day', 4.8, 95, TRUE, TRUE),

('Aura Studios', 'photography', 'DHA Phase 5', 'Karachi',
'Award winning photography studio specializing in candid and traditional wedding coverage.',
40000, 120000, 'PKR 40,000/day', 4.7, 110, TRUE, TRUE),

('Lens & Light Photography', 'photography', 'PECHS', 'Karachi',
'Professional wedding photography and videography with drone coverage and same day edits.',
30000, 100000, 'PKR 30,000/day', 4.5, 85, TRUE, FALSE),

-- DECOR (vendor_id 10, 11, 12)
('Grand Events by Z&H', 'decor', 'DHA Phase 6', 'Karachi',
'Premier wedding decoration company offering royal and luxury themed setups for all events.',
500000, 2000000, 'PKR 500K - 2M', 4.9, 75, TRUE, TRUE),

('The Floral Studio', 'decor', 'Clifton', 'Karachi',
'Specializing in floral arrangements and minimalist elegant decor for modern weddings.',
300000, 800000, 'PKR 300K - 800K', 4.8, 60, TRUE, TRUE),

('Rang-e-Karachi Decor', 'decor', 'Gulshan-e-Iqbal', 'Karachi',
'Traditional and vibrant wedding decor inspired by Pakistani culture and heritage.',
200000, 500000, 'PKR 200K - 500K', 4.7, 90, TRUE, FALSE),

-- MAKEUP (vendor_id 13, 14, 15)
('Natasha Salon', 'makeup', 'DHA Phase 6', 'Karachi',
'Karachis most prestigious bridal salon offering premium makeup and styling services.',
45000, 120000, 'PKR 45,000', 4.9, 200, TRUE, TRUE),

('Para Ali Makeup', 'makeup', 'Gulshan', 'Karachi',
'Professional bridal makeup artist with over 15 years of experience in Pakistani bridal looks.',
35000, 90000, 'PKR 35,000', 4.8, 180, TRUE, TRUE),

('Mona J Salon', 'makeup', 'Clifton', 'Karachi',
'Expert bridal makeup and hair styling for all wedding occasions and events.',
40000, 100000, 'PKR 40,000', 4.3, 150, TRUE, FALSE),

-- CAR RENTAL (vendor_id 16, 17, 18)
('Elite Wedding Cars', 'car-rental', 'DHA Phase 2', 'Karachi',
'Luxury wedding car rental service offering vintage classics and modern luxury vehicles.',
15000, 50000, 'PKR 15,000/day', 4.7, 65, TRUE, TRUE),

('Royal Rides Karachi', 'car-rental', 'Clifton', 'Karachi',
'Premium wedding transportation service with professional chauffeurs and decorated vehicles.',
12000, 40000, 'PKR 12,000/day', 4.6, 55, TRUE, TRUE),

('Wedding Wheels', 'car-rental', 'Gulshan', 'Karachi',
'Affordable wedding car rental with a wide range of vehicles for all wedding occasions.',
8000, 25000, 'PKR 8,000/day', 4.4, 45, TRUE, FALSE);



--------------------------------------------------------------------------

-- Insert Images for All New Vendors

INSERT INTO vendor_images (vendor_id, image_url, is_main, sort_order)
VALUES

-- Royal Flavors Catering (vendor_id = 4)
(4, 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80', TRUE, 0),
(4, 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', FALSE, 1),
(4, 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80', FALSE, 2),
(4, 'https://images.unsplash.com/photo-1555243896-c709bfa0bb46?w=600&q=80', FALSE, 3),

-- Spice Route Catering (vendor_id = 5)
(5, 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80', TRUE, 0),
(5, 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', FALSE, 1),
(5, 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', FALSE, 2),

-- Karachi Kitchen (vendor_id = 6)
(6, 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&q=80', TRUE, 0),
(6, 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', FALSE, 1),
(6, 'https://images.unsplash.com/photo-1473093226555-2ad87f65b80b?w=600&q=80', FALSE, 2),

-- Majestic Moments Studio (vendor_id = 7)
(7, 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80', TRUE, 0),
(7, 'https://images.unsplash.com/photo-1537633468-7f55d48abfd9?w=600&q=80', FALSE, 1),
(7, 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', FALSE, 2),
(7, 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', FALSE, 3),

-- Aura Studios (vendor_id = 8)
(8, 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80', TRUE, 0),
(8, 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80', FALSE, 1),
(8, 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=600&q=80', FALSE, 2),

-- Lens & Light Photography (vendor_id = 9)
(9, 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80', TRUE, 0),
(9, 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80', FALSE, 1),
(9, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', FALSE, 2),

-- Grand Events by Z&H (vendor_id = 10)
(10, 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80', TRUE, 0),
(10, 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80', FALSE, 1),
(10, 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80', FALSE, 2),

-- The Floral Studio (vendor_id = 11)
(11, 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=1200&q=80', TRUE, 0),
(11, 'https://images.unsplash.com/photo-1487530811015-780780169c13?w=600&q=80', FALSE, 1),
(11, 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', FALSE, 2),

-- Rang-e-Karachi Decor (vendor_id = 12)
(12, 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80', TRUE, 0),
(12, 'https://images.unsplash.com/photo-1470290378698-263fa7ca60e9?w=600&q=80', FALSE, 1),
(12, 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80', FALSE, 2),

-- Natasha Salon (vendor_id = 13)
(13, 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80', TRUE, 0),
(13, 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', FALSE, 1),
(13, 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80', FALSE, 2),

-- Para Ali Makeup (vendor_id = 14)
(14, 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=1200&q=80', TRUE, 0),
(14, 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=600&q=80', FALSE, 1),
(14, 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', FALSE, 2),

-- Mona J Salon (vendor_id = 15)
(15, 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1200&q=80', TRUE, 0),
(15, 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=600&q=80', FALSE, 1),
(15, 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80', FALSE, 2),

-- Elite Wedding Cars (vendor_id = 16)
(16, 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80', TRUE, 0),
(16, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80', FALSE, 1),
(16, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80', FALSE, 2),

-- Royal Rides Karachi (vendor_id = 17)
(17, 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80', TRUE, 0),
(17, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80', FALSE, 1),
(17, 'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=600&q=80', FALSE, 2),

-- Wedding Wheels (vendor_id = 18)
(18, 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80', TRUE, 0),
(18, 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80', FALSE, 1),
(18, 'https://images.unsplash.com/photo-1568844293986-ca047e9d2665?w=600&q=80', FALSE, 2);


--------------------------------------------------------------------------------------
-- Insert Vendor Tags for All

INSERT INTO vendor_tags (vendor_id, tag)
VALUES

-- Catering
(4, 'Catering'), (4, 'Verified Partner'),
(5, 'Catering'), (5, 'Verified Partner'),
(6, 'Catering'),

-- Photography
(7, 'Photography'), (7, 'Verified Partner'),
(8, 'Photography'), (8, 'Verified Partner'),
(9, 'Photography'),

-- Decor
(10, 'Wedding Decor'), (10, 'Verified Partner'),
(11, 'Wedding Decor'), (11, 'Verified Partner'),
(12, 'Wedding Decor'),

-- Makeup
(13, 'Bridal Makeup'), (13, 'Verified Partner'),
(14, 'Bridal Makeup'), (14, 'Verified Partner'),
(15, 'Bridal Makeup'),

-- Car Rental
(16, 'Car Rental'), (16, 'Verified Partner'),
(17, 'Car Rental'), (17, 'Verified Partner'),
(18, 'Car Rental');


-------------------------------------------------------------------------------

-- Insert Vendor Amenities for All

INSERT INTO vendor_amenities (vendor_id, amenity)
VALUES

-- Royal Flavors Catering (4)
(4, 'Live BBQ Counter'),
(4, 'Buffet Service'),
(4, 'Crockery Included'),
(4, 'Staff Provided'),

-- Spice Route Catering (5)
(5, 'Live BBQ Counter'),
(5, 'Buffet Service'),
(5, 'Dessert Counter'),
(5, 'Staff Provided'),

-- Karachi Kitchen (6)
(6, 'Buffet Service'),
(6, 'Staff Provided'),
(6, 'Crockery Included'),

-- Majestic Moments Studio (7)
(7, 'Drone Coverage'),
(7, 'Same Day Edit'),
(7, 'Online Gallery'),
(7, 'Cinematic Video'),

-- Aura Studios (8)
(8, 'Drone Coverage'),
(8, 'Online Gallery'),
(8, 'Cinematic Video'),

-- Lens & Light Photography (9)
(9, 'Online Gallery'),
(9, 'Cinematic Video'),

-- Grand Events by Z&H (10)
(10, 'Stage Setup'),
(10, 'Floral Arrangements'),
(10, 'Lighting Setup'),
(10, 'Backdrop Design'),

-- The Floral Studio (11)
(11, 'Floral Arrangements'),
(11, 'Table Centerpieces'),
(11, 'Backdrop Design'),

-- Rang-e-Karachi Decor (12)
(12, 'Stage Setup'),
(12, 'Floral Arrangements'),
(12, 'Lighting Setup'),

-- Natasha Salon (13)
(13, 'Bridal Makeup'),
(13, 'Hair Styling'),
(13, 'Mehndi Application'),
(13, 'Trial Session'),

-- Para Ali Makeup (14)
(14, 'Bridal Makeup'),
(14, 'Hair Styling'),
(14, 'Trial Session'),

-- Mona J Salon (15)
(15, 'Bridal Makeup'),
(15, 'Hair Styling'),

-- Elite Wedding Cars (16)
(16, 'Professional Chauffeur'),
(16, 'Decorated Vehicle'),
(16, 'Airport Pickup'),
(16, 'Vintage Cars'),

-- Royal Rides Karachi (17)
(17, 'Professional Chauffeur'),
(17, 'Decorated Vehicle'),
(17, 'Luxury Vehicles'),

-- Wedding Wheels (18)
(18, 'Professional Chauffeur'),
(18, 'Decorated Vehicle');


--------------------------------------------------------------------------------------
-- Insert Category Specific Details

-- VENUE DETAILS (vendor_id 1, 2, 3)
INSERT INTO venue_details 
(vendor_id, venue_type, capacity_min, capacity_max, parking_slots, catering_policy)
VALUES
(1, 'Marquee / Banquet', 50, 400, 80, 'External Allowed'),
(2, 'Marquee', 100, 600, 120, 'In-house Only'),
(3, 'Banquet Hall', 200, 1000, 200, 'Both Allowed');

-- CATERING DETAILS (vendor_id 4, 5, 6)
INSERT INTO catering_details 
(vendor_id, min_pax, service_type, buffet_live, staffing_notice)
VALUES
(4, 50, 'On-site & Delivery', 'Both Available', '15-day Notice'),
(5, 100, 'On-site', 'Both Available', '10-day Notice'),
(6, 50, 'On-site & Delivery', 'Buffet Only', '7-day Notice');

-- PHOTOGRAPHY DETAILS (vendor_id 7, 8, 9)
INSERT INTO photography_details 
(vendor_id, coverage_type, delivery_days, team_size, equipment)
VALUES
(7, 'Full Day Coverage', 7, 3, 'Canon EOS R5, Drone'),
(8, 'Full Day Coverage', 10, 2, 'Sony A7III, Drone'),
(9, 'Half Day Coverage', 14, 2, 'Canon 5D Mark IV');

-- DECOR DETAILS (vendor_id 10, 11, 12)
INSERT INTO decor_details 
(vendor_id, decor_type, theme)
VALUES
(10, 'Stage & Floral', 'Royal, Premium'),
(11, 'Floral', 'Minimalist, Elegant'),
(12, 'Stage & Floral', 'Traditional, Vibrant');

-- MAKEUP DETAILS (vendor_id 13, 14, 15)
INSERT INTO makeup_details 
(vendor_id, artist_type, experience_years)
VALUES
(13, 'Salon', 15),
(14, 'Freelance', 12),
(15, 'Salon', 10);

-- CAR RENTAL DETAILS (vendor_id 16, 17, 18)
INSERT INTO car_rental_details 
(vendor_id, car_model, car_type, fuel_type, with_driver)
VALUES
(16, 'Rolls Royce Ghost', 'Luxury', 'Petrol', TRUE),
(17, 'Mercedes S Class', 'Luxury', 'Petrol', TRUE),
(18, 'Toyota Corolla', 'Sedan', 'Petrol', TRUE);




-------------------------------------------------------------------------------------
-- Insert Menu Packages and Event Addons

-- MENU PACKAGES (catering vendors 4, 5, 6)
INSERT INTO menu_packages 
(vendor_id, name, profile, price, is_highlighted, sort_order)
VALUES

-- Royal Flavors Catering (4)
(4, 'Basic', '3 Main Course, 1 Salad, 1 Side', 'Rs. 1,500/head', FALSE, 1),
(4, 'Standard', '5 Main Course, 2 Desserts, Premium Rice, Live', 'Rs. 2,000/head', TRUE, 2),
(4, 'Premium', 'Live BBQ, 7 Main Course, 3 Desserts, Soft Drink', 'Rs. 2,800/head', FALSE, 3),

-- Spice Route Catering (5)
(5, 'Basic', '3 Main Course, 1 Salad, 1 Drink', 'Rs. 1,200/head', FALSE, 1),
(5, 'Standard', '5 Main Course, 2 Desserts, Live BBQ', 'Rs. 1,800/head', TRUE, 2),
(5, 'Premium', '7 Main Course, 3 Desserts, Live BBQ, Soft Drink', 'Rs. 2,500/head', FALSE, 3),

-- Karachi Kitchen (6)
(6, 'Basic', '2 Main Course, 1 Salad', 'Rs. 1,000/head', FALSE, 1),
(6, 'Standard', '4 Main Course, 1 Dessert, Rice', 'Rs. 1,500/head', TRUE, 2),
(6, 'Premium', '6 Main Course, 2 Desserts, Live BBQ', 'Rs. 2,000/head', FALSE, 3);

-- EVENT ADDONS (catering vendors 4, 5, 6)
INSERT INTO event_addons 
(vendor_id, addon_name, price)
VALUES

-- Royal Flavors Catering (4)
(4, 'Live Mehndi Station', 'Rs. 15,000'),
(4, 'Dessert Counter', 'Rs. 10,000'),
(4, 'Live BBQ Counter', 'Rs. 20,000'),
(4, 'Soda Counter', 'Rs. 10,000'),

-- Spice Route Catering (5)
(5, 'Live BBQ Counter', 'Rs. 18,000'),
(5, 'Dessert Counter', 'Rs. 8,000'),
(5, 'Soda Counter', 'Rs. 8,000'),

-- Karachi Kitchen (6)
(6, 'Live BBQ Counter', 'Rs. 15,000'),
(6, 'Dessert Counter', 'Rs. 7,000');


-------------------------------------------------------------------------------------
-- Insert FAQs for All Vendor

INSERT INTO faqs (vendor_id, question, answer, sort_order)
VALUES

-- Sensational Marquee (1)
(1, 'What is the cancellation policy?', 'Free cancellation up to 60 days before your event date. After that, a partial deposit may be retained.', 1),
(1, 'Is outside catering permitted?', 'Yes, this venue allows external catering vendors. In-house catering is also available on request.', 2),
(1, 'Is there parking available?', 'Yes, we have 80 vehicle parking slots with valet service available.', 3),

-- Royal Marquee (2)
(2, 'What is the maximum capacity?', 'Royal Marquee can accommodate up to 600 guests comfortably.', 1),
(2, 'Do you provide in-house catering?', 'Yes, we have our own catering team with a variety of menu options.', 2),
(2, 'Is there a backup generator?', 'Yes, we have a full backup generator to ensure uninterrupted power.', 3),

-- Grand Palace (3)
(3, 'What events can be held here?', 'We host Mehndi, Barat, Walima and all other wedding related events.', 1),
(3, 'Is the venue air conditioned?', 'Yes, the entire venue is fully air conditioned.', 2),
(3, 'Do you offer decoration services?', 'Yes, we have an in-house decoration team available on request.', 3),

-- Royal Flavors Catering (4)
(4, 'What areas in Karachi do you cover?', 'We cover all major areas across Karachi including DHA, Clifton, Bahria Town, and North Nazimabad.', 1),
(4, 'How early should I book for a wedding?', 'We recommend booking at least 4-6 weeks in advance, especially during peak wedding season.', 2),
(4, 'Do you offer dietary variations?', 'Yes, we can accommodate vegetarian, halal-specific, and other dietary requirements on request.', 3),

-- Spice Route Catering (5)
(5, 'Do you provide serving staff?', 'Yes, our packages include trained serving staff for your event.', 1),
(5, 'Can we customize the menu?', 'Yes, we offer fully customizable menus based on your preferences and budget.', 2),
(5, 'What is the minimum guest count?', 'Our minimum guest count is 100 persons per event.', 3),

-- Karachi Kitchen (6)
(6, 'Do you provide crockery?', 'Yes, all our packages include crockery and serving equipment.', 1),
(6, 'Can you handle multiple events in one day?', 'Yes, we have the capacity to handle multiple events simultaneously.', 2),

-- Majestic Moments Studio (7)
(7, 'How long does it take to deliver photos?', 'We deliver edited photos within 7 working days after the event.', 1),
(7, 'Do you offer drone coverage?', 'Yes, drone coverage is included in our standard and premium packages.', 2),
(7, 'Can we request specific shots?', 'Yes, we encourage clients to share a shot list before the event.', 3),

-- Aura Studios (8)
(8, 'What packages do you offer?', 'We offer half day, full day and multi day wedding photography packages.', 1),
(8, 'Do you provide videography as well?', 'Yes, we offer both photography and cinematic videography services.', 2),
(8, 'How do we receive our photos?', 'Photos are delivered via an online gallery link for easy downloading and sharing.', 3),

-- Lens & Light Photography (9)
(9, 'Do you travel outside Karachi?', 'Yes, we are available for outstation events with additional travel charges.', 1),
(9, 'What camera equipment do you use?', 'We use Canon 5D Mark IV cameras with professional lighting equipment.', 2),

-- Grand Events by Z&H (10)
(10, 'How far in advance should we book?', 'We recommend booking at least 2-3 months in advance for large events.', 1),
(10, 'Do you handle setup and breakdown?', 'Yes, our team handles complete setup and breakdown of all decor.', 2),
(10, 'Can we see previous work?', 'Yes, you can visit our studio to see our portfolio and sample setups.', 3),

-- The Floral Studio (11)
(11, 'Do you offer artificial flowers?', 'We specialize in fresh flowers but can accommodate artificial arrangements on request.', 1),
(11, 'Can we customize the color theme?', 'Yes, we work with any color palette to match your wedding theme.', 2),

-- Rang-e-Karachi Decor (12)
(12, 'Do you provide lighting as well?', 'Yes, we offer complete lighting solutions including fairy lights and spotlights.', 1),
(12, 'What is your minimum budget?', 'Our packages start from PKR 200,000 for basic stage decoration.', 2),

-- Natasha Salon (13)
(13, 'Do you offer a trial session?', 'Yes, we highly recommend a trial session 2-3 weeks before the wedding.', 1),
(13, 'How many hours does bridal makeup take?', 'Bridal makeup typically takes 3-4 hours depending on the look required.', 2),
(13, 'Do you travel to the venue?', 'Yes, we offer home and venue visits for an additional charge.', 3),

-- Para Ali Makeup (14)
(14, 'What makeup brands do you use?', 'We use high-end international brands including MAC, Charlotte Tilbury and NARS.', 1),
(14, 'Do you do airbrush makeup?', 'Yes, we offer airbrush makeup for a flawless long-lasting finish.', 2),

-- Mona J Salon (15)
(15, 'Do you offer group packages?', 'Yes, we offer special packages for bridal party including bridesmaids.', 1),
(15, 'Can you match a reference look?', 'Yes, please share reference photos during your consultation appointment.', 2),

-- Elite Wedding Cars (16)
(16, 'How many hours is the rental?', 'Our standard package includes 8 hours of rental with a professional chauffeur.', 1),
(16, 'Do you decorate the cars?', 'Yes, all our wedding cars come decorated with flowers and ribbons.', 2),
(16, 'What if the car breaks down?', 'We always have a backup vehicle on standby for all wedding bookings.', 3),

-- Royal Rides Karachi (17)
(17, 'Do you offer airport transfers?', 'Yes, we offer airport pickup and drop for wedding guests as well.', 1),
(17, 'Can we rent multiple cars?', 'Yes, we have a fleet of luxury vehicles available for multiple bookings.', 2),

-- Wedding Wheels (18)
(18, 'What is your cancellation policy?', 'Free cancellation up to 7 days before the event. 50% deposit retained after that.', 1),
(18, 'Do you provide a chauffeur?', 'Yes, all our vehicles come with a professional uniformed chauffeur.', 2);




-------------------------------------------------------------------------------------

-- Insert Reviews for All Vendors

INSERT INTO reviews 
(vendor_id, reviewer_name, event_type, rating, comment)
VALUES

-- Sensational Marquee (1)
(1, 'Ayesha & Musa', 'Walima · Dec 2025', 5, 'Absolutely stunning decor and the food was praised by everyone. The staff made our special day seamless and stress-free.'),
(1, 'Zoya & Hamza', 'Barat · Jan 2026', 4, 'The marquee was very spacious and the AC worked perfectly despite the Karachi heat. Great experience with the management team.'),

-- Royal Marquee (2)
(2, 'Sara & Ahmed', 'Barat · Nov 2025', 5, 'Royal Marquee exceeded all our expectations. The staff was professional and the venue looked absolutely breathtaking.'),
(2, 'Fatima & Ali', 'Walima · Dec 2025', 4, 'Beautiful venue with ample parking. Food was excellent and the management was very cooperative throughout.'),

-- Grand Palace (3)
(3, 'Nadia & Omar', 'Barat · Oct 2025', 5, 'Grand Palace is truly grand. Every corner was beautifully decorated and the service was impeccable.'),
(3, 'Hira & Bilal', 'Walima · Nov 2025', 5, 'Best wedding venue in Karachi without a doubt. Our guests were thoroughly impressed by the ambiance.'),

-- Royal Flavors Catering (4)
(4, 'Amna Akhtar', 'Walima · Nov 2025', 5, 'The Mehndi event was the highlight of our wedding. The team was extremely professional and the food was outstanding.'),
(4, 'Zohaib S.', 'Barat · Oct 2025', 4, 'My personal chef confirmed everything as planned. The live BBQ was an upgrade everyone enjoyed.'),

-- Spice Route Catering (5)
(5, 'Maria & Faisal', 'Barat · Dec 2025', 5, 'Spice Route delivered an amazing spread of food. Every dish was perfectly cooked and presented beautifully.'),
(5, 'Sana & Usman', 'Walima · Nov 2025', 4, 'Great catering service with very professional staff. The live BBQ counter was a huge hit with our guests.'),

-- Karachi Kitchen (6)
(6, 'Rabia & Hassan', 'Mehndi · Oct 2025', 4, 'Affordable and delicious food. Karachi Kitchen provided great value for money for our Mehndi event.'),
(6, 'Asma & Tariq', 'Barat · Sep 2025', 4, 'Good food quality and timely service. Would recommend for smaller wedding events.'),

-- Majestic Moments Studio (7)
(7, 'Zainab & Ahmed', 'Barat · Dec 2025', 5, 'Majestic Moments captured every emotion perfectly. The photos were delivered on time and looked absolutely stunning.'),
(7, 'Mehwish & Kamran', 'Walima · Nov 2025', 5, 'Best photography team in Karachi. The drone shots were breathtaking and the team was very professional.'),

-- Aura Studios (8)
(8, 'Sadia & Imran', 'Barat · Jan 2026', 5, 'Aura Studios went above and beyond to capture our special moments. Highly recommended for wedding photography.'),
(8, 'Noor & Shahzaib', 'Mehndi · Dec 2025', 4, 'Great photography team with excellent equipment. The online gallery was a wonderful touch for sharing with family.'),

-- Lens & Light Photography (9)
(9, 'Anum & Rehan', 'Barat · Nov 2025', 4, 'Professional team that captured all our important moments. Good value for money photography service.'),
(9, 'Saima & Junaid', 'Walima · Oct 2025', 4, 'Satisfied with the quality of photos. The videography was especially impressive with great editing.'),

-- Grand Events by Z&H (10)
(10, 'Mariam & Fawad', 'Barat · Dec 2025', 5, 'Grand Events transformed our venue into a palace. The floral arrangements were beyond our expectations.'),
(10, 'Huma & Waqas', 'Mehndi · Nov 2025', 5, 'Absolutely magical decor. Every detail was perfect and the team worked tirelessly to make our day special.'),

-- The Floral Studio (11)
(11, 'Aisha & Zain', 'Walima · Dec 2025', 5, 'The Floral Studio created the most beautiful minimalist decor for our wedding. Simply breathtaking.'),
(11, 'Rida & Ahsan', 'Barat · Nov 2025', 4, 'Lovely floral arrangements that perfectly matched our color theme. Very professional team.'),

-- Rang-e-Karachi Decor (12)
(12, 'Nadia & Salman', 'Mehndi · Oct 2025', 5, 'Rang-e-Karachi brought our traditional Mehndi vision to life beautifully. Loved every detail.'),
(12, 'Farah & Kashif', 'Barat · Sep 2025', 4, 'Great traditional decor at an affordable price. The team was very cooperative and creative.'),

-- Natasha Salon (13)
(13, 'Alina Khan', 'Barat · Dec 2025', 5, 'Natasha Salon made me feel like a queen on my wedding day. The makeup lasted all night and looked perfect in photos.'),
(13, 'Maira Siddiqui', 'Walima · Nov 2025', 5, 'Best bridal makeup in Karachi. The team was very professional and understood exactly what I wanted.'),

-- Para Ali Makeup (14)
(14, 'Saba Rashid', 'Barat · Jan 2026', 5, 'Para Ali is a genius with makeup. My look was flawless and I received so many compliments from guests.'),
(14, 'Hina Baig', 'Mehndi · Dec 2025', 4, 'Very skilled makeup artist with great attention to detail. The trial session was very helpful.'),

-- Mona J Salon (15)
(15, 'Zara Ahmed', 'Barat · Nov 2025', 4, 'Mona J Salon did a beautiful job on my bridal makeup. Very professional team and great ambiance.'),
(15, 'Sonia Malik', 'Walima · Oct 2025', 4, 'Good makeup service with reasonable pricing. The hair styling was especially impressive.'),

-- Elite Wedding Cars (16)
(16, 'Ayaan & Maryam', 'Barat · Dec 2025', 5, 'Elite Wedding Cars provided the most beautiful Rolls Royce for our Barat. The chauffeur was very professional.'),
(16, 'Hassan & Sana', 'Walima · Nov 2025', 5, 'Stunning cars with beautiful decoration. Made our wedding exit absolutely unforgettable.'),

-- Royal Rides Karachi (17)
(17, 'Omar & Nida', 'Barat · Jan 2026', 4, 'Royal Rides provided excellent service with a very professional chauffeur. The Mercedes was spotless and beautifully decorated.'),
(17, 'Bilal & Amna', 'Walima · Dec 2025', 4, 'Great luxury car service for our wedding. Very punctual and professional throughout the day.'),

-- Wedding Wheels (18)
(18, 'Farhan & Zoya', 'Barat · Nov 2025', 4, 'Good affordable wedding car service. The vehicle was clean and the driver was very punctual and professional.'),
(18, 'Asad & Hira', 'Walima · Oct 2025', 4, 'Decent car rental service at an affordable price. Would recommend for couples on a budget.');