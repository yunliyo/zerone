<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'
import { ZLink } from '#components'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

const toolSites: Array<CardProps> = [
	{
		name: '个人网站（已归档）',
		nameAlt: '风月一闲人',
		buttons: [
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/yunliyo/yunli-old' },
		],
		desc: [
			'留作纪念，第一版个人网站，模仿',
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
		name: '个人简历',
		nameAlt: '在线简历',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://resume.liqiang.info/' },
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/yunliyo/yunli-cv' },
		],
		desc: '使用 Nuxt 开发的个人简历，可按下 Ctrl + P 打印。',
	},{
		name: 'Linux 命令大全',
		nameAlt: '备忘清单',
		buttons: [
		{ icon: 'ph:planet-duotone', text: '访问', to: 'https://linux.liqiang.info/' },
		{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/yunliyo/linux-command' },
		],
		desc: 'Linux命令大全搜索工具，内容包含Linux命令手册、详解、学习、搜集。',
	},{
		name: '雪山诗派',
		nameAlt: '诗社',
		buttons: [
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/snow-mountain-org' },
		],
		desc: '成立于 2013 年 10 月 1 日，宗旨是“精神自由，追求极致”、“雪山千古冷，独照峨眉峰。',
	},{
		name: '狸庐',
		nameAlt: '文化工作室',
		buttons: [
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/cat-hut' },
		],
		desc: '始创于 2018 年 7 月，是由独立开发者韵狸打造的诗意平台，致力于提升全民诗词创作水平；同时也是一家致力于推动企业数字化转型的创新型科技工作室。',
	},{
		name: '平仄云（原零一云）',
		nameAlt: '科技工作室',
		buttons: [
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/zeronerhyme-cloud' },
		],
		desc: '始创于 2018 年 7 月，是由独立开发者韵狸打造的诗意平台，致力于提升全民诗词创作水平；同时也是一家致力于推动企业数字化转型的创新型科技工作室。',
	},
]
</script>

<template>
<ZTitle>站点</ZTitle>
<ZCardList :data-list="toolSites" />
</template>

<style lang="scss" scoped>
</style>
