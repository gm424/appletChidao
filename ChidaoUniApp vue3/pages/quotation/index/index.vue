<template>
	<view class="contain">
		<quotationHeader></quotationHeader>
		<specification></specification>
		<containGoods></containGoods>
		<button class="button" @click="navToDetailPage">获取价格</button>
	</view>
</template>

<script setup>
	import quotationHeader from '@/components/search-route.vue'
	import specification from '../components/specification.vue'
	import containGoods from '../components/containGoods.vue'
	const navToDetailPage=()=> {
		uni.navigateTo({
			url: `/pages/routeScheme/index/index`
		})
	}
</script>

<style lang="scss">
	.contain{
		background-color: #eeeeee;
		position: relative;
		max-height: 600px;
		min-height: 100vh;
	}
	.button{
		width: 90%;
		background-color: #4c6fee;
		color: #fff;
		border-radius: 25px;
		font-size: 14px;
		position: absolute;
		bottom:50px;
		margin-left: 5%;
	}
</style>