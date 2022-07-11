module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-81.railway.app'),
      port: env.int('DATABASE_PORT', 6384),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'u94qB9xPq497TDsaxg5h'),
      ssl: { "enableUnautherized": true }
    },
  },
});
