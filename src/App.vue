<script>
import BlockNekoChan from './components/BlockNekoChan.vue'

export default{
  components:{
    BlockNekoChan,
  },

  data(){
    return{
      bg_cols: [
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255],
        [255, 255, 0],
        [255, 0, 255],
        [0, 255, 255]
      ],

      fg_cols: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],

      col_arr: ["R", "G", "B"],
      neko_count: 3,
      neko_sel: 1,
    }
  },

  methods:{
    ColorChange(e, mode, col_num){
      if(!mode){
        this.bg_cols[this.neko_sel - 1][col_num] = e.target.value
      }

      else{
        this.fg_cols[this.neko_sel - 1][col_num] = e.target.value
      }
    },

    NekoSummon(mode){
      if(this.neko_count == 1 + (mode * 5)){
        alert("ﾈｺﾁｬﾝの数は1〜6匹です")
      }

      else{
        this.neko_count += -1 + (mode * 2)
        if(this.neko_sel > this.neko_count){
          this.neko_sel = 1
        }
      }
    },

    NekoAlign(){
      this.temp = this.neko_count
      this.neko_count = 0
      setTimeout(() => {this.neko_count = this.temp}, 1)
    },

    NekoSelect(e){
      this.neko_sel = Number(e.target.value)
    }
  }
}
</script>

<template>
  <main>
    <div id="neko_box">
      <div v-for="(nums, index) in bg_cols" class="neko_chan">
        <BlockNekoChan
          v-if="index < neko_count"
          :bg_color="'rgb(' + nums.toString() + ')'"
          :fg_color="'rgb(' + fg_cols[index].toString() + ')'"
          :neko_num="index + 1"
        />
      </div>
    </div>

    <div id="config_box">
      <div id="summon_box">
        <span>ﾈｺﾁｬﾝを</span>
        <button @click="NekoSummon(0)">減らす</button>
        <button @click="NekoSummon(1)">増やす</button>
        <button @click="NekoAlign">揃える</button>
      </div>

      <hr />

      <div id="sel_box">
        <span>選択中: </span>
        <select @change="NekoSelect">
          <option v-if="neko_count >= 1" value="1">ﾈｺﾁｬﾝ1号</option>
          <option v-if="neko_count >= 2" value="2">ﾈｺﾁｬﾝ2号</option>
          <option v-if="neko_count >= 3" value="3">ﾈｺﾁｬﾝ3号</option>
          <option v-if="neko_count >= 4" value="4">ﾈｺﾁｬﾝ4号</option>
          <option v-if="neko_count >= 5" value="5">ﾈｺﾁｬﾝ5号</option>
          <option v-if="neko_count >= 6" value="6">ﾈｺﾁｬﾝ6号</option>
        </select>
      </div>

      <div id="range_boxs">
        <div class="range_box">
          <p>体</p>
          <div v-for="(str, index) in col_arr" class="ranges">
            <span>{{str}}:</span>
            <input type="range" min="0" max="255" :value="bg_cols[neko_sel - 1][index]" @change="(e) => ColorChange(e, 0, index)">
            <input type="number" min="0" max="255" :value="bg_cols[neko_sel - 1][index]" @change="(e) => ColorChange(e, 0, index)">
          </div>
        </div>

        <div class="range_box">
          <p>目・口・番号</p>
          <div v-for="(str, index) in col_arr" class="ranges">
            <span>{{str}}:</span>
            <input type="range" min="0" max="255" :value="fg_cols[neko_sel - 1][index]" @change="(e) => ColorChange(e, 1, index)">
            <input type="number" min="0" max="255" :value="fg_cols[neko_sel - 1][index]" @change="(e) => ColorChange(e, 1, index)">
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
button{
  color: black;
  border: 2px #303030 solid;
  box-sizing: border-box;
  border-radius: 0;
  padding: 0;
}

input[type=number]{
  height: fit-content;
}

select,
input{
  border-radius: 0;
}

select{
  color: black;
}

hr{
  margin: 10px auto;
  width: 100%;
}

main{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#neko_box, #config_box{
  display: flex;
  justify-content: center;
  margin: auto;
}

#neko_box{
  border-bottom: 1px #d0d0d0 solid;
  margin-bottom: 20px;
}

#config_box{
  flex-direction: column;
}

#summon_box{
  display: flex;
  width: 100%;
  gap: 5px;
}

#summon_box span{
  margin-right: 5px;
}

#summon_box button:last-child{
  margin-left: auto;
}

#sel_box{
  margin: auto;
}

.ranges{
  display: flex;
  width: fit-content;
  gap: 10px;
}

#range_boxs{
  display: flex;
  justify-content: center;
  gap: 10px;
}

.range_box{
  display: flex;
  flex-direction: column;
  font-family: monospace;
}

.range_box p{
  margin: auto;
}

.center_bar{
  width: 100%;
  height: 2px;
  background-color: #d0d0d0;
  transform: translateY(-0.8em);
}

@media (orientation: landscape){
  #neko_box{
    flex-wrap: nowrap;
    width: 484px;
    height: 150px;
  }

  #range_boxs{
    flex-direction: row;
  }
}

@media (orientation: portrait){
  #neko_box{
    flex-wrap: wrap;
    width: 242px;
    height: 250px;
  }

  #range_boxs{
    flex-direction: column;
    margin: auto;
  }
}


</style>
