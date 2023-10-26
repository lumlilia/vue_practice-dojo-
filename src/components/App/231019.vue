<template>
<main>
  <p>mode : {{String(mode)}}</p>
  <p>input_num : {{String(input_num)}}</p>
  <p>temp : {{String(temp)}}</p>
  <p>grand_total : {{String(grand_total)}}</p>
  <p>digit : {{num_len}}</p>
  <p>point_pos : {{String(point_pos)}}</p>
  <p>error : {{String(error)}}</p>

  <div>
    <div id="num_box">
      <p id="num_view" :style="{color: (error ? 'red' : 'black')}">{{((point_pos > 1) ? num.toFixed(point_pos - 1) : String(num))}}</p>
    </div>

    <div id="btn_box">
      <button style="grid-column: 3; grid-row: 1;">％</button>
      <button @click="ClearNum" style="grid-column: 1; grid-row: 1;">AC</button>
      <button @click="GrandTotal" style="grid-column: 2; grid-row: 1;">GT</button>

      <button
        v-for="i in 10"
        @click="NumBtn(i - 1)"
        :style="{
          gridColumn: ((i == 1) ? 2 : ((i - 2) % 3) + 2),
          gridRow: ((i == 1) ? 5 : Math.floor((10 - i) / 3) + 2)
        }"
      >{{String(i - 1)}}</button>

      <button style="grid-column: 1; grid-row: 2;">MR/C</button>
      <button style="grid-column: 1; grid-row: 3;">M-</button>
      <button style="grid-column: 1; grid-row: 4;">M+</button>

      <button @click="Calculation(4)" style="grid-column: 5; grid-row: 1;">÷</button>
      <button @click="Calculation(3)" style="grid-column: 5; grid-row: 2;">×</button>
      <button @click="Calculation(2)" style="grid-column: 5; grid-row: 3;">ー</button>
      <button @click="Calculation(1)" style="grid-column: 5; grid-row: 4 / 6;">＋</button>

      <button @click="PointOn()" style="grid-column: 3; grid-row: 5;">.</button>
      <button @click="Calculation(0)" style="grid-column: 4; grid-row: 5;">＝</button>
    </div>
  </div>

  <br>
  <hr>
  <p>確認済みの問題点</p>
  <ul>
    <li>MR、MC、M-、M+、％がハリボテ</li>
    <li>小数点周りの挙動が不安定</li>
  </ul>
</main>
</template>

<script>
export default{
  data(){
    return{
      num: 0,
      num_len: 1,
      temp: 0,
      grand_total: 0,
      input_num: 0,
      mode: 0,
      point_pos: 0,
      flag: false,
      error: false,
    }
  },

  methods:{
    NumBtn(n){
      if(this.error){
        return
      }

      if(this.flag){
        this.flag = false
        this.point_pos = 0

        if(this.mode & 8){
          this.temp = 0
          this.mode = 0
          this.input_num = 0
        }

        else{
          this.temp = this.num
        }

        this.num = 0
        this.num_len = 1
      }

      if(this.num_len == 10){
        return
      }

      if(this.point_pos){
        this.num = this.num + (n * (0.1 ** this.point_pos))
        this.num_len++
        this.point_pos++
      }

      else{
        this.num = (this.num * 10) + n
        this.num_len = String(this.num).length
      }
    },

    Calculation(mode){
      if(this.error){
        return
      }

      if(!this.flag){
        this.input_num = this.num
        if(this.mode){
          this.num = this.CalcSwitch(this.mode, this.temp, this.num)
        }
      }

      else if(this.mode & 8 && !mode){
        this.num = this.CalcSwitch(this.mode & 7, this.temp, this.input_num)
      }

      this.num_len = String(this.num).length - ((this.point_pos > 1) ? 1 : 0)

      if(this.num_len > 10){
        const floor_len = String(Math.floor(this.num)).length
        if(floor_len > 10){
          this.error = true
        }

        else{
          this.point_pos = 10 - floor_len
          this.num_len = 10
        }
      }

      this.temp = this.num

      if(mode){
        this.mode = mode
      }

      else{
        this.mode = (this.mode & 7) ^ 8
        this.grand_total += this.temp
      }

      this.flag = true
    },

    CalcSwitch(mode, n1, n2){
      switch(mode){
        case 1:
          return n1 + n2
        case 2:
          return n1 - n2
        case 3:
          return n1 * n2
        case 4:
          return n1 / n2

        default:
          return 0
      }
    },
      

    ClearNum(){
      this.flag = false
      this.num = 0
      this.temp = 0
      this.grand_total = 0
      this.input_num = 0
      this.mode = 0
      this.point_pos = 0
      this.error = false
    },

    GrandTotal(){
      if(this.error){
        return
      }

      this.num = this.grand_total
      this.point_pos = 0
      this.flag = true
    },

    PointOn(){
      if(this.error){
        return
      }

      if(!this.point_pos){
        this.point_pos++
      }
    },
  },
}
</script>

<style scoped>
main{
  width: 250px;
}

button{
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 42px;
  min-height: 30px;
  padding: 0;
  color: black;
  background-color: #d0d0d0;
  border: 1px solid black;
}
#num_box{
  text-align: right;
  border: 1px solid black;
}
#num_view{
  font-family: monospace;
  font-size: 2em;
}
#btn_box{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 5px;
  width: fit-content;
  margin: auto;
}
</style>
