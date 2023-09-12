<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/MyComponent.vue'
import C230912 from './components/Component230912.vue'
import SharedCounter from './components/SharedCounter.vue'
import * as Misskey from 'misskey-js'
import UserData from '/src/ud'

// /src/ud.jsにはUSER_DATAが入っている。
// USER_DATA = [
//   {
//     host: サーバーのホスト名,
//     token: アクセストークン
//   },
//
//   ...アカウントの数だけ繰り返し
//
// ]

export default{
  components:{
    HelloWorld,
    MyComponent,
    C230912,
    SharedCounter,
  },

  data(){
    return{
      hoge: "nekoneko",
      isShow: true,
      arr: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610],
      car: {
        name: "kuruma",
        speed: "hayai",
        price: "takai",
      },
      counter: 0,
      dog: undefined,

      USER_DATA: UserData.USER_DATA,
      account_num: 0,
      txt: '',
      cw_txt: '',
      cw_flag: false,
      visibility: "public",
      my_account: null,

      sc_count: 0,
    }
  },

  mounted(){
    this.getDog()
    this.MisMyData()
  },

  methods:{
    toggleShow(){
      this.isShow = !this.isShow
      console.log(this.isShow)
    },

    increment(){
      this.counter++
    },
    increment3(){
      this.counter += 3
    },
    incrementX(add){
      this.counter += add
    },
    decrementX(rm){
      this.counter -= rm
    }, reset(){
      this.counter = 0
    },

    async getDog(){
      this.dog = await(await fetch("https://dog.ceo/api/breeds/image/random ")).json()
    },

    async MisReq(ep, jd){
      const cli = new Misskey.api.APIClient({
        origin: 'https://' + this.USER_DATA[this.account_num].host,
        credential: this.USER_DATA[this.account_num].token,
      });

      const res = await cli.request(ep, jd)
      console.log(res)

      return res
    },

    MisMyData(){
      this.MisReq('i', {}).then(res => {
        this.my_account = res
      })
      console.log(this.my_account)
    },

    MisAccountChange(e){
      this.account_num = e.target.value
      this.MisMyData()
    },

    MisPost(){
      const post_data = {
        text: this.txt,
        visibility: this.visibility
      }
      if(this.cw_flag){
        post_data['cw'] = this.cw_txt
      }

      if(this.txt){
        this.MisReq('notes/create', post_data)
      }

      else{
        alert('入力欄に何かいれてね！')
      }
    },

    ScIncrement(){
      this.sc_count++
    },
  },
}
</script>

<template>
  <C230912 />
  <C230912 />
  <C230912 />

  <div v-for="i in [0,0,0]">
    <SharedCounter :num="sc_count" />
    <button @click="ScIncrement">SharedCounter++</button>
  </div>

  <header>
    <div>
      <p>Misskey!!</p>
      <select @change="MisAccountChange">
        <option v-for="(item, index) in USER_DATA" :value="index">{{item.host}}</option>
      </select>
      <div v-if="my_account">
        <p>おいらのアカウントだよ！</p><br>
        <p>{{my_account.name}}</p>
        <p><a
          :href="'https://' + USER_DATA[account_num].host + '/@' + my_account.username"
          target="_blank"
          rel="noopener noreferrer"
        >@{{my_account.username}}@{{USER_DATA[account_num].host}}</a></p>
        <img :src="my_account.avatarUrl" alt="ねこ">
      </div>

      <div>
        <label for="cbcw">cw</label><input type="checkbox" id="cbcw" @change="(e) => cw_flag = e.target.checked" />
      <div style="display: flex; flex-direction: column">
        <input v-if="cw_flag" type="text" @change="(e) => cw_txt = e.target.value" />
        <textarea @change="(e) => txt = e.target.value"></textarea>
      </div>
      <select @change="(e) => visibility = e.target.value">
        <option value="public">Public</option>
        <option value="home">Home</option>
      </select>
      <button @click="MisPost">note</button>
      </div>
    </div>

    <button @click="getDog">inu</button>
    <div><img v-if="dog" :src="dog.message" /></div>
    <router-view />
    <p><router-link to="/">Home</router-link></p>
    <p><router-link to="/about">About</router-link></p>
    <p><router-link to="/neko">nekokoneko</router-link></p>
    <div id="counterbox">
      <p>{{counter}}</p>
      <div class="btnbox">
        <button v-for="item in arr" @click="incrementX(item)">
          {{item}}
        </button>
      </div>
      <div class="btnbox">
        <button @click="increment">+1</button>
        <button @click="increment3">+3</button>
        <button @click="incrementX(10)">+10</button>
        <button @click="incrementX(255)">+255</button>
      </div>
      <div class="btnbox">
        <button @click="decrementX(1)">-1</button>
        <button @click="decrementX(3)">-3</button>
        <button @click="decrementX(10)">-10</button>
        <button @click="decrementX(255)">-255</button>
      </div>
      <div class="btnbox">
        <button @click="reset">reset</button>
      </div>
    </div>

    <img v-if="isShow" alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <button @click="toggleShow()">toggle</button>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <MyComponent msg="nya" title="ふつうねこ" />
    <MyComponent msg="gorogoro" title="あまえねこ" />
    <MyComponent msg="shaaaa!!" title="おこねこ" />
    {{hoge}}
    <button @click="toggleShow">toggle</button>
    <ul>
      <li v-for="item in arr">
        <MyComponent :msg="hoge" title="ねこれんだ！！" />
        {{item}}
      </li>
      <li>{{car.name}}</li>
      <li>{{car.speed}}</li>
      <li>{{car.price}}</li>
    </ul>
    <p>{{car}}</p>
    <HelloWorld v-for="item in arr" msg="You did it!" />
    <HelloWorld v-for="item in arr" :msg="item" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

#counterbox{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 600px;
}
#counterbox p{
  text-align: center;
  font-size: 2em;
  font-weight: bold;
}
.btnbox{
  display: flex;
  width: 100%;
  height: 36px;
}
.btnbox button{
  width: 100%;
}
</style>
