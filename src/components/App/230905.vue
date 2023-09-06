<template>
  <main @click="MojiChangeBtn">
    <p id="suuji" :style="{
      opacity: (view_flag ? 1 : 0)
    }">{{suuji}}</p>
    <div id="msgwin">
      <div id="msg">
        <p>{{mojiretu}}</p>
        <div v-if="timer_id == -1" id="allow_next"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default{
  data(){
    return{
      suuji: 42,

      mojiretu: '我はここにあり',
      mojiretu_template: [
        '我はそこにいた','我はここにあり'
      ],
      mojicount: 0,
      timer_id: -1,
      view_flag: true,
    }
  },

  methods:{
    MojiChangeBtn(){
      if(this.timer_id == -1){
        this.timer_id = setInterval(this.MojiChange, 300)
        this.mojiretu = '我'
        this.mojicount++
        this.view_flag = !this.view_flag
      }

      else{
        this.MojiChange(false)
      }
    },

    MojiChange(flag = true){
      const moji_n = Math.floor(this.mojicount / 7)
      let moji_c = this.mojicount % 7

      if(flag){
        this.mojiretu = this.mojiretu + this.mojiretu_template[moji_n][moji_c]
        this.mojicount++
      }

      else{
        this.mojicount += 7 - moji_c
        moji_c = 6
        this.mojiretu = this.mojiretu_template[moji_n]
      }

      if(moji_c == 6){
        clearInterval(this.timer_id)
        this.timer_id = -1

        if(this.mojicount == 14){
          this.mojicount = 0
        }
      }
    }
  },
}
</script>

<style scoped>
main{
  position: relative;
  width: 300px;
  height: 240px;
  background-color: #303030;
}
main:hover{
  cursor: pointer;
}
p{
  color: white;
}

#msgwin{
  position: absolute;
  bottom: 15px;
  left: 50%;
  width: 270px;
  height: 50px;
  border: 3px white groove;
  transform: translateX(-50%);
}

#suuji{
  position: absolute;
  bottom: 50px;
  left: 50%;
  font-size: 100px;
  transition: 1s;
  transform-origin: bottom;
  transform: translateX(-50%);
  animation: 0.6s suuji_ani linear infinite alternate;
}

@keyframes suuji_ani{
  0%{
    transform: translateX(-50%);
  }
  100%{
    transform: translateX(-50%) scaleY(1.2);
  }
}


#msg{
  position: relative;
  height: 50px;
  font-size: 16px;
}
#allow_next{
  position: absolute;
  bottom: 3px;
  right: 3px;
  width: 0;
  height: 0;
  border: 7px transparent solid;
  border-top: 12px white solid;
  transform-origin: center;
  animation: 0.5s alnx_ani linear infinite alternate;
}

@keyframes alnx_ani{
  0%{
    transform: scaleX(0);
  }
  100%{
    transform: scaleX(1);
  }
}
</style>

