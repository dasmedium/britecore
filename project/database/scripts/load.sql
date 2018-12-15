set @@sql_mode='no_engine_substitution';
LOAD DATA INFILE
'/var/lib/mysql-files/PaymentsDataWorksheet.csv' INTO TABLE customers FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS
(id, Name, Description, Date, Amount);