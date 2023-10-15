import { createPool } from 'mysql2/promise'

import { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } from './dotenv/config.js'

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: DB_PORT
})

export default pool
