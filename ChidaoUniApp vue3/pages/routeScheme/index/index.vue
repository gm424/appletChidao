<template>
	<view class="route-container">
		<schemeHeader></schemeHeader>
		<routeList></routeList>
	</view>
</template>

<script setup>
// import schemeHeader from '../components/schemeHeader.vue'
import schemeHeader from '@/components/search-route.vue'
import routeList from '../components/routeList/index.vue'
import {onLoad} from '@dcloudio/uni-app'
import { reactive,onMounted} from "vue";
	let state=reactive({
		srcCountry:'',
		dstCountry:''
	})
	onLoad(() => {
		console.log('hello')
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
		console.log('state',state)
	});

</script>

<style>
	.route-container{
		min-height: 100vh;
		max-height: 800px;
		background-color: #f3f3f3;
	}
</style>