import type { Nav } from '~/types/nav'
import { h } from 'vue'
import homepageConfig from '~~/homepage.config'

// 图标查询：https://yesicon.app/ph
// 图标插件：https://marketplace.visualstudio.com/items?itemName=antfu.iconify

// @keep-sorted
export default defineAppConfig({
	...homepageConfig,

	footer: [
		`© 2015-${new Date().getFullYear()} by Yunli`,
		h('a', { href: 'https://beian.miit.gov.cn/', target: '_blank', rel: 'noopener nofollow' }, '未ICP备0000000000号'),
		h('a', { href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=000000000000', target: '_blank', rel: 'noopener nofollow' }, '未公网安备000000000000号'),
	],

	// 用于在主页展示下游引用
	fork: [
		{
			img: 'https://www.cswu.cn/_upload/article/images/3b/dc/1d40eef14ae6bd954a67b3e1dad1/e4667539-a310-4208-b145-c71758f8a4b8.jpg',
			link: 'https://www.cqc.edu.cn/',
			text: '重庆城市管理职业大学',
		},
	],

	nav: [
		{
			title: '',
			items: [
				{ icon: 'ri:id-card-line', text: '简介', url: '/' },
				{ icon: 'ph:linktree-logo', text: '链树', url: '/links' },
				{ icon: 'ph:article', text: '文章', url: '/articles' },
				{ icon: 'ri:code-line', text: '项目', url: '/project' },
				{ icon: 'ri:planet-line', text: '站点', url: '/site' },
				{ icon: 'ri:history-line', text: '日志', url: '/log' },
				{ icon: 'ri:link-m', text: '友链', url: '/friends' },
			],
		},
		{
			title: '社交',
			items: [
				{ icon: 'ri:mail-line', text: 'E-Mail', url: 'mailto:yunliyo@foxmail.com' },
				{ icon: 'ri:github-line', text: 'Github', url: 'https://github.com/yunliyo' },
			],
		},
		{
			title: '其他',
			items: [
				{ icon: 'ri:shield-check-line', text: '隐私政策', url: '/privacy-policy' },
				{ icon: 'ri:file-text-line', text: '用户协议', url: '/terms-of-use' },
			],
		},
	] satisfies Nav,

	themes: {
		light: {
			icon: 'ri:sun-line',
			tip: '浅色模式',
		},
		system: {
			icon: 'ri:tv-2-line',
			tip: '跟随系统',
		},
		dark: {
			icon: 'ri:moon-line',
			tip: '深色模式',
		},
	},
})
