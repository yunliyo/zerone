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

	const userAgents = [
		// Chrome
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
		// Firefox
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0',
		// Edge
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0',
		// Opera
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 OPR/110.0.0.0',
	]

	let resp: Response | null = null
	let lastError: Error | null = null

	for (const ua of userAgents) {
		try {
			resp = await fetch(homepageConfig.blogAtom, {
				headers: {
					'User-Agent': ua,
					'Accept': 'application/atom+xml, application/xml, text/xml, */*',
				},
			})
			if (resp.ok) break
		} catch (err) {
			lastError = err as Error
		}
	}

	if (!resp) {
		throw createError({
			statusCode: 502,
			statusMessage: `Failed to fetch blog feed: ${lastError?.message || 'All User-Agents failed'}`,
		})
	}

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
