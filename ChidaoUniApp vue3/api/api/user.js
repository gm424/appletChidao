import { getAction, deleteAction, putAction, postAction, httpAction } from '@/api/manage'
import Vue from 'vue'
//用户管理
const queryUserRole = (params)=>getAction("/sys/user/queryUserRole",params);