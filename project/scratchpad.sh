## Getting CSV into already created table
mysql> LOAD DATA LOCAL INFILE '/Users/antonio/Desktop/mock_data.csv' INTO TABLE transactions FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (ID, Name, Description, Date, Amount);

## Orchestrating everything through Docker

https://stackoverflow.com/questions/29145370/how-can-i-initialize-a-mysql-database-with-schema-in-a-docker-container


