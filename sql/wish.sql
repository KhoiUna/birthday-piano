-- Create uuid extension for Postgres: https://kb.objectrocket.com/postgresql/uuid-generator-in-postgresql-775
CREATE extension IF NOT EXISTS "uuid-ossp";

-- PostgreSQL
CREATE TABLE IF NOT EXISTS wish (
    id uuid DEFAULT uuid_generate_v4(),
    from_user VARCHAR(45) NOT NULL,
    to_user VARCHAR(45) NOT NULL,
    email VARCHAR(255) NOT NULL,
    date_of_birth TIMESTAMP,
    allow_to_play_immediately BOOLEAN NOT NULL,
    wish_text VARCHAR(100) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);