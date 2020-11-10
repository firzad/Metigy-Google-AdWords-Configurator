
CREATE TABLE `AdwordsConfig` (
  `userId` int(255) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `keywords` varchar(20000),
  `websites` varchar(20000),
  `settings` varchar(5000)
);