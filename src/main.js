import './assets/main.css'

import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import MainCom from './components/Main.vue'
import MisskeyCli from './components/MisskeyCli.vue'
import{createRouter, createWebHashHistory} from "vue-router"

// 1. Define route components.
// These can be imported from other files
const Main = MainCom
const Misskey = MisskeyCli
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const Neko = {template: '<header> <router-view /> <p><router-link to="/">Home</router-link></p> <p><router-link to="/about">About</router-link></p> <p><router-link to="/">nekokoneko</router-link></p> <div id="counterbox"> <p>{{counter}}</p> <div class="btnbox"> <button v-for="item in arr" @click="incrementX(item)"> {{item}} </button> </div> <div class="btnbox"> <button @click="increment">+1</button> <button @click="increment3">+3</button> <button @click="incrementX(10)">+10</button> <button @click="incrementX(255)">+255</button> </div> <div class="btnbox"> <button @click="decrementX(1)">-1</button> <button @click="decrementX(3)">-3</button> <button @click="decrementX(10)">-10</button> <button @click="decrementX(255)">-255</button> </div> <div class="btnbox"> <button @click="reset">reset</button> </div> </div> <img v-if="isShow" alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> <button @click="toggleShow()">toggle</button> <div class="wrapper"> <HelloWorld msg="You did it!" /> </div> </header>'}


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/main', component: Main},
  { path: '/misskey', component: MisskeyCli},
  { path: '/main/home', component: Home },
  { path: '/main/about', component: About },
  { path: '/main/neko', component: Neko },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!
