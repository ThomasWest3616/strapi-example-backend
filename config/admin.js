module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '76b49822b95b088e545bde9138b24d7b'),
  },
});
