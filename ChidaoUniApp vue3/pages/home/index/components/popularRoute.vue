<template>
	<view class="hot-contain">
		<view class="hot-title">
			<image src="/static/temp/hot.png" style="width: 15px; height: 15px;margin-top: 2px;margin-right: 3px;"></image>
			<text>今日热门</text>
		</view>
	</view>
		<view class="guess-section">
			<view v-for="(item, index) in state.goodsList" :key="index" class="guess-item" @click="navToDetailPage(item)">
				<view class="route-demo">
					<view>
						<el-icon style="color: #cecece;font-size: 14px;margin-top: 3px;">
							<LocationFilled />
						</el-icon>
						<text style="color: #737373; margin-left: 8px; font-size: 12px;margin-top: -2px;">{{ item.srcCountry }}</text>
					</view>
					<view style="border-left: 1px dotted #cecece; height: 13px; margin-left: 8px; margin:3px 8px"></view>
					<view>
						<el-icon style="color: #cecece;font-size: 14px;margin-top: 3px;">
							<LocationFilled />
						</el-icon>
						<text style="color: #737373; margin-left: 8px; font-size: 12px;margin-bottom: 2px;">{{ item.dstCountry }}</text>
					</view>
				</view>
				<view class="route-price">
					<image src="/static/time.png" style="width: 15px; height: 15px"></image>
					<text class="time-text">7天</text>
					<text class="price-text">￥73.0元</text>
				</view>
				<view
					style="
						position: absolute;
						background-color: #f8a216;
						right: 0;
						padding-right: 5px;
						padding-left: 5px;
						border-top-right-radius: 10px;
						border-bottom-left-radius: 10px;
					"
				>
					<text style="font-size: 5px; color: #fff">HOT</text>
				</view>
			</view>
		</view>
	
</template>

<script setup>
import { reactive, getCurrentInstance } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
const { appContext } = getCurrentInstance();
const $api = appContext.config.globalProperties.$api;
const state = reactive({
	titleNViewBackground: '',
	goodsList: [],
	swiperCurrent: 0,
	swiperLength: 0,
	carouselList: []
});
const loadData = () => {
	$api.json('carouselList').then((carouselList) => {
		state.titleNViewBackground = carouselList[0].background;
		state.swiperLength = carouselList.length;
		state.carouselList = carouselList;
	});
	// 使用 $api 中的 json 方法
	$api.json('goodsList').then((goodsList) => {
		state.goodsList = goodsList || [];
	});
};
onLoad((options) => {
	loadData();
	console.log('hello');
});
/**
 * 请求静态数据只是为了代码不那么乱
 * 分次请求未作整合
 */

//轮播图切换修改背景色
const swiperChange = (e) => {
	const index = e.detail.current;
	state.swiperCurrent = index;
	state.titleNViewBackground = state.carouselList[index].background;
};
//详情页
const navToDetailPage = (item) => {
	//测试数据没有写id，用title代替
	let id = item.title;
	uni.$emit('srcCountry', item.srcCountry);
	uni.$emit('dstCountry', item.dstCountry);
	uni.navigateTo({
		url: `/pages/routeScheme/index/index`
	});
};
</script>

<style lang="scss">
.hot-contain{
	background-color: #f9f9f9;
	margin-top: 10px;
	.hot-title{
		font-size: 14px;
		flex-direction: row;
		display:flex;
		margin-left: 40%;
	}
}
.guess-section {
	display: flex;
	flex-wrap: wrap;
	padding: 0 35upx;
	margin-bottom: 20px;
	border-radius: 15px;
	padding-bottom: 10px;
    background-color: #f9f9f9;
	.guess-item {
		display: flex;
		flex-direction: column;
		width: 48%;
		margin-top: 10px;
		// height: 210upx;
		border-radius: 15px;
		background-color: #fff;
		box-shadow: 4px 2px 4px rgba(245, 154, 35, 0.1);
		position: relative;
		&:nth-child(2n + 1) {
			margin-right: 4%;
		}
	}
	.route-demo {
		display: flex;
		flex-direction: column;
		padding-left: 15px;
		margin-top: 10px;
		padding-bottom: 10px;
		border-bottom: 1px dashed #d4d4d4;
	}
	.route-price {
		padding-left: 15px;
		padding-top: 8px;

		.time-text {
			font-size: 10px;
			margin-left: 3px;
			color: #9c9c9c;
		}
		.price-text {
			color: #d9481c;
			flex: right;
			margin-left: 40px;
			font-weight: 600;
			font-size: 13px;
		}
	}
	.image-wrapper {
		width: 100%;
		height: 230upx;
		border-radius: 15px;
		overflow: hidden;
		background-color: #fff;
		padding-top: 12px;
		border-bottom: 1px solid #d6d6d6;
	}
	.title {
		font-size: $font-lg;
		color: $font-color-dark;
		line-height: 80upx;
	}
	.price {
		font-size: $font-lg;
		color: $uni-color-primary;
		line-height: 1;
	}
}
.custom-icon {
	margin-top: 2px;
}
</style>