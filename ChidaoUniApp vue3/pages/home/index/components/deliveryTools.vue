<template>
	<view class="cate-section">
		
		<view class="cate-setion-contain">
			<view v-for="(item,index) in datasource" :key="index" class="cate-section-item">
				<view class="cate-item" v-for="(it,idx) in item" :key="idx" @click="navToDetailPage(it.to)">
					<image :src="it.src"></image>
					<text style="font-size: 8px;">{{it.name}}</text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script setup>
import { reactive } from "vue";
	const datasource=reactive([
		[{
			src:'/static/calculate.png',
			name:'计费重计算',
			to:'/pages/home/billingWeight/billingWeight'
		},
		{
			src:'/static/deliver.png',
			name:'快递轨迹'
		},
		{
			src:'/static/farAddress.png',
			name:'偏远地址'
		},
		{
			src:'/static/airport.png',
			name:'机场三字码'
		}],[
			{
				src:'/static/sendAddress.png',
				name:'送货地址'
			},
			{
				src:'/static/addContract.png',
				name:'申报要素'
			},
			{
				src:'/static/exchangeRate.png',
				name:'汇率换算'
			},
			{
				src:'/static/more.png',
				name:'更多'
			},
		]
		
	])
	const navToDetailPage = (item) => {
		uni.navigateTo({
			url: item
		})
	};
</script>

<style lang="scss">
	/* 分类 */
	.cate-section {
		margin-left:5%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		width: 90%;
		padding-bottom: 20px;
		padding-top:20px;
		background: linear-gradient(to bottom,rgba(245, 154, 35, 0.2), #fff);
		border-radius: 15px;
		.cate-section-header{
			padding:3px;
			color:#fff;
		}
		.cate-setion-contain{
			border-radius: 15px;
			background: #fff;
			width: 94%;
			.cate-section-item{
				display: flex;
				flex-direction: row;
				// justify-content: space-around;
				// align-items: center;
				// flex-wrap:wrap;
				width: 100%;
				.cate-item {
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					font-size: $font-sm + 2upx;
					color: $font-color-dark;
					padding: 20upx 2upx;
					
				}
				/* 原图标颜色太深,不想改图了,所以加了透明度 */
				image {
					width: 68upx;
					height: 68upx;
					// margin-bottom: 14upx;
					// border-radius: 50%;
					// opacity: .7;
					// box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
				}
			}
		}
		
		
	}
	.ad-1{
		width: 90%;
		height: 210upx;
		margin-left: 5%;
		margin-top: 20px;
		image{
			width:100%;
			height: 90%; 
			border-radius: 10px;
		}
	}
	
</style>