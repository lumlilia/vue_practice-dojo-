<template>
<main>
  <h1>すなどけい</h1>
  <p style="font-family: monospace;">{{minute}}:{{('00' + seconds).slice(-2)}} {{(timer_flag ? 'ON&nbsp;' : 'OFF')}}</p>

  <div id="hourglass_box">
    <div id="sand_top" class="sand" :style="{height: (((minute * 60) + seconds) / 5) + 'px'}"></div>
    <div id="sand_bottom" class="sand" :style="{height: (((set_time[0] * 60 + set_time[1]) - (minute * 60 + seconds)) / 5) + 'px'}"></div>
    <div id="sand_fall" class="sand" :style="{opacity: ((minute + seconds) ? 1 : 0)}"></div>
    <div id="hourglass_img"></div>
  </div>

  <hr>

  <p>時間設定 (最大5分)</p>
  <div id="set_box">
    <input v-for="i in 2" v-model.number="set_time[i - 1]" @input="OnInput(i - 1)" type="number" min="0" :max="((i == 1) ? 5 : 59)" :style="{order: (i - 1) * 2}" />
    <p style="order: 1">:</p>
  </div>

  <button @click="TimerFlip" :disabled="((set_time[0] + set_time[1]) ? false : true)">くるくる</button>
</main>
</template>

<script>
export default{
  data(){
    return{
      set_time: [0, 0],
      minute: 0,
      seconds: 0,
      timer_flag: false,
      timer_id: null,
    }
  },

  methods:{
    TimerStart(){
      if(this.set_time[0] + this.set_time[1]){
        this.timer_flag = true
        this.TimerCount()
      }
    },

    TimerCount(){
      if(this.timer_flag){
        if(this.minute == 0 && this.seconds == 0){
          this.timer_flag = false
        }

        else{
          if(this.seconds > 0){
            this.seconds--
          }
          else if(this.minute > 0){
            this.minute--
            this.seconds = 59
          }

          this.timer_id = setTimeout(this.TimerCount, 1000)
        }
      }
    },

    TimerFlip(){
      if(this.set_time[0] + this.set_time[1]){
        if(this.timer_flag){
          clearTimeout(this.timer_id)
        }
        else{
          this.timer_flag = true
        }
        const comp_seconds = (this.set_time[0] * 60 + this.set_time[1]) - (this.minute * 60 + this.seconds)
        this.minute = Math.floor(comp_seconds / 60)
        this.seconds = comp_seconds % 60
        this.TimerStart()
      }
    },

    OnInput(n){
      if(this.timer_flag){
        clearTimeout(this.timer_id)
        this.timer_flag = false
        this.minute = 0
        this.seconds = 0
      }

      this.set_time[n] = Number(this.set_time[n])
      if(this.set_time[0] >= 5){
        this.set_time[1] = 0
      }

      if(this.set_time[n] > (n ? 59 : 5)){
        this.set_time[n] = (n ? 59 : 5)
      }
    },
  },
}
</script>

<style scoped>
main{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1, p{
  margin: auto;
}
hr{
  margin: 5px 0;
}
#hourglass_box{
  position: relative;
  width: 100px;
  height: 200px;
  margin: auto;
}
#hourglass_img{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('/src/assets/hourglass.svg') center / contain no-repeat;
}
.sand{
  position: absolute;
  background-color: #ffa918;
}
#sand_top,
#sand_bottom{
  width: 98%;
}
#sand_top{
  bottom: 54%;
  left: 1%;
}
#sand_bottom{
  bottom: 8%;
  left: 1%;
}
#sand_fall{
  top: 46%;
  left: 50%;
  width: 5%;
  height: 46%;
  transform: translateX(-50%);
  transition: 1s;
}
#set_box{
  display: flex;
  width: 100px;
  margin: auto;
  margin-bottom: 10px;
  gap: 10px;
}
#set_box input{
  width: 50%;
}
</style>
