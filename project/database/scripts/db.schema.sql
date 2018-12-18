CREATE TABLE `customers`
(
  
  `tid` CHAR
(38) NOT NULL,
  `Name` varchar
(100) NOT NULL,
  `Description` text NOT NULL,
  `Date` DATETIME DEFAULT NULL,
  `Amount` DECIMAL
(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

