/*          --- .env ---         */

// Application
export const APPLICATION_NAME = process.env.APPLICATION_NAME;
export const DESCRIPTION = process.env.DESCRIPTION;
export const VERSION = process.env.VERSION;
export const NODE_ENV = process.env.NODE_ENV;

// Url
export const PORT = process.env.PORT;
export const GLOBAL_PREFIX = process.env.GLOBAL_PREFIX;
export const BASE_URL = process.env.BASE_URL;
export const FRONTEND_URL = process.env.FRONTEND_URL;
export const POSTMAN_URL = process.env.POSTMAN_URL;

// Database
export const MONGODB_URI = process.env.MONGODB_URI;
export const STORAGE_PATH = process.env.STORAGE_PATH;

// Jwt
export const SECRET_KEY = process.env.SECRET_KEY;
export const ACCESS_TOKEN_EXPIRATION = process.env.ACCESS_TOKEN_EXPIRATION;
export const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION;
export const RESET_PASSWORD_TOKEN_EXPIRATION = process.env.RESET_PASSWORD_TOKEN_EXPIRATION;

// Email
export const EMAIL_AUTHOR = process.env.EMAIL_AUTHOR;
export const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

// Other
export const BAD_NUMBERS = ["13", "44", "49", "53", "77", "78", "111"];