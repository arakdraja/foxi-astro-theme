// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Sintesys.',
		aboutText:
			'Sintesys by PT Infomedia Solusi Humanika, is a Workforce Management System that can help an organization simplify and automate work processes to become more efficient.',
		logo: {
			src: '/logo.svg',
			alt: 'Sintesys. Workforce Management System',
			text: 'Sintesys.'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				//{
				//	subCategory: 'Pricing',
				//	subCategoryLink: '/pricing'
				//},
				//{
				//	subCategory: 'Changelog',
				//	subCategoryLink: '/changelog'
				//},
				{
					subCategory: 'Terms & Conditions',
					// subCategoryLink: '/terms'
					subCategoryLink: '/syarat-dan-ketentuan'

				},
				{
					subCategory: 'Privacy & Policy',
					subCategoryLink: '/privacy'
				}
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: '/'
				},
				//{
				//	subCategory: 'News',
				//	subCategoryLink: '/blog'
				//},
				//{
				//	subCategory: 'Careers',
				//	subCategoryLink: '/blog'
				//}
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Support',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Join us',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© PT Infomedia Solusi Humanika 2024.'
	}
}
