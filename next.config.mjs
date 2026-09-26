/** @type {import('next').NextConfig} */
const nextConfig = {
  // En desarrollo, Next bloquea por defecto los recursos (JS, HMR) pedidos desde
  // otro origen. Sin esto, al abrir la página desde el celular por IP de la red
  // local no se hidrata React y dejan de andar pestañas, flechas y tarjetas.
  // No afecta al build de producción.
  allowedDevOrigins: ['192.168.*.*'],
};

export default nextConfig;
