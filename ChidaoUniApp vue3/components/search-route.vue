<template>
	<view class="containHeader">
		<view class="route-header">
			<view class="route-item" @click="navToSrcCityPage('src')">
				<view class="route-item-cn"><el-icon v-if="data.state!==1" style="color: blue;"><CaretBottom /></el-icon>{{mainStore.srcCountry}}</view>
				<view class="route-item-en">shenzhen</view>
			</view>
			
			<view class="route-item">
				<image src="/static/temp/delivery.png" class="route-img" v-if="props.type=='delivery'" ></image>
				<image src="/static/temp/plane.png" class="route-img" v-if="props.type=='airfreight'"></image>
				<image src="/static/temp/sea.png" class="route-img" v-if="props.type=='directline'"></image>
			</view>
			<view class="route-item" @click="navToDstCityPage('dst')">
				<view class="route-item-cn"><el-icon v-if="data.state!==1" style="color: blue;"><CaretBottom /></el-icon>{{mainStore.dstCountry}}</view>
				<view class="route-item-en">United States</view>
			</view>
			
		</view>
		
	</view>
</template>

<script setup>
	import {onMounted, reactive} from 'vue'
	import { storeToRefs } from 'pinia'
	import { usePositionStore } from '@/store/position.js'
	import {onShow} from '@dcloudio/uni-app';
	const pages = getCurrentPages();
	const currentPage = pages[pages.length - 1].route;
	const {srcCountry,dstCountry} = storeToRefs(usePositionStore)
	const mainStore = usePositionStore()
	const data=reactive({
		state:1,
	})
	const props = defineProps({
		type: {
		  type: String,
		  required: true
		},
		srcCountry: {
		  type: String,
		  required: true
		},
		dstCountry: {
		  type: String,
		  required: true
		},
	});
	onShow(()=>{
		if (currentPage === 'pages/home/index/index') {
			data.state=1
		  console.log('我是主页',data.state)
		} else if (currentPage === 'pages/quotation/index/index') {
			data.state=2
		  console.log('我是查询页',data.state)
		}else if(currentPage === 'pages/routeScheme/index/index'){
			data.state=3
			console.log('我是查询结果页',data.state)
		}
	})
	const navToSrcCityPage=(item)=> {
		uni.$emit('from',item)
		uni.navigateTo({
			url: `/pages/home/citylist/citylist?from=${item}`
		})
	}
	const navToDstCityPage=(item)=> {
		uni.$emit('from',item)
		uni.navigateTo({
			url: `/pages/home/citylist/citylist?from=${item}`
		})
	}
	console.log('props srcCountry',props.srcCountry)
</script>

<style lang="scss">
.containHeader{
	flex-direction: column;
	display: flex;
}
.route-header{
	flex-direction: row;
	display: flex;
	margin-top: 5px;
	background-color: #fff;
	padding-top: 22px;
}
.route-item{
	flex:1;
	text-align: center;
	border-bottom: 1px solid #d5d5d5;
	padding-bottom: 15px;
}
.route-item-cn{
	font-weight: 600;
}
.route-item-en{
	font-size: 10px;
	color: #cccccc;
}
.route-img{
	height: 30px;
	width: 30px;;
}

</style>