<script setup lang="ts">
import { Temporal } from 'temporal-polyfill'

const props = withDefaults(defineProps<{
	icon?: string
	date?: string | Temporal.ZonedDateTime
	format?: dateTimeFormatOptions
	absolute?: boolean
	relative?: boolean
	nospace?: boolean
	tipFormat?: dateTimeFormatOptions
	tipTransform?: (formattedDate: string) => string
}>(), {
	tipTransform: String,
})

const today = Temporal.Now.plainDateISO()
const zdt = computed(() => {
	try {
		return typeof props.date === 'string' ? toZonedTemporal(props.date) : props.date
	}
	catch {
		return null
	}
})

/** 标记是否已完成客户端水合，用于推迟依赖浏览器时区/Temporal.Now 的计算 */
const isClient = ref(false)

const relative = computed(() => {
	if (!isClient.value) return false
	if (props.absolute || !zdt.value) return false
	return props.relative || today.since(zdt.value, { largestUnit: 'week' }).weeks < 1
})

const showYear = computed(() => {
	if (!isClient.value) return true
	return zdt.value ? zdt.value.year !== today.year : false
})

const tooltip = computed(() => isClient.value && zdt.value
	? props.tipTransform(toZdtLocaleString(zdt.value, props.tipFormat))
	: undefined,
)

onMounted(() => isClient.value = true)
</script>

<template>
<span :title="tooltip">
	<Icon v-if="icon" :name="icon" />
	<template v-if="icon && !nospace">&nbsp;</template>

	<span v-if="!zdt">Invalid Date</span>

	<time
		v-else-if="format"
		:datetime="toInstantString(zdt)"
		v-text="toZdtLocaleString(zdt, format)"
	/>

	<!-- Invalid Date 传入 NuxtTime 组件或 .toISOString() 会报错 -->
	<NuxtTime
		v-else
		:datetime="toInstantString(zdt)"
		:relative
		:year="showYear ? '2-digit' : undefined"
		month="long"
		day="numeric"
	/>

</span>
</template>
