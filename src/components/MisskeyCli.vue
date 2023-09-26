<template>
  <main>
    <h1>Misskey!!</h1>
    <div>
      <v-select
        label="アカウント"
        :items="USER_DATA"
        item-title="host"
        item-value="id"
        v-model="account_num"
      />
      <v-btn @click="MisAccountChange">アカウントきりかえ</v-btn>

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
        <label for="cbcw">cw</label><input type="checkbox" id="cbcw" v-model="cw_flag" />
      <div style="display: flex; flex-direction: column">
        <v-text-field label="cw" v-if="cw_flag" type="text" v-model="cw_txt" />
        <v-textarea label="note" v-model="txt"></v-textarea>
      </div>
      <select v-model="visibility">
        <option value="public">Public</option>
        <option value="home">Home</option>
      </select>
      <v-btn @click="MisPost">note</v-btn>
      </div>
    </div>

    <v-btn @click="MisTL('')">HTL</v-btn>
    <v-btn @click="MisTL('LTL')">LTL</v-btn>
    <v-btn @click="MisTL('STL')">STL</v-btn>
    <v-btn @click="MisTL('GTL')">GTL</v-btn>
    <div v-for="obj in tl" id="notes">
      <p><img :src="obj.user.avatarUrl" class="u_icon">{{obj.user.name}} (@{{obj.user.username}})</p>
      <p>{{obj.text}}</p>
    </div>
    <v-btn @click="Test">test</v-btn>
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
      USER_IDS: [],
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
    for(let i = 0; i < this.USER_DATA.length; i++){
      this.USER_DATA[i]['id'] = i
    }
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
//      this.account_num = e.target.value
      this.MisMyData()
      this.tl = []
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

        this.txt = ''
        this.cw_txt = ''
        this.cw_flag = false
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

    Test(e){
      console.log(e)
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

