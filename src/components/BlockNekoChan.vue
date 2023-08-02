<template>
<div id="chara">
  <div id="head_out">
    <div id="ear1" class="ear" :style="{borderBottomColor: bgcolor}"></div>
    <div id="ear2" class="ear" :style="{borderBottomColor: bgcolor}"></div>

    <div id="head_in" :style="{backgroundColor: bgcolor}">
      <div id="face">
        <div id="eye1" class="eye"></div>
        <div id="mouse"></div>
        <div id="eye2" class="eye"></div>
      </div>
    </div>
  </div>

  <div id="body_out">
    <div id="body_in" :style="{backgroundColor: bgcolor}"></div>
    <div id="arm1" class="arm" :style="{backgroundColor: bgcolor}"></div>
    <div id="arm2" class="arm" :style="{backgroundColor: bgcolor}"></div>
    <div id="leg1" class="leg" :style="{backgroundColor: bgcolor}"></div>
    <div id="leg2" class="leg" :style="{backgroundColor: bgcolor}"></div>
  </div>
</div>
</template>

<script>
export default{
  props: ["bgcolor"],

  data(){
    return{
    }
  },

  methods:{
  },
}
</script>

<style scoped>
#head_out,
.ear,
#face,
#body_out{
  background-color: unset !important;
}


#chara{
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
  border-bottom: 15px solid;
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
  background-color: black !important;
  clip-path: polygon(0% 0%, 10% 0%, 25% 70%, 50% 0%, 75% 70%, 90% 0%, 100% 0%, 75% 100%, 50% 30%, 25% 100%);
}

.eye{
  position: absolute;
  top: 45%;
  width: 4px;
  height: 10px;
  color: blue;
  background-color: black !important;
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
}
#leg2{
  right: 0;
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

