-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: restaurant_review
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `restaurantdetail`
--

DROP TABLE IF EXISTS `restaurantdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurantdetail` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `restaurantName` varchar(255) NOT NULL,
  `restaurantLocation` varchar(255) NOT NULL,
  `restaurantCategory` varchar(255) NOT NULL,
  `restaurantRating` int DEFAULT NULL,
  `restaurantPrices` int DEFAULT NULL,
  `restaurantNoreviews` int DEFAULT NULL,
  `restaurantImg` varchar(255) DEFAULT NULL,
  `_idcommentPage` int DEFAULT NULL,
  UNIQUE KEY `_id_UNIQUE` (`_id`),
  KEY `_idcommentPage_idx` (`_idcommentPage`),
  CONSTRAINT `_idcommentPage` FOREIGN KEY (`_idcommentPage`) REFERENCES `commentpage` (`_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurantdetail`
--

LOCK TABLES `restaurantdetail` WRITE;
/*!40000 ALTER TABLE `restaurantdetail` DISABLE KEYS */;
INSERT INTO `restaurantdetail` VALUES (1,'TESt','east','fine dining',1,1,2,'cooker',1),(5,'dwadw','north','chicken',2,3,4,'/imgiwjdow',4),(6,'cjyfjg','east','Japanese',1,1,2,'cooker',1),(7,'cjyfjg','east','Japanese',1,1,2,'cooker',NULL),(8,'TESt','east','Japanese',1,1,2,'cooker',NULL);
/*!40000 ALTER TABLE `restaurantdetail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-09 23:44:26
