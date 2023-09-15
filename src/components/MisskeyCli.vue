<template>
  <main>
    <h1>Misskey!!</h1>
    <div>
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

    <button @click="MisTL('')">HTL</button>
    <button @click="MisTL('LTL')">LTL</button>
    <button @click="MisTL('STL')">STL</button>
    <button @click="MisTL('GTL')">GTL</button>
    <div v-for="obj in tl" id="notes">
      <p><img :src="obj.user.avatarUrl" class="u_icon">{{obj.user.name}} (@{{obj.user.username}})</p>
      <p>{{obj.text}}</p>
    </div>
  </main>
</template>

<script>
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
  data(){
    return{
      USER_DATA: UserData.USER_DATA,
      account_num: 0,
      txt: '',
      cw_txt: '',
      cw_flag: false,
      visibility: "public",
      my_account: null,

      tl: [],
    }
  },

  mounted(){
    this.MisMyData()
  },

  methods:{
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

    MisTL(mode){
      let ep = 'notes/'

      switch(mode){
        case 'LTL':
          ep += 'local-'
          break

        case 'STL':
          ep += 'hybrid-'
          break

        case 'GTL':
          ep += 'global-'
          break
      }

      ep += 'timeline'

      this.MisReq(ep, {}).then(res => this.tl = res)
    },
  },
}
</script>

<style scoped>
.u_icon{
  width: 80px;
  height: 80px;
}
</style>

