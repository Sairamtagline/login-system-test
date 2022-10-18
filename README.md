Steps to setup the project for mac system.

1. Install node from official nodejs site LTS version.
2. brew install mysql
3. brew services start mysql
4. mysql -u root
5. CREATE DATABASE login_test;
6. USE login_test;
7. CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `users_UN` (`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
8. npm i
9. cd client && npm i
10. npm run dev

That's all your server should start for react port 3000 and backend port 5000.

