<template>
<p>mode : {{String(mode)}}</p>
<p>{{((mode & 7) ? modes[mode & 7] : '')}}</p>
<p>input_num : {{String(input_num)}}</p>
<p>total : {{String(total)}}</p>
<p>grand_total : {{String(grand_total)}}</p>

<v-app>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card variant="outlined" style="text-align: right">
          <v-text class="text-h5">{{String(num)}}</v-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3" sm="1">
        <v-btn variant="outlined" @click="ClearNum">AC</v-btn>
      </v-col>
      <v-col cols="3" sm="1">
        <v-btn variant="outlined" @click="GrandTotal">GT</v-btn>
      </v-col>
      <v-col cols="3" sm="1">
        <v-btn variant="outlined">%</v-btn>
      </v-col>
      <v-col cols="3" sm="1">
        <v-btn variant="outlined" @click="Calculation(4)">{{modes[4]}}</v-btn>
      </v-col>
    </v-row>

    <v-row v-for="rn in 3">
      <v-col v-for="cn in 3" :key="cn" cols="3" sm="1">
        <v-btn variant="outlined" @click="NumBtn(cn + Math.floor(((3 - rn) * 3)))">{{cn + Math.floor(((3 - rn) * 3))}}</v-btn>
      </v-col>

      <v-col cols="3" sm="1">
        <v-btn variant="outlined" @click="Calculation(4 - rn)">{{modes[4 - rn]}}</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" sm="2">
        <v-btn variant="outlined" @click="NumBtn(0)">0</v-btn>
      </v-col>
      <v-col cols="3" sm="1">
        <v-btn variant="outlined">.</v-btn>
      </v-col>
      <v-col cols="3" sm="1">
        <v-btn variant="outlined" @click="Calculation(0)">=</v-btn>
      </v-col>
    </v-row>
  </v-container>
</v-app>
</template>

<script>
export default{
  data(){
    return{
      num: 0,
      total: 0,
      grand_total: 0,
      input_num: 0,
      modes: [
        '＝', '＋', '−', '×', '÷'
      ],
      mode: 0,
      flag: false,
    }
  },

  methods:{
    NumBtn(n){
      if(this.flag){
        this.flag = false

        if(this.mode & 8){
          this.total = 0
          this.mode = 0
          this.input_num = 0
        }

        else{
          this.total = this.num
        }

        this.num = 0
      }

      this.num = (this.num * 10) + n
    },

    Calculation(mode){
      if(!this.flag){
        this.input_num = this.num
        if(this.mode){
          this.num = this.CalcSwitch(this.mode, this.total, this.num)
        }
      }

      else if(this.mode & 8 && !mode){
        this.num = this.CalcSwitch(this.mode & 7, this.total, this.input_num)
      }

      this.total = this.num

      if(mode){
        this.mode = mode
      }

      else{
        this.mode = (this.mode & 7) ^ 8
        this.grand_total += this.total
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
      this.total = 0
      this.grand_total = 0
      this.input_num = 0
      this.mode = 0
    },

    GrandTotal(){
      this.num = this.grand_total
      this.flag = true
    },
  },
}
</script>

<style scoped>
</style>
