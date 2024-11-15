-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2024 at 02:46 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_study`
--

-- --------------------------------------------------------

--
-- Table structure for table `php_api`
--

CREATE TABLE `php_api` (
  `id` int(11) NOT NULL,
  `uname` varchar(110) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `city` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `php_api`
--

INSERT INTO `php_api` (`id`, `uname`, `mobile`, `age`, `city`) VALUES
(33, 'Alice Johnson', '1234567892', 22, 'Chicago'),
(34, 'Bob Brown', '1234567893', 28, 'Houston'),
(35, 'Charlie White', '1234567894', 35, 'Phoenix'),
(36, 'David Green', '1234567895', 29, 'Philadelphia'),
(37, 'Eve Black', '1234567896', 27, 'San Antonio'),
(38, 'Frank Adams', '1234567897', 31, 'San Diego'),
(39, 'Grace Baker', '1234567898', 26, 'Dallas'),
(40, 'Henry Clark', '1234567899', 33, 'San Jose'),
(41, 'Ivy Davis', '1234567800', 24, 'Austin'),
(42, 'Jack Edwards', '1234567801', 32, 'Jacksonville'),
(43, 'Kate Fox', '1234567802', 21, 'Fort Worth'),
(44, 'Leo Harris', '1234567803', 34, 'Columbus'),
(45, 'Mia Jenkins', '1234567804', 23, 'San Francisco'),
(46, 'Noah King', '1234567805', 27, 'Charlotte'),
(47, 'Olivia Lee', '1234567806', 26, 'Indianapolis'),
(48, 'Paul Martin', '1234567807', 29, 'Seattle'),
(49, 'Quinn Nelson', '1234567808', 35, 'Denver'),
(52, 'Tina Quinn', '1234567811', 30, 'El Paso'),
(53, 'Ursula Roberts', '1234567812', 33, 'Nashville'),
(54, 'Victor Stone', '1234567813', 24, 'Detroit'),
(55, 'Wendy Taylor', '1234567814', 27, 'Portland'),
(56, 'Xander Upton', '1234567815', 32, 'Las Vegas'),
(57, 'Yara Vance', '1234567816', 21, 'Memphis'),
(58, 'Zoe Walker', '1234567817', 23, 'Louisville'),
(59, 'Aaron Young', '1234567818', 35, 'Baltimore'),
(60, 'Betty Zane', '1234567819', 31, 'Milwaukee'),
(62, 'Pritam Pal', '9093194968', 30, 'Barasat'),
(63, 'Tanmoy Dey', '1256358702', 12, 'Kolkata'),
(64, 'Kushal Mukherjee', '7589523650', 26, 'Bankura'),
(66, 'abcd dummy11111', '12563254', 39, 'Indore22222'),
(87, 'Pritam Pal', '01236478535', 45, 'Barasat'),
(88, 'Pritam Pal', '01236478535', 2, 'Barasatrrrrrrrrrrrrrr'),
(89, 'Pritam Pal', '01236478535', 22562, 'Barasat'),
(90, 'Pritam Pal', '01236478535', 0, 'Barasatrefffffffffffffffffff'),
(91, 'Pritam Pal', '01236478535', 65465, 'Barasat'),
(92, 'Pritam Pal', '01236478535', 2147483647, 'Barasat');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `php_api`
--
ALTER TABLE `php_api`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `php_api`
--
ALTER TABLE `php_api`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
