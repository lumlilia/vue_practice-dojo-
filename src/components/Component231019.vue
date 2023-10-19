<template>
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
        <v-btn variant="outlined">?</v-btn>
      </v-col>
      <v-col cols="3" sm="1">
        <v-btn variant="outlined">%</v-btn>
      </v-col>
      <v-col cols="3" sm="1">
        <v-btn variant="outlined" @click="Keisan(4)">{{modes[4]}}</v-btn>
      </v-col>
    </v-row>

    <v-row v-for="rn in 3">
      <v-col v-for="cn in 3" :key="cn" cols="3" sm="1">
        <v-btn variant="outlined" @click="NumBtn(cn + Math.floor(((3 - rn) * 3)))">{{cn + Math.floor(((3 - rn) * 3))}}</v-btn>
      </v-col>

      <v-col cols="3" sm="1">
        <v-btn variant="outlined" @click="Keisan(4 - rn)">{{modes[4 - rn]}}</v-btn>
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
        <v-btn variant="outlined" @click="Keisan(0)">=</v-btn>
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
      temp: 0,
      modes: [
        '=', '+', '-', '*', '/'
      ],
      mode: 0,
      flag: false,
    }
  },

  methods:{
    NumBtn(n){
      if(this.flag){
        this.num = 0
        this.flag = false
      }

      this.num = (this.num * 10) + n
    },

    Keisan(mode){
      switch(this.mode){
        case 1:
          this.num = this.temp += this.num
          break
        case 2:
          this.num = this.temp -= this.num
          break
        case 3:
          this.num = this.temp *= this.num
          break
        case 4:
          this.num = this.temp /= this.num
          break

        default:
          break
      }

      if(mode){
        this.temp = this.num
      }

      else{
        this.temp = 0
      }

      this.mode = mode
      this.flag = true
    },

    ClearNum(){
      this.num = 0
      this.flag = false
      this.temp = 0
      this.mode = 0
    }
  },
}
</script>

<style scoped>
</style>
