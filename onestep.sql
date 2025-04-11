-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 10, 2025 at 04:52 PM
-- Server version: 5.7.21-log
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onestep`
--

-- --------------------------------------------------------

--
-- Table structure for table `otps`
--

DROP TABLE IF EXISTS `otps`;
CREATE TABLE IF NOT EXISTS `otps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `telegram_id` varchar(255) DEFAULT NULL,
  `otp` varchar(6) DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `telegram_id` varchar(255) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `passcode` varchar(255) DEFAULT NULL,
  `biometric_set` tinyint(1) DEFAULT '0',
  `kyc_status` enum('pending','approved','rejected') DEFAULT 'pending',
  `os_id` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `telegram_id` (`telegram_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
