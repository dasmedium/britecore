FROM mysql:5.7

# create directory if using MYSQL > 5.7
# RUN mkdir /var/lib/mysql-files/

# Copy Schema files
ADD /scripts/db.schema.sql /docker-entrypoint-initdb.d/
RUN chown -R mysql:mysql /docker-entrypoint-initdb.d/db.schema.sql
ADD /scripts/load.sql /docker-entrypoint-initdb.d/
RUN chown -R mysql:mysql /docker-entrypoint-initdb.d/load.sql
ADD /data/PaymentsDataWorksheet.csv /var/lib/mysql-files/


