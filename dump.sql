CREATE DATABASE wishlist;

CREATE TABLE movies (
	id SERIAL PRIMARY KEY,
	"genre" VARCHAR(50) NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	"platform" TEXT NOT NULL,
	"description" TEXT,
	"watched" BOOLEAN NOT NULL,
	"entity" TEXT NOT NULL
);
