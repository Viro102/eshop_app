CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL,
        image_url TEXT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        description TEXT NOT NULL,
        rating DECIMAL(2, 1) NOT NULL
);
CREATE TABLE IF NOT EXISTS users (
        email VARCHAR(255) NOT NULL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- Insert 15 electronic products
INSERT INTO products (
                title,
                category,
                image_url,
                price,
                description,
                rating
        )
VALUES (
                'Smartphone X',
                'Electronics',
                'smartphone_x.jpg',
                799.99,
                'The latest smartphone with advanced features.',
                4.8
        ),
        (
                'Laptop Pro',
                'Electronics',
                'laptop_pro.jpg',
                1299.99,
                'Powerful laptop for professional use.',
                4.5
        ),
        (
                'Wireless Earbuds',
                'Electronics',
                'wireless_earbuds.jpg',
                129.99,
                'High-quality wireless earbuds with noise cancellation.',
                4.2
        ),
        (
                'Smart Watch 3',
                'Electronics',
                'smart_watch_3.jpg',
                199.99,
                'Fitness tracker and smartwatch with health features.',
                4.7
        ),
        (
                '4K Smart TV',
                'Electronics',
                '4k_smart_tv.jpg',
                899.99,
                'Ultra HD Smart TV with a large display.',
                4.6
        ),
        (
                'Digital Camera',
                'Electronics',
                'digital_camera.jpg',
                599.99,
                'Professional-grade digital camera for photography enthusiasts.',
                4.4
        ),
        (
                'Gaming Console Pro',
                'Electronics',
                'gaming_console_pro.jpg',
                499.99,
                'Next-gen gaming console for immersive gaming experiences.',
                4.9
        ),
        (
                'Home Security System',
                'Electronics',
                'home_security_system.jpg',
                349.99,
                'Smart home security system with cameras and sensors.',
                4.3
        ),
        (
                'High-Speed Router',
                'Electronics',
                'high_speed_router.jpg',
                89.99,
                'Fast and reliable router for seamless internet connectivity.',
                4.5
        ),
        (
                'Portable Power Bank',
                'Electronics',
                'portable_power_bank.jpg',
                39.99,
                'Compact power bank for charging devices on the go.',
                4.0
        ),
        (
                'Smart Thermostat',
                'Electronics',
                'smart_thermostat.jpg',
                149.99,
                'Energy-efficient smart thermostat for home climate control.',
                4.6
        ),
        (
                'Wireless Charging Pad',
                'Electronics',
                'wireless_charging_pad.jpg',
                29.99,
                'Convenient wireless charging pad for compatible devices.',
                4.2
        ),
        (
                'Bluetooth Speaker',
                'Electronics',
                'bluetooth_speaker.jpg',
                79.99,
                'Portable Bluetooth speaker with high-quality sound.',
                4.4
        ),
        (
                'Fitness Tracker',
                'Electronics',
                'fitness_tracker.jpg',
                69.99,
                'Track your fitness goals with this advanced fitness tracker.',
                4.7
        ),
        (
                'Home Theater System',
                'Electronics',
                'home_theater_system.jpg',
                499.99,
                'Complete home theater system for cinematic experiences at home.',
                4.8
        );
-- Insert 15 clothes products
INSERT INTO products (
                title,
                category,
                image_url,
                price,
                description,
                rating
        )
VALUES (
                'Men\'s Casual Shirt',
                'Clothes',
                'mens_casual_shirt.jpg',
                29.99,
                'Comfortable and stylish casual shirt for men.',
                4.2
        ),
        (
                'Women\'s Floral Dress',
                'Clothes',
                'womens_floral_dress.jpg',
                49.99,
                'Elegant floral dress for women for special occasions.',
                4.6
        ),
        (
                'Men\'s Slim Fit Jeans',
                'Clothes',
                'mens_slim_fit_jeans.jpg',
                39.99,
                'Slim fit jeans for a modern and stylish look.',
                4.3
        ),
        (
                'Women\'s Active Leggings',
                'Clothes',
                'womens_active_leggings.jpg',
                34.99,
                'Stretchable and breathable leggings for active women.',
                4.5
        ),
        (
                'Men\'s Running Shoes',
                'Clothes',
                'mens_running_shoes.jpg',
                69.99,
                'Comfortable and durable running shoes for men.',
                4.7
        ),
        (
                'Women\'s High Heels',
                'Clothes',
                'womens_high_heels.jpg',
                59.99,
                'Stylish high heels for a fashionable look.',
                4.4
        ),
        (
                'Men\'s Hooded Jacket',
                'Clothes',
                'mens_hooded_jacket.jpg',
                79.99,
                'Warm and trendy hooded jacket for men.',
                4.8
        ),
        (
                'Women\'s Denim Skirt',
                'Clothes',
                'womens_denim_skirt.jpg',
                44.99,
                'Classic denim skirt for a versatile wardrobe.',
                4.0
        ),
        (
                'Men\'s Polo Shirt',
                'Clothes',
                'mens_polo_shirt.jpg',
                24.99,
                'Casual and timeless polo shirt for men.',
                4.5
        ),
        (
                'Women\'s Leather Boots',
                'Clothes',
                'womens_leather_boots.jpg',
                89.99,
                'Fashionable leather boots for women.',
                4.3
        ),
        (
                'Men\'s Classic Suit',
                'Clothes',
                'mens_classic_suit.jpg',
                149.99,
                'Classic suit for formal occasions.',
                4.6
        ),
        (
                'Women\'s Winter Coat',
                'Clothes',
                'womens_winter_coat.jpg',
                129.99,
                'Stylish and warm winter coat for women.',
                4.7
        ),
        (
                'Men\'s Sports Jacket',
                'Clothes',
                'mens_sports_jacket.jpg',
                59.99,
                'Sports jacket for an active lifestyle.',
                4.4
        ),
        (
                'Women\'s Lounge Set',
                'Clothes',
                'womens_lounge_set.jpg',
                39.99,
                'Comfortable lounge set for women.',
                4.2
        ),
        (
                'Men\'s Graphic T-Shirt',
                'Clothes',
                'mens_graphic_tshirt.jpg',
                19.99,
                'Graphic T-shirt for a trendy casual look.',
                4.5
        );