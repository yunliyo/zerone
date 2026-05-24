<script setup lang="ts">
import { ZField } from '#components';

useHead({ title: '' })
definePageMeta({
	alias: ['/'],
	title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
<ZeroneAvatar class="avatar" />

<div class="wrapper">
	<ZField>
		<template #label>
			<span style="font-size: 3rem;">Hi, </span>
		</template>
		<h1 style="font-size: 3rem;">
			幸会，<br>我是<mark>{{ appConfig.author.name }}</mark>
		</h1>
		<p class="desc">
			{{ appConfig.subtitle }}
		</p>
		<div>
			<ZButton
				icon="ri:file-list-3-line"
				to="https://blog.liqiang.info/"
				text="博客"
				primary
			/>
			<ZButton
				icon="ri:github-line"
				to="https://github.com/yunliyo"
				text="GitHub"
			/>
		</div>
	</ZField>

	<ZField label="介绍">
		<p>一个热爱诗词书画的程序员。</p>
		<p>喜欢折腾，尝试不同的新鲜事物。</p>
	</ZField>

	<ZField label="关于我">
		<p>我，是一个普通大学培育的普通的学生，在普通的公司做着普通的工作。</p>
		<p>但是我的心并不想这样普通下去，我想向上冲，不断学习，看看外面的世界。</p>
	</ZField>

	<ZField label="近期活动">
		<p>2026年3月，使用Nuxt Content重构了<ZLink to="https://blog.liqiang.info/">个人博客</ZLink>。</p>
		<p>2018年毕业于<ZLink to="https://www.cqc.edu.cn/">重庆城市管理职业大学</ZLink>物联网应用技术专业，辅修现代殡葬技术与管理专业，现为自由职业，以 Web3 交易为生计。</p>
		<p>2015年10月10日，完成第一版<ZLink to="https://www.liqiang.info/">个人网站</ZLink>的开发。</p>
	</ZField>

	<ZField label="友情链接">
		<p><ZBadge v-for="item in appConfig.fork" :key="item.link" v-bind="item" /></p>
	</ZField>
</div>
</template>

<style lang="scss" scoped>
.avatar {
	position: fixed;
	opacity: 0.2;
	right: 20vw;
	margin-right: -0.382em; // (1 - √5)/2
	mask-image: radial-gradient(#FFF 43.7%, transparent 70.7%); // (√5 - 1) / 2 x, x = √2 / 2
	font-size: min(100vw, 61.8vh);
	z-index: -1;
}

.desc {
	margin: 1rem 0;
	font-size: 1.5rem;
	color: var(--c-text-2);
}
</style>
