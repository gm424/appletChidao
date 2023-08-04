
import App from './App'
import { setupPinia } from './store';
import Json from './Json'
import ElementPlus from 'element-plus'
import {createSSRApp} from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' 
import 'element-plus/dist/index.css' 
const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

export function createApp() {
	const app = createSSRApp(App)
	setupPinia(app)
	for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	  app.component(key, component)
	}
	app.use(ElementPlus)
	// app.use(store)
	app.config.globalProperties.$api = {msg, json, prePage};
	return {
		app
	}
} 




