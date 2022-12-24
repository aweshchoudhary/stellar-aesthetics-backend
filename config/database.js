module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'stellar-aesthetics'),
      user: env('DATABASE_USERNAME', 'aweshchoudhary'),
      password: env('DATABASE_PASSWORD', '78667866'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
