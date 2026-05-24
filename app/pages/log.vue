<script setup lang="ts">
import { ZeroneIcon, ZeroneIconOld } from '#components'

useHead({ title: '日志' })
definePageMeta({ headerText: '互联网上的活动记录' })

const timeline = {
	'2025-07-26': ['博客：迁移 Nuxt Content 3 | ', h('code', 'blog.liqiang.info')],
	'2017-03-20': ['Logo：', h(ZeroneIcon)],
	'2016-09-08': ['Logo：', h(ZeroneIconOld), ' RhymeFox'],
	'2012-06-30': ['开始使用昵称 ', h('code', '韵狸（Yunli）'), ' 在互联网上活跃'],
}
</script>

<template>
<ZTimeline :timeline />
</template>
