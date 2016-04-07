module.exports = {
  server: {
    host: '127.0.0.1',
    port: 8000,
    cors: true,
  },
  database: {
    host: '127.0.0.1',
    port: 27017,
    db: 'hapi-es6-jwt',
    username: '',
    password: '',
  },
  login: {
    SALT_WORK_FACTOR: 10,
    MAX_LOGIN_ATTEMPTS: 5,
    LOCK_TIME: 2 * 60 * 60 * 1000,
  },
  key: {
    privateKey: '37LvDSm4XvjYOh9Y',
    tokenExpiry: 1 * 30 * 1000 * 60, // 1 hour
  },
  email: {
    username: 'test@test.com',
    password: 'password',
    accountName: 'Cronj',
    verifyEmailUrl: 'verifyEmail',
  },
};
