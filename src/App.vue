<script>
import HelloWorld from './components/HelloWorld.vue'

export default{
  components:{
    HelloWorld,
  },

  data(){
    return{
      gridNums: [
        1, 2, 2, 2, 2, 3, 1, 
        3, 3, 2, 1, 3, 1, 1, 
        2, 3, 3, 3, 1, 2, 3, 
        3, 2, 1, 3, 3, 2, 1, 
        2, 1, 3, 2, 3, 1, 3, 
        1, 2, 1, 2, 2, 2, 1, 
        3, 1, 1, 2, 1, 3, 0
      ],

      gridColors: ["#ff9090", "#90ff90", "#9090ff"],

      buttons: ["↑", "←", "↓", "→"],
      charaX: 1,
      charaY: 1,

      move: 1,
    }
  },

  methods:{
    charaMove(n){
      const mul = -1 + (Math.floor(n / 2) * 2)
      const add = this.move * mul

      if(n % 2){
        if(this.charaX + add > 0 && this.charaX + add < 8){
          this.charaX += add
        }
      }
      else{
        if(this.charaY + add > 0 && this.charaY + add < 8){
          this.charaY += add
        }
      }

      this.move = this.gridNums[(this.charaY - 1) * 7 + this.charaX - 1]
    }
  }
}
</script>

<template>
  <header v-if="move == 0" id="goal">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <div id="pazzle_box">
      <div v-for="(num, index) in gridNums" class="grids" :style="{
        backgroundColor: gridColors[num - 1],
        gridColumn: index % 7 + 1,
        gridRow: Math.floor(index / 7) + 1
      }"></div>

      <div id="chara" :style="{
        gridColumn: charaX,
        gridRow: charaY
        }">●</div>

    </div>

    <div id="control_box">
      <div id="sample_box">
        <div v-for="(color, index) in gridColors" class="sample_item">
          <div class="sample_color" :style="{
            backgroundColor: color,
            gridColumn: index + 1,
          }"></div>
          <p class="sample_num" :style="{
            gridColumn: index + 1,
          }">{{index + 1}}</p>
        </div>
      </div>

      <div id="button_box">
        <button v-for="(label, index) in buttons" @click="charaMove(index)" :style="{
          gridColumn: ((index % 2) ? index : 2),
          gridRow: ((index < 3) ? index + 1 : index - 1)
        }">{{label}}</button>

        <p id="move_view">{{move}}</p>
      </div>
    </div>

  </main>
</template>

<style scoped>
button{
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  color: black;
  border: 2px #303030 solid;
  box-sizing: border-box;
  padding: 0;
}

header {
  line-height: 1.5;
}

main{
  display: flex;
  justify-content: center;
  width: fit-content;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

#pazzle_box, #button_box{
  display: grid;
  justify-items: center;
  align-items: center;
}

#pazzle_box{
  grid-template-columns: repeat(7, 1fr);
  width: 280px;
  height: 280px;
  border: 2px #303030 solid;
  box-sizing: content-box;
}

.grids{
  border: 1px #303030 solid;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#chara{
  font-size: 24px;
}

#control_box{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#sample_box{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.sample_item{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sample_color{
  height: 10px;
}

.sample_num{
  text-align: center;
  font-size: 20px;
}

#button_box{
  grid-template-columns: repeat(3, 1fr);
  width: 120px;
  height: 120px;
  margin: 8px auto 0 auto;
}

#button_box button, #move_view{
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 24px;
  box-sizing: border-box;
}

#move_view{
  grid-column: 2;
  grid-row: 2;
}

#goal{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
}

@media (orientation: landscape){
  main{
    flex-direction: row;
    width: 280px;
  }
  
  #sample_box{
    width: 150px;
  }

  .sample_item{
    width: 40px;
  }
}

@media (orientation: portrait){
  main{
    flex-direction: column;
  }

  #control_box{
    margin-top: 15px;
  }
  
  #sample_box{
    width: 280px;
  }

  .sample_item{
    width: 80px;
  }
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
</style>
