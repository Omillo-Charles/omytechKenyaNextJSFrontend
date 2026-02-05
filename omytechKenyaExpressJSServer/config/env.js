import { config } from "dotenv";

config({ path: ".env" });

export const { 
  PORT, 
  MONGODB_URI, 
  EMAIL_USER, 
  EMAIL_PASSWORD, 
  EMAIL_FROM 
} = process.env;