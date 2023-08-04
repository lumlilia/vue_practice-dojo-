<template>
<div id="chara">
  <div id="head_out">
    <div id="ear1" class="ear"></div>
    <div id="ear2" class="ear"></div>

    <div id="head_in">
      <div id="face">
        <div id="eye1" class="eye"></div>
        <div id="mouse"></div>
        <div id="eye2" class="eye"></div>
      </div>
    </div>
  </div>

  <div id="body_out">
    <div id="body_in">
    <div :id="'neko_num' + neko_num" class="neko_num"></div>
    </div>
    <div id="arm1" class="arm"></div>
    <div id="arm2" class="arm"></div>
    <div id="leg1" class="leg"></div>
    <div id="leg2" class="leg"></div>
  </div>
</div>
</template>

<script>
export default{
  props: ["bg_color", "fg_color", "neko_num"],

  data(){
    return{
    }
  },

  methods:{
  },
}
</script>

<style scoped>
#head_in,
#body_in,
.arm,
.leg{
  background-color: var(--bgcol);
}

.eye,
#mouse,
.neko_num{
  background-color: v-bind(fg_color);
}


#chara{
  --bgcol: v-bind(bg_color);
  position: relative;
  width: fit-content;
  height: fit-content;
}

#head_out{
  position: relative;
  width: 60px;
  height: 50px;
  margin: 0 10px;
  transform-origin: center bottom;
  animation: 5s head linear infinite alternate;
}

.ear{
  position: absolute;
  width: 0;
  height: 0;
  border-top: none;
  border-left: 8px transparent solid;
  border-bottom: 15px var(--bgcol) solid;
  border-right: 8px transparent solid;
}
#ear2{
  right: 0;
}

#head_in{
  position: absolute;
  top: 15px;
  width: 60px;
  height: 45px;
}

#face{
  position: relative;
  width: 100%;
  height: 100%;
}

#mouse{
  position: absolute;
  top: 50%;
  left: calc(50% - 5px);
  width: 10px;
  height: 10px;
  clip-path: polygon(0% 0%, 10% 0%, 25% 70%, 50% 0%, 75% 70%, 90% 0%, 100% 0%, 75% 100%, 50% 30%, 25% 100%);
}

.eye{
  position: absolute;
  top: 45%;
  width: 4px;
  height: 10px;
  color: blue;
  transform-origin: center;
  animation: 7s eye linear infinite alternate;
}
#eye1{
  left: 25%;
}
#eye2{
  left: calc(75% - 4px);
}

#body_out{
  position: relative;
}

#body_in{
  position: absolute;
  top: 0;
  left: calc(50% - 20px);
  width: 40px;
  height: 40px;
  transform-origin: center top;
}

.arm{
  position: absolute;
  top: 10px;
  width: 30px;
  height: 15px;
  animation: 1s arm linear infinite alternate;
}
#arm1{
  --rot: -30deg;
  transform-origin: center right;
}
#arm2{
  --rot: 30deg;
  right: 0;
  transform-origin: center left;
}

.leg{
  position: absolute;
  top: 35px;
  width: 15px;
  height: 25px;
  margin: 0 20px;
  border: 0;
}
#leg2{
  right: 0;
}

.neko_num{
  position: absolute;
  top: 15px;
  left: calc(50% - 5px);
  width: 10px;
  height: 15px;
}

#neko_num1{
  clip-path: polygon(5% 0%, 5% 20%, 35% 20%, 35% 100%, 65% 100%, 65% 0%);
}

#neko_num2{
  clip-path: polygon(5% 0%, 5% 20%, 65% 20%, 65% 40%, 5% 40%, 5% 100%, 95% 100%, 95% 80%, 35% 80%, 35% 60%, 95% 60%, 95% 0%);
}

#neko_num3{
  clip-path: polygon(5% 0%, 5% 20%, 65% 20%, 65% 40%, 5% 40%, 5% 60%, 65% 60%, 65% 80%, 5% 80%, 5% 100%, 95% 100%, 95% 0%);
}

#neko_num4{
  clip-path: polygon(5% 0%, 5% 60%, 65% 60%, 65% 100%, 95% 100%, 95% 0%, 65% 0%, 65% 40%, 35% 40%, 35% 0%);
}

#neko_num5{
  clip-path: polygon(5% 0%, 5% 60%, 65% 60%, 65% 80%, 5% 80%, 5% 100%, 95% 100%, 95% 40%, 35% 40%, 35% 20%, 95% 20%, 95% 0%);
}

#neko_num6{
  clip-path: polygon(5% 0%, 5% 100%, 95% 100%, 95% 40%, 35% 40%, 35% 60%, 65% 60%, 65% 80%, 35% 80%, 35% 20%, 95% 20%, 95% 0%);
}


@keyframes eye{
  0%, 24%, 30%, 96%, 100%{
    transform: scaleY(1);
  }
  27%, 98%{
    transform: scaleY(0);
  }
}

@keyframes head{
  0%, 80%{
    transform: rotate(0);
  }
  90%, 100%{
    transform: rotate(10deg);
  }
}

@keyframes arm{
  0%{
    transform: rotate(var(--rot));
  }
  100%{
    transform: rotate(0);
  }
}
</style>

