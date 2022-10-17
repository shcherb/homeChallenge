import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const PORT = process.env.PORT;
export const BORED_API_URL = process.env.BORED_API_URL;
