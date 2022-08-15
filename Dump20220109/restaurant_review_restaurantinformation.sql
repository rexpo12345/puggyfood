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
-- Table structure for table `restaurantinformation`
--

DROP TABLE IF EXISTS `restaurantinformation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurantinformation` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `restaurantMap` varchar(255) NOT NULL,
  `restaurantAddress` varchar(255) NOT NULL,
  `restaurantPhone` int DEFAULT NULL,
  `restaurantWebsite` varchar(255) DEFAULT NULL,
  `restaurantEmail` varchar(255) DEFAULT NULL,
  `restaurantHours` varchar(255) NOT NULL,
  `restaurantDescription` varchar(255) NOT NULL,
  `_idrestaurantDetail` int DEFAULT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `_id_UNIQUE` (`_id`),
  KEY `_idrestaurantDetail_idx` (`_idrestaurantDetail`),
  CONSTRAINT `_idrestaurantDetail` FOREIGN KEY (`_idrestaurantDetail`) REFERENCES `restaurantdetail` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurantinformation`
--

LOCK TABLES `restaurantinformation` WRITE;
/*!40000 ALTER TABLE `restaurantinformation` DISABLE KEYS */;
INSERT INTO `restaurantinformation` VALUES (4,'abc','abcd',123,'abcdef','abcedefg','hijk','wdadwadaw',NULL),(5,'Poop','MYNUTS',0,'cunt','coool','aaf','swaggers',5),(6,'lil kid','abcd',123,'abcdef','abcedefg','hijk','iudwghuwidhwoiuhdw',NULL),(7,'lil kid','blk 21 pasirris',88883123,'www.restweb.com','test@email.com','12:12:12','test',NULL),(8,'testing','blk 21 pasirris',888831223,'www.restweb.com','test@email.com','12:12:12','test',NULL);
/*!40000 ALTER TABLE `restaurantinformation` ENABLE KEYS */;
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
