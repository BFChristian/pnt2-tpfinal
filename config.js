import dotenv from 'dotenv';
dotenv.config();

export const ENV_VARIABLES = {
    API_KEY: process.env.API_KEY || 123,
}