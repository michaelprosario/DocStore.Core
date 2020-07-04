

# Creating the DB server in Postgres

create database timeentry;
create user timeentryuser with encrypted password 'password123';
grant all privileges on database timeentry to timeentryuser;

