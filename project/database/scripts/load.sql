set @@sql_mode='no_engine_substitution';
LOAD DATA INFILE
'/var/lib/mysql-files/PaymentsDataWorksheet.csv' INTO TABLE customers FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS
(tid, Name, Description, Date, Amount);
ALTER TABLE customers 
ADD id MEDIUMINT NOT NULL
AUTO_INCREMENT PRIMARY KEY FIRST;