/**
 * Configuration object with server port, database connection settings.
 * - port: Server port, defaults to 8081. Can be overridden by PORT env var.
 * - db: Database connection settings
 *   - database: Name of database, defaults to 'tracker'. Overridden by DB_NAME.
 *   - user: DB user, defaults to 'tracker'. Overridden by DB_USER.
 *   - password: DB password, defaults to 'tracker'. Overridden by DB_PASS.
 *   - options: Dialect, host, and storage config.
 */
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
