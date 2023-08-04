<template>
	<view class="orderDetail_contain">
		<view class="detail_item">
			<view class="item_tab">
				<text class="item_tab_text">日本海派</text>
			</view>
			<view class="item_content">
				<text class="item_content_text">北京-日本</text>
			</view>
		</view>
		<view class="detail_item">
			<view class="item_tab">可运货物</view>
			<view class="item_content">带电带磁</view>
		</view>
		<view class="detail_item">
			<view class="item_tab">平台保障</view>
			<view class="item_content">
				<el-tag class="ml-2" type="info">延时保障</el-tag>
			</view>
		</view>
		<view class="detail_item">
			<view class="item_tab">近90天提取准点率</view>
			<view class="item_content">100.0%</view>
		</view>
		<view class="detail_item">
			<view class="item_tab">近90天平均时效</view>
			<view class="item_content">5.0天</view>
		</view>
	</view>
</template>

<script setup>
	import {onLoad} from '@dcloudio/uni-app';
	import { reactive,ref} from "vue";
	const data=ref();
	// onLoad((option)=>{
	// 	data.value = JSON.parse(decodeURIComponent(option.data));
	// 	console.log('submitOrdrer page data',data.value)
	// })
</script>

<style lang="scss">
	.orderDetail_contain{
		background-color: #fff;
		.detail_item{
			justify-content: space-between;
			display: flex;
			padding: 4px 16px;
			.item_tab{
				font-size: 13px;
				color: #686868;
				.item_tab_text{
					font-weight: 600;
					color: black;
					font-size: 14px;
				}
			}
			.item_content{
				font-size: 13px;
				color: #9d9d9d;
				.item_content_text{
					font-weight: 600;
					font-size: 14px;
				}
			}
		}
		
	}
</style>