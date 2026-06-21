<script setup lang="ts">
useHead({ title: '项目' })
definePageMeta({ headerText: '参与的开源项目' })

const projects = [
	{
		title: '龙榆生先生纪念网站',
		github: 'yunliyo/longyusheng.org',
		description: '用于生成 longyusheng.org 网站的 XML 和 XSLT',
	},
	{
		title: 'onelinks',
		github: 'yunliyo/onelinks',
		description: '第一版个人主页，使用原生 HTML + CSS + JS 制作的链接聚合页面，类似于 Linktree 的功能，用于在一个页面上集中展示多个社交媒体链接和个人资源链接。',
	},{
		title: 'yunli-old(Private)',
		github: 'yunliyo/yunli-old',
		description: '第一版个人主页，使用原生 HTML + CSS + JS 构建的静态网页。',
	},{
		title: 'yunli-homepageV2',
		github: 'yunliyo/yunli-homepage',
		description: '使用 Solid.js, UnoCSS, Vite 构建的极简现代简约个人主页.',
	},{
		title: 'yunli-homepageV3(Private)',
		github: 'yunliyo/yunli',
		description: '基于 Nuxt.js 开发的链接聚合（link in bio/linktree）主页。',
	},{
		title: 'yunli-blog(Private)',
		github: 'yunliyo/yunli-blog',
		description: '使用 Nuxt content 搭建的个人博客。',
	},{
		title: '个人简历',
		github: 'yunliyo/yunli-cv',
		description: 'Nuxt.js 开发的简历，可按下 Ctrl + P 打印。',
	},{
		title: '微信小程序版个人主页',
		github: 'yunliyo/yunli-app',
		description: '使用 WXML + WXSS + JS 制作的微信小程序版个人主页。',
	},{
		title: '静态个人主页收集',
		github: 'yunliyo/homepage-demo',
		description: '此项目只收集静态个人主页项目。',
	},{
		title: '犹为君官网',
		github: 'yunliyo/boe',
		description: '一个简单、无任何修饰的官网，使用 Astro + React 构建。',
	},{
		title: 'resumeOL',
		github: 'yunliyo/resumeOL',
		description: '本地管理数据的在线简历制作工具',
	},{
		title: 'vcard',
		github: 'yunliyo/vcard',
		description: '基于 TailwindCSS + React + Next.js 构建的响应式电子名片应用。',
	},
]
</script>

<template>
<section>
	<ZProject v-for="project in projects" :key="project.title" v-bind="project" />
</section>
</template>

<style lang="scss" scoped>
section {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
	gap: 1rem;
}
</style>
