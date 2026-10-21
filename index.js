const mysql = require('mysql2/promise');

async function main() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'batch2411ts',
  });

  try {
    console.log('Connected to MySQL');
  } finally {
    await connection.end();
  }
}

main().catch((error) => {
  console.error('Database connection or query failed:', error.message);
});