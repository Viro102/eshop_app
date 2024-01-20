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
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        product_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
);
CREATE TABLE IF NOT EXISTS reviews (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        product_id INT NOT NULL,
        rating DECIMAL(2, 1) NOT NULL,
        comment TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
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
                'G.SKILL 32GB KIT DDR5 6000MHz CL30 Trident Z5 NEO RGB',
                'RAM',
                '/images/g_skill_32gb_trident_z5_neo.webp',
                142.90,
                'Trident Z5 Neo RGB DDR5 memory is designed for ultra-high overclocked performance on DDR5-enabled AMD platforms. Featuring AMD EXPO overclocking technology for easy memory overclocking on supported AMD platforms, the Trident Z5 Neo RGB series is the ideal choice for building high-performance systems.',
                4.8
        ),
        (
                'MSI GeForce RTX 4080 SUPRIM X 16G',
                'GPU',
                '/images/msi_rtx_4080_suprim.png',
                1599.90,
                'The Ultimate Platform for Gamers and Creators. Powered by GeForce RTX 40 Series and DLSS 3. New Streaming Multiprocessors Up to 2x performance and power efficiency. Fourth-Gen Tensor Cores Up to 4x performance with DLSS 3 vs. brute-force rendering. Third-Gen RT Cores Up to 2x ray tracing performance',
                4.5
        ),
        (
                'MSI GeForce RTX 4060 GAMING X 8G',
                'GPU',
                '/images/msi_rtx_4060.png',
                372.90,
                'Game, stream, create. The GeForce RTX™ 4060 lets you take on the latest games and apps with the ultra-efficient NVIDIA Ada Lovelace architecture. Experience immersive, AI-accelerated gaming with ray tracing and DLSS 3, and supercharge your creative process and productivity with NVIDIA Studio.',
                4.0
        ),
        (
                'Sony Alpha A7 III',
                'Digital Camera',
                '/images/sony_alpha_a7_iii.png',
                1609,
                '24.2MP back-illuminated CMOS sensor and upgraded image processor help depict sharp images, maximize sensitivity, and extend dynamic range. Improved AF and tracking plus up to 10 fps continuous shooting capture decisive moments. Reliable operability ensures confident shooting. A light, compact body enhances mobility.',
                5
        ),
        (
                'AMD Ryzen 7 7800X3D',
                'CPU',
                '/images/amd_ryzen_7800x3d.png',
                400.90,
                'The Dominant Gaming Processor, with AMD 3D V-Cache Technology for Even More Game Performance. Whatever the setting, whatever the resolution, lead your team to victory with this incredible gaming processor. Plus, enjoy the benefits of next-gen AMD 3D V-Cache technology for low latency and even more game performance.',
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
                'Men Casual Shirt',
                'Clothes',
                'men_casual_shirt.jpg',
                29.99,
                'Comfortable and stylish casual shirt for men.',
                4.2
        ),
        (
                'Women Floral Dress',
                'Clothes',
                'women_floral_dress.jpg',
                49.99,
                'Elegant floral dress for women for special occasions.',
                4.6
        ),
        (
                'Men Slim Fit Jeans',
                'Clothes',
                'men_slim_fit_jeans.jpg',
                39.99,
                'Slim fit jeans for a modern and stylish look.',
                4.3
        ),
        (
                'Women Active Leggings',
                'Clothes',
                'women_active_leggings.jpg',
                34.99,
                'Stretchable and breathable leggings for active women.',
                4.5
        ),
        (
                'Men Running Shoes',
                'Clothes',
                'men_running_shoes.jpg',
                69.99,
                'Comfortable and durable running shoes for men.',
                4.7
        ),
        (
                'Women High Heels',
                'Clothes',
                'women_high_heels.jpg',
                59.99,
                'Stylish high heels for a fashionable look.',
                4.4
        ),
        (
                'Men Hooded Jacket',
                'Clothes',
                'men_hooded_jacket.jpg',
                79.99,
                'Warm and trendy hooded jacket for men.',
                4.8
        ),
        (
                'Women Denim Skirt',
                'Clothes',
                'women_denim_skirt.jpg',
                44.99,
                'Classic denim skirt for a versatile wardrobe.',
                4.0
        ),
        (
                'Men Polo Shirt',
                'Clothes',
                'men_polo_shirt.jpg',
                24.99,
                'Casual and timeless polo shirt for men.',
                4.5
        ),
        (
                'Women Leather Boots',
                'Clothes',
                'women_leather_boots.jpg',
                89.99,
                'Fashionable leather boots for women.',
                4.3
        ),
        (
                'Men Classic Suit',
                'Clothes',
                'men_classic_suit.jpg',
                149.99,
                'Classic suit for formal occasions.',
                4.6
        ),
        (
                'Women Winter Coat',
                'Clothes',
                'women_winter_coat.jpg',
                129.99,
                'Stylish and warm winter coat for women.',
                4.7
        ),
        (
                'Men Sports Jacket',
                'Clothes',
                'men_sports_jacket.jpg',
                59.99,
                'Sports jacket for an active lifestyle.',
                4.4
        ),
        (
                'Women Lounge Set',
                'Clothes',
                'women_lounge_set.jpg',
                39.99,
                'Comfortable lounge set for women.',
                4.2
        ),
        (
                'Men Graphic T-Shirt',
                'Clothes',
                'men_graphic_tshirt.jpg',
                19.99,
                'Graphic T-shirt for a trendy casual look.',
                4.5
        );
-- Insert placeholder users
-- user1, password: password123
-- user2, password: helloWorld2024
-- user3, password: mySecurePass!
INSERT INTO users (email, username, password)
VALUES (
                'user1@example.com',
                'user1',
                '$2b$12$09675jxDLpGdTT0cqO3m2.WtMRZo2./ASFGpN6KQ0VtDP7R54sn7G'
        ),
        (
                'user2@example.com',
                'user2',
                '$2b$12$kDF23UGkWVhlTvADA7I/Hu9n3vRQ9JfpqsvvLT.YojX5TfzF7o7IC'
        ),
        (
                'user3@example.com',
                'user3',
                '$2b$12$aK4zj2zJJu21dBtyy2RUceo.uP7xTv5Wqs2i38Zumenr7257Ln5Rq'
        );
-- Insert placeholder reviews
INSERT INTO reviews (user_id, product_id, rating, comment)
VALUES (
                1,
                1,
                4.5,
                'Great product, really enjoyed using it!'
        ),
        (
                2,
                1,
                3.7,
                'Decent quality, but could be better.'
        ),
        (
                3,
                1,
                4.0,
                'Good value for the price, recommended.'
        );