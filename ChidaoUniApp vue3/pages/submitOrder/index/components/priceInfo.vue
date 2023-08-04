<template>
	<view class="priceInfo_container">
		<view class="priceInfo_title">
			<text class="title">价格明细</text>
		</view>
		<el-divider border-style="dashed" />
		<view class="priceInfo_content">
			<view class="priceInfo_content_item">
				<view class="content_item_name">单价</view>
				<view class="content_item_value">￥11/KG</view>
			</view>
			<view class="priceInfo_content_item">
				<view class="content_item_name">实重</view>
				<view class="content_item_value">23KG</view>
			</view>
			<view class="priceInfo_content_item">
				<view class="content_item_name">物流费</view>
				<view class="content_item_value">￥1100</view>
			</view>
			<view class="priceInfo_content_item">
				<view class="content_item_name">清关费</view>
				<view class="content_item_value">￥1100</view>
			</view>
			<view class="priceInfo_content_item">
				<view class="content_item_name">
					<image src="../../../../static/temp/discount.png" style="height: 15px;width: 15px;"></image>
					折扣
				</view>
				<view class="content_item_value">-￥1100</view>
			</view>
			<view class="priceInfo_content_item">
				<view class="content_item_name" style="color:#d5381c;font-weight: 600;">合计</view>
				<view class="content_item_value" style="color:#d5381c;">￥1100</view>
			</view>
		</view>
		
		
	</view>
</template>

<script setup>

</script>

<style lang="scss">
	.priceInfo_container{
		background-color: #fff;
		margin-top: 10px;
		border-radius: 10px;
		width: 92%;
		margin-left: 4%;
		padding-bottom: 15px;
		.priceInfo_title{
			padding-left: 7px;
			margin-top: 10px;
			font-weight: 600;
			font-size: 15px;
			border-left: 3px solid $theme-color;
		}
		.priceInfo_content{
			margin-top: 10px;
			font-size: 13px;
			padding:0 10px;
			.priceInfo_content_item{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-bottom: 10px;
				border-bottom: 1px solid #e7e7e7;
				padding-bottom: 10px;
				.content_item_value{
					font-weight: 600;
				}
			}
		}
		
	}
	.el-divider--horizontal {
		margin:10px 0;
	}
</style>