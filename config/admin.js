module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c2a33716bce5e7617bfec84825c9c296'),
  },
});
