-- Enable UUID extension for generating UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop tables if they exist (in reverse dependency order)
DROP TABLE IF EXISTS saleitems;
DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS users;

-- Create users table
CREATE TABLE users (
    userid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    isconfirmed BOOLEAN NOT NULL DEFAULT FALSE,
    confirmationtoken VARCHAR(255),
    twofactorenabled BOOLEAN NOT NULL DEFAULT FALSE,
    twofactorsecret VARCHAR(255),
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create customers table
CREATE TABLE customers (
    customerid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    userid UUID NOT NULL REFERENCES users(userid) ON DELETE CASCADE,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(20) NOT NULL,
    dateofbirth DATE NOT NULL,
    streetaddress VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    postalcode VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    isactive BOOLEAN DEFAULT TRUE
);

-- Create products table
CREATE TABLE products (
    productid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    userid UUID NOT NULL REFERENCES users(userid) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    sku VARCHAR(100),
    price DECIMAL(10, 2) NOT NULL,
    cost DECIMAL(10, 2) NOT NULL,
    quantityinstock INTEGER NOT NULL,
    createdat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create sales table
CREATE TABLE sales (
    saleid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    userid UUID NOT NULL REFERENCES users(userid) ON DELETE CASCADE,
    customerid UUID NOT NULL REFERENCES customers(customerid) ON DELETE CASCADE,
    saledate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    saleamount DECIMAL(10, 2) NOT NULL,
    paymentmethod VARCHAR(100) NOT NULL,
    createdat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create saleitems table
CREATE TABLE saleitems (
    saleitemid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    saleid UUID NOT NULL REFERENCES sales(saleid) ON DELETE CASCADE,
    productid UUID NOT NULL REFERENCES products(productid) ON DELETE SET NULL,
    quantity INTEGER NOT NULL,
    unitprice DECIMAL(10, 2) NOT NULL,
    totalprice DECIMAL(10, 2) GENERATED ALWAYS AS (quantity * unitprice) STORED
);
