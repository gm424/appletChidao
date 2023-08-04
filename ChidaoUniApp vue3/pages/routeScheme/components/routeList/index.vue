<template>
	<view class="route-header">
		<view class="tab">百运智选</view>
		<view class="tab">价格最低</view>
		<view class="tab">时效最快</view>
	</view>
	<view class="routeList-contain" v-for="(item,index) in routeData" :key="index">
		<routeItem :routeData='item' @click="checkDetail(item)"></routeItem>
		<view class="divider_text" v-if="index==routeData.length-1"><text>已经到底啦</text></view>
	</view>
</template>
+
<script setup>
	import {reactive} from 'vue'
	import routeItem from "../routeList/routeItem.vue"
	const routeData=reactive([
		{
			title:'FEDEX-HK(SZX1)H-18 FT-IE 美洲特惠',
			srcCountry:'深圳市',
			price:'55246.34',
			weight:100,
			time:6
		},
		{
			title:'FEDEX-HK(SZX1)H-18 FT-IE 美洲特惠',
			srcCountry:'深圳市',
			price:'55246.34',
			weight:100,
			time:6
		},
		{
			title:'FEDEX-HK(SZX1)H-18 FT-IE 美洲特惠',
			srcCountry:'深圳市',
			price:'55246.34',
			weight:100,
			time:6
		},
		{
			title:'FEDEX-HK(SZX1)H-18 FT-IE 美洲特惠',
			srcCountry:'深圳市',
			price:'55246.34',
			weight:100,
			time:6
		},
		{
			title:'FEDEX-HK(SZX1)H-18 FT-IE 美洲特惠',
			srcCountry:'深圳市',
			price:'55246.34',
			weight:100,
			time:6
		},
		{
			title:'FEDEX-HK(SZX1)H-18 FT-IE 美洲特惠',
			srcCountry:'深圳市',
			price:'55246.34',
			weight:100,
			time:6
		},
		{
			title:'FEDEX-HK(SZX1)H-18 FT-IE 美洲特惠',
			srcCountry:'深圳市',
			price:'55246.34',
			weight:100,
			time:6
		}
	])
	const checkDetail=(item)=>{
		uni.navigateTo({
			url:`/pages/submitOrder/index/index?data=${encodeURIComponent(JSON.stringify(item))}`
		})
	}
</script>

<style>
	.routeList-contain{
		background-color: #f3f3f3;
		justify-content: center;
		align-items: center;
	}
	.route-header{
		display: flex;
		flex-direction: row;
	}
	.tab{
		flex:1;
		font-size: 12px;
		margin:5px 25px;
		border-radius: 12px;
		padding: 3px;
		background-color: #d8d8d8;
		text-align: center;
	}
	.divider_text{
		text-align: center;
		margin-top: 3px;
		color: #989898;
		font-size: 14px;
	}

</style>