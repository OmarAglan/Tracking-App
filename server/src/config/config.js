module.exports = {
  port: process.env.port || 8081,
  db: {
    database: process.env.DB_NAME || 'tracker',
    user: process.env.DB_USER || 'tracker',
    password: process.env.DB_PASS || 'tracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tracker.sqlite'
    }
  }
}
