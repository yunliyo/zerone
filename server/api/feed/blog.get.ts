import { XMLParser } from 'fast-xml-parser'
import homepageConfig from '~~/homepage.config'

export default defineEventHandler(async (_event) => {
	const parser = new XMLParser({
		attributeNamePrefix: '$',
		cdataPropName: '$',
		ignoreAttributes: false,
		isArray: name => name === 'entry' || name === 'category',
		textNodeName: '_',
	})

	const resp = await fetch(homepageConfig.blogAtom, {
		headers: {
			'User-Agent': 'Mozilla/5.0 (compatible; YunliBot/1.0; +https://liqiang.info)',
			'Accept': 'application/atom+xml, application/xml, text/xml, */*',
		},
	})

	if (!resp.ok) {
		throw createError({
			statusCode: resp.status,
			statusMessage: `Failed to fetch blog feed: ${resp.statusText}`,
		})
	}

	const objAtom = parser.parse(await resp.text())
	
	const entries = objAtom.feed?.entry
	
	if (!entries || !Array.isArray(entries)) {
		return []
	}
	
	return entries
})
