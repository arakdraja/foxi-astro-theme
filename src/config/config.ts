// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Foxi. Tailwind CSS Astro Starter Kit by Oxygenna',
	siteDescription:
		'Sintesys is a Workforce Management System that can help an organization simplify and automate work processes to become more efficient.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Sintesys. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
