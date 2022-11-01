
const bucketName = process.env.AWS_BUCKET;
const backendUrl = process.env.BACKEND_URL;

const bucketUrl = `https://${ bucketName }.s3.amazonaws.com`;

module.exports = [
  'strapi::errors',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:1337', backendUrl, 'http://localhost:3000', 'https://resonant-cajeta-d298bf.netlify.app', 'https://juliusyam.com', 'https://www.juliusyam.com']
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            bucketUrl,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            bucketUrl,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
