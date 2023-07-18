<script>
import HelloWorld from './components/HelloWorld.vue'

export default{
  components:{
    HelloWorld,
  },

  data(){
    return{
      hoge: "nekoneko",
      isShow: true,
      arr: [1,3,5,7],
      car: {
        name: "kuruma",
        speed: "hayai",
        price: "takai",
      }
    }
  },
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
    <img v-if="isShow" alt="Vue logo">
    {{hoge}}
    <button @click="isShow = !isShow">toggle</button>
    <ul>
      <li v-for="item in arr">
        {{item}}
      </li>
      <li>{{car.name}}</li>
      <li>{{car.speed}}</li>
      <li>{{car.price}}</li>
    </ul>
    <p>{{car}}</p>
    <HelloWorld v-for="item in arr" msg="You did it!" />
    <HelloWorld v-for="item in arr" :msg="item" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
