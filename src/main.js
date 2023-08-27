import './assets/main.css'

import {createApp} from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App01 from '/src/components/App/230718.vue'
import App02 from '/src/components/App/230725.vue'
import App03 from '/src/components/App/230801.vue'

const Home = {template:
  '<h1>作ってみたもの</h1>'
+ '<h2><router-link to="/app01">2023/07/18の応用</router-link></h2>'
+ '<p>変数・v-if・v-for・オブジェクト</p>'
+ '<br>'
+ '<h2><router-link to="/app02">2023/07/25の応用</router-link></h2>'
+ '<p>メソッド</p>'
+ '<br>'
+ '<h2><router-link to="/app03">2023/08/01の応用</router-link></h2>'
+ '<p>コンポーネント・props</p>'
+ '<br>'
+ '<h2><router-link to="/">2023/08/22の応用(このページ)</router-link></h2>'
+ '<p>vue-router</p>'
}

const routes = [
  {path: '/', component: Home},
  {path: '/app01', component: App01},
  {path: '/app02', component: App02},
  {path: '/app03', component: App03},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')
