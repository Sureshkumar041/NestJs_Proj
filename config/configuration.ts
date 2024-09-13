export default () => ({
  port: Number(process.env.PORT),
  database: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
  },
});
