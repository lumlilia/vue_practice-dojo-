<template>
  <main>
    <div id="img_box">
      <div v-if="mode == 1" id="title_box">
        <h1>犬種当てクイズ！</h1>
        <button @click="ViewDog">はじめる</button>
      </div>

      <div v-if="mode == 2">
        <h2>画像読み込み中</h2>
      </div>

      <div v-if="mode == 3" id="result_box">
        <div id="result_in_box">
          <h2>{{result}}</h2>
          <p>{{dog_ja[dog_num]}}</p>
          <button @click="ViewDog">つづける</button>
        </div>
      </div>

      <img v-if="dog_ok" :src="dog_json.message" id="dog_img">
      <div v-if="dog_err" id="err_box">
        <p>エラーです…</p>
        <button @click="GetDog">再読み込み</button>
      </div>
    </div>

    <div v-if="dog_ok" id="btn_box">
      <button v-for="num in dog_btns" @click="DogAnswer(num)">{{dog_ja[num]}}</button>
    </div>
  </main>

  <footer>
    <p><a href="https://dog.ceo/dog-api/" target="_blank" rel="noopener noreferrer">Dog API</a>様の画像データを使用しています。</p>
  </footer>
</template>

<script>
import inu from '/src/assets/dog_list'
export default{
  data(){
    return{
      mode: 1,
      dog_ok: false,
      dog_err: false,
      dog_json: null,
      dog_num: 200,
      dog_btns: [
        200, 200, 200, 200
      ],
      dog_ja: inu.DOG_LIST.ja,
      result: null,
    }
  },

  methods:{
    ViewDog(){
      this.mode = 2
      this.dog_ok = false
      this.result = null
      this.dog_btns = [200, 200, 200, 200]
      this.dog_num = this.DogRan()

      this.dog_btns[0] = this.dog_num

      for(let i = 1; i < 4; i++){
        while(this.dog_btns[i] == 200){
          const n = this.DogRan()
          if(!this.dog_btns.includes(n)){
            this.dog_btns[i] = n
          }
        }
      }

      let arr = []

      while(this.dog_btns.length){
        const n = Math.floor(Math.random() * this.dog_btns.length)
        arr.push(this.dog_btns[n])
        this.dog_btns.splice(n, 1)
      }

      this.dog_btns = arr

      this.GetDog()
    },

    async GetDog(){
      this.dog_err = false
      let name = inu.DOG_LIST.en[this.dog_num]
      if(name.includes(' ')){
        const name_sp = name.split(' ')
        name = name_sp[1] + '/' + name_sp[0]
      }

      this.dog_json = await(await fetch('https://dog.ceo/api/breed/' + name + '/images/random')).json()

      await fetch(this.dog_json.message).then(res => {
        if(res.ok){
          this.dog_ok = true
        }
      }).catch(err => {
        console.log(err)
        this.dog_err = true
      })

      this.mode = 0
    },

    DogRan(){
      return Math.floor(Math.random() * inu.DOG_LIST.en.length)
    },

    DogAnswer(n){
      this.result = ((this.dog_num == n) ? '正解！' : 'はずれ')
      this.mode = 3
    },
  },
}
</script>

<style scoped>
button{
  color: black;
  font-size: 16px;
}

#img_box,
#title_box,
#result_in_box,
#err_box{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#img_box{
  position: relative;
  width: 85vw;
  height: 300px;
}

#dog_img{
  max-width: 100%;
  max-height: 100%;
}

#err_box{
  margin: auto;
}

#result_box{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
}

#result_in_box{
  position: absolute;
  top: 30%;
  width: 100%;
  transform: translateY(-50%);
}
#result_in_box button{
  margin-top: 10px;
}

#btn_box{
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 20px;
}
</style>
