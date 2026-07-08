import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'biospatial',
  user: 'postgres',
  password: '1234',
})

export default pool
