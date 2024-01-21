CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL,
        image_urls TEXT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        description TEXT NOT NULL,
        rating DECIMAL(2, 1) NOT NULL
);
-- TODO: add profile picture url column
CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        profile_picture_url VARCHAR(255),
        role ENUM('admin', 'user') DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE IF NOT EXISTS order_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        order_id INT NOT NULL,
        product_id INT,
        quantity INT,
        price DECIMAL(10, 2),
        FOREIGN KEY (order_id) REFERENCES orders(id),
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
                image_urls,
                price,
                description,
                rating
        )
VALUES (
                'G.SKILL 32GB KIT DDR5 6000MHz CL30 Trident Z5 NEO RGB',
                'RAM',
                '["/images/g_skill_32gb_trident_z5_neo.webp","/images/g_skill_32gb_trident_z5_neo_2.webp","/images/g_skill_32gb_trident_z5_neo_3.webp"]',
                142.90,
                'Trident Z5 Neo RGB DDR5 memory is designed for ultra-high overclocked performance on DDR5-enabled AMD platforms. Featuring AMD EXPO overclocking technology for easy memory overclocking on supported AMD platforms, the Trident Z5 Neo RGB series is the ideal choice for building high-performance systems.',
                4.8
        ),
        (
                'MSI GeForce RTX 4080 SUPRIM X 16G',
                'GPU',
                '["/images/msi_rtx_4080_suprim.png"]',
                1599.90,
                'The Ultimate Platform for Gamers and Creators. Powered by GeForce RTX 40 Series and DLSS 3. New Streaming Multiprocessors Up to 2x performance and power efficiency. Fourth-Gen Tensor Cores Up to 4x performance with DLSS 3 vs. brute-force rendering. Third-Gen RT Cores Up to 2x ray tracing performance',
                4.5
        ),
        (
                'MSI GeForce RTX 4060 GAMING X 8G',
                'GPU',
                '["/images/msi_rtx_4060.png"]',
                372.90,
                'Game, stream, create. The GeForce RTX™ 4060 lets you take on the latest games and apps with the ultra-efficient NVIDIA Ada Lovelace architecture. Experience immersive, AI-accelerated gaming with ray tracing and DLSS 3, and supercharge your creative process and productivity with NVIDIA Studio.',
                4.0
        ),
        (
                'Sony Alpha A7 III',
                'Digital Camera',
                '["/images/sony_alpha_a7_iii.png"]',
                1609,
                '24.2MP back-illuminated CMOS sensor and upgraded image processor help depict sharp images, maximize sensitivity, and extend dynamic range. Improved AF and tracking plus up to 10 fps continuous shooting capture decisive moments. Reliable operability ensures confident shooting. A light, compact body enhances mobility.',
                5
        ),
        (
                'AMD Ryzen 7 7800X3D',
                'CPU',
                '["/images/amd_ryzen_7800x3d.png"]',
                400.90,
                'The Dominant Gaming Processor, with AMD 3D V-Cache Technology for Even More Game Performance. Whatever the setting, whatever the resolution, lead your team to victory with this incredible gaming processor. Plus, enjoy the benefits of next-gen AMD 3D V-Cache technology for low latency and even more game performance.',
                4.6
        );
-- Insert admin
-- admin, password: admin
INSERT INTO users (
                email,
                username,
                password,
                profile_picture_url,
                role
        )
VALUES (
                'admin@example.com',
                'admin',
                '$2b$10$3c7nG5iEoDoqKm7t/38hs.kocnTTBPVJXu6IV9xMlyNJXGv9da3DO',
                '/images/my-logo2.svg',
                'admin'
        );
-- Insert placeholder users
-- viro, password: helloWorld2024
-- Jozo Mrkva, password: mySecurePass!
INSERT INTO users (email, username, password, profile_picture_url)
VALUES (
                'adam.virostek@example.com',
                'viro',
                '$2b$12$kDF23UGkWVhlTvADA7I/Hu9n3vRQ9JfpqsvvLT.YojX5TfzF7o7IC',
                '/images/my-logo2.svg'
        ),
        (
                'jozko.mrkvicka@example.com',
                'JozoMrkva',
                '$2b$12$aK4zj2zJJu21dBtyy2RUceo.uP7xTv5Wqs2i38Zumenr7257Ln5Rq',
                NULL
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