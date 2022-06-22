import { render, screen } from '@testing-library/react'

import { EmbedLink } from '../EmbedLink'

import { Link } from '.'

describe('markdown link test', () => {
	test('link with children test', () => {
		render(<Link href="https://yutaaaaa.dev">yutaaaaa</Link>)

		const element = screen.getByTestId('markdown-link')
		expect(element).toHaveTextContent('yutaaaaa')
		expect(element).toHaveAttribute('href', 'https://yutaaaaa.dev')
	})

	test('not link but embed link test', async () => {
		render(<Link href="https://ogp-success.com">https://ogp-success.com</Link>)
		render(<EmbedLink href="https://ogp-success.com" />)

		const element = await screen.findByTestId('markdown-embed-link')
		expect(element).toHaveTextContent('koppa test')
	})
})
