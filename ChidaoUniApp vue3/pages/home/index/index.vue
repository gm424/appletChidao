<template>
	<view class="container">
		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP -->
		<view class="mp-search-box">
			<input class="ser-input" type="text" value="输入关键字搜索" disabled />
		</view>
		<!-- #endif -->

		<!-- 头部轮播 -->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing"></view>
			<!-- 背景色区域 -->
			<!-- <view class="titleNview-background" :style="{backgroundColor:state.titleNViewBackground}"></view> -->
			<swiper class="carousel" circular autoplay @change="swiperChange">
				<swiper-item v-for="(item, index) in state.carouselList" :key="index" class="carousel-item"
					@click="navToDetailPage({title: '轮播广告'})">
					<image :src="item.src" />
					<view class="image-overlay"></view>
				</swiper-item>
			</swiper>
			<!-- 查询路线区域 -->
			<SearchPrice class="swiper-dots" :tabs="['国际快递', '国际空运', '国际专线','更多服务']" >
				<template #moreService>
					<!-- 更多服务 -->
					更多服务
				</template>
				<template #delivery>
					<!-- 国际快递-->
					<SearchRoute type="delivery"></SearchRoute>
				</template>
				<template #airfreight>
					<!-- 国际空运 -->
					<SearchRoute type="airfreight"></SearchRoute>
				</template>
				<template #directline>
					<!-- 国际专线 -->
					<SearchRoute type="directline"></SearchRoute>
				</template>
				
			</SearchPrice>
		</view>
		
		<!-- 分类 -->
		<delivery-tools></delivery-tools>
		<view class="ad-1">
			<image src="/static/temp/question.webp" mode="scaleToFill"></image>
		</view>
		<!-- 热门路线 -->
		<PopularRoute></PopularRoute>

	</view>
</template>

<script setup>
	import SearchPrice from './components/home-search-price.vue';
	import SearchRoute from '@/components/search-route.vue'
	import PopularRoute from './components/popularRoute.vue'
	import deliveryTools from './components/deliveryTools.vue'
	import {
		reactive,
		getCurrentInstance
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app';
	const {
		appContext
	} = getCurrentInstance();
	const $api = appContext.config.globalProperties.$api;
	const state = reactive({
		titleNViewBackground: '',
		goodsList: [],
		swiperCurrent: 0,
		swiperLength: 0,
		carouselList: [],
		srcCountry:'深圳市',
		dstCountry:'美国'
	});
	onLoad((options) => {
		loadData();
		console.log('hello',options)
		uni.$on('srcCountry', (data) => {
			console.log('srcCountry',data); 
			state.srcCountry=data;
			console.log('state data',state.srcCountry)
		})
		uni.$on('dstCountry', (data) => {
			console.log('dstCountry',data); 
			state.dstCountry=data;
			console.log('state data',state.dstCountry)
		})
	});
	const loadData = () => {
		$api.json('carouselList').then(carouselList => {
			state.titleNViewBackground = carouselList[0].background;
			state.swiperLength = carouselList.length;
			state.carouselList = carouselList;
		});
		// 使用 $api 中的 json 方法
		$api.json('goodsList').then(goodsList => {
			state.goodsList = goodsList || [];
		});
	};
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
		uni.navigateTo({
			url: `/pages/product/product?id=${id}`
		})
	};

	//点击导航栏 buttons 时触发
	const onNavigationBarButtonTap = (e) => {
		const index = e.index;
		if (index === 0) {
			$api.msg('点击了扫描');
		} else if (index === 1) {
			// #ifdef APP-PLUS
			const pages = getCurrentPages();
			const page = pages[pages.length - 1];
			const currentWebview = page.$getAppWebview();
			currentWebview.hideTitleNViewButtonRedDot({
				index
			});
			// #endif
			uni.navigateTo({
				url: '/pages/notice/notice'
			})
		}
	}
</script>

<style lang="scss">
	/* #ifdef MP */
	.container{
		display: flex;
		flex-direction: column;
	}
	.mp-search-box{
		position:absolute;
		left: 0;
		top: 30upx;
		z-index: 9999;
		width: 100%;
		padding: 0 80upx;
		.ser-input{
			flex:1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color:$font-color-base;
			border-radius: 20px;
			background: rgba(255,255,255,.6);
		}
	}
	page{
		.cate-section{
		}
		.carousel-section{
			padding: 0;
			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}
			.carousel{
				.carousel-item{
					padding: 0;
				}
			}
			.swiper-dots{
				left:45upx;
				bottom:40upx;
			}
		}
	}
	/* #endif */
	
	
	page {
		background: #f9f9f9;
	}
	.m-t{
		margin-top: 16upx;
	}
	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 2px;
		height:310px;
		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 326upx;
			transition: .4s;
		}
	}
	.carousel {
		width: 100%;
		height: 230px;
		position: absolute;
		top: 0;
		left: 0;

		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 0upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
		.carousel-item::before {
		  content: "";
		  position: absolute;
		  top: 0;
		  left: 0;
		  right: 0;
		  bottom: 0;
		  background-size: cover;
		  filter: blur(10px); /* 虚化效果的强度，可以根据需要调整 */
		  z-index: -1;
		}
	}
	.swiper-dots {
		display: flex;
		position: absolute;
		left: 5%;
		// bottom: 15upx;
		top:100px;
		width: 90%;
		height: 306upx;
		border-radius: 20upx;

		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}
	
	.ad-1{
		width: 90%;
		height: 180upx;
		margin-left: 5%;
		margin-top: 10px;
		image{
			width:100%;
			height: 90%; 
			border-radius: 10px;
		}
	}
	
	

</style>