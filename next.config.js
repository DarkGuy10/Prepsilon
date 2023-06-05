/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	distDir: 'build',
	assetPrefix: '.',
}

module.exports = nextConfig
