<template>
	<view>
		<view class="tab">
			<view class="tab-bar">
				<view class="tab-item" :class="{ active: activeIndex === index }" v-for="(item, index) in tabs" :key="index" @click="handleTabClick(index)">
					{{ item }}
				</view>
			</view>
			<view class="tab-content">
				<slot :name="tabsContext[activeIndex]"></slot>
				<view class="search-button" @click="navToDetailPage()">
					<button class="search-button-item">查 价</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const activeIndex = ref(0);

const handleTabClick = (index) => {
	activeIndex.value = index;
	console.log('activeIndex',activeIndex.value)
};
const tabsContext=[
	"delivery",
	"airfreight",
	"directline",
	"moreService"
]
const props = defineProps({
 tabs: {
 	type: Array,
 	required: true
 }
});
const navToDetailPage=()=> {
	uni.navigateTo({
		url: `/pages/routeScheme/index/index`,
		success: (res) => {
			// 在跳转成功的回调中，传递要回显的数据
			res.eventChannel.emit('data', { name: 'John', age: 25 });
		}
	})
}
</script>

<style>
.tab {
	height: 100%;
	width: 100%;
}

.tab-bar {
	width: 100%;
	display: flex;
	background-color: rgba(255, 255, 255, 0.8);
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}

.tab-item {
	flex: 1;
	text-align: center;
	padding: 10px;
	cursor: pointer;
	font-size: 15px;
}

.tab-item.active {
	font-weight: 600;
	background-color: #fff;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	position: relative;
}
.tab-item.active::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 40%;
	height: 2px;
	background-color: #f59a23;
}
.tab-content {
	/* height: 150px; */
	padding: 10px;
	padding-bottom: 20px;
	overflow-y: auto;
	background-color: #fff;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	box-shadow: 2px 2px 5px rgba(120, 120, 120, 0.3);
}
.search-button{
	margin-top: 10px;
}
.search-button-item{
	margin-top: 10px;
	color:#fff;
	background-color:#f59a23;
	width: 80%;
	height: 40px;
	font-size: 15px;
	border: none;
	border-radius: 25px;
	box-shadow: 0 2px 8px #f59a23;

}
uni-button:after {
	border: none;
}
</style>
