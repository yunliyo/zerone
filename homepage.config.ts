// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
	name: '韵狸',
	avatar: '/icon.png',
	email: 'yunliyo@foxmail.com',
	homepage: 'https://www.liqiang.info',
}

const homepageConfig = {
	title: '韵狸',
	subtitle: '过眼溪山，旧时曾识',
	description: '一个热爱诗词书画的程序员',
	author,
	language: 'zh-CN',
	timeZone: 'Asia/Shanghai',
	favicon: '/icon.png',
	url: 'https://im.liqiang.info',
	blogAtom: 'https://blog.liqiang.info/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules: NitroConfig['routeRules'] = {
	'/api/avatar.png': { redirect: author.avatar },
	'/api/icon.png': { redirect: homepageConfig.favicon },
	'/favicon.ico': { redirect: homepageConfig.favicon },
}

export default homepageConfig
