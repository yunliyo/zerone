<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'
import { ZLink } from '#components'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

const toolSites: Array<CardProps> = [
	{
		name: '个人网站',
		nameAlt: '风月一闲人',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://www.liqiang.info/' },
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/yunliyo' },
		],
		desc: [
			'第一版个人网站，模仿',
			h(ZLink, { to: 'https://linktr.ee', text: 'linktree' }),
			'设计风格，使用原生 HTML + CSS + JS 实现，内置博客功能。',
		],
	},{
		name: '个人博客',
		nameAlt: '馀事做诗人',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://blog.liqiang.info/' },
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/yunliyo' },
		],
		desc: '使用 Nuxt Content 开发的个人博客。',
	},{
		name: '狸庐',
		nameAlt: '',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://www.liqiang.info/docs/notepad/' },
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/yunliyo' },
		],
		desc: '使用 Docsify 搭建的文档网站。',
	},{
		name: '狸庵',
		nameAlt: '',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://www.liqiang.info/docs/notepad+/' },
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/yunliyo' },
		],
		desc: '使用 DocuteV3 搭建的文档网站。',
	},{
		name: '狸寮',
		nameAlt: '',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://www.liqiang.info/docs/notepad++/' },
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/yunliyo' },
		],
		desc: '使用 DocuteV4 搭建的文档网站。',
	},{
		name: '狸廑',
		nameAlt: '',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://www.liqiang.info/page/' },
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/yunliyo' },
		],
		desc: '使用 Markdown 转 HTML 工具搭建的原生 HTML 博客。',
	},

]
</script>

<template>
<ZTitle>站点</ZTitle>
<ZCardList :data-list="toolSites" />
</template>

<style lang="scss" scoped>
</style>
