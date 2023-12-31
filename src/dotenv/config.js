import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASS = process.env.DB_PASS || '1234'
export const DB_NAME = process.env.DB_NAME || 'fabrica'
export const DB_PORT = process.env.DB_PORT || 3306

console.log(PORT, DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT)
