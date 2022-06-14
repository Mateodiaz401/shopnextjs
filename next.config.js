/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  env: {
    customKey: 'customValue',
  },
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space'],
  },
});
