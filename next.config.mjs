/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVICE_EMAIL: process.env.SERVICE_EMAIL,
        KEY_EMAILJS: process.env.KEY_EMAILJS,
        TEMPLATE_EMAIL: process.env.TEMPLATE_EMAIL,
        KEY_CAPTCHA: process.env.KEY_CAPTCHA,
    },
};
export default nextConfig;
