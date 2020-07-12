

# Creating the DB server in Postgres

create database timeentry;
create user timeentryuser with encrypted password 'password123';
grant all privileges on database timeentry to timeentryuser;



https://docs.microsoft.com/en-us/ef/core/get-started/?tabs=netcore-cli

dotnet ef migrations add InitialCreate
dotnet ef database update

# todo

