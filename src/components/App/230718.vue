<script>
import HelloWorld from '/src/components/HelloWorld.vue'

export default{
  components:{
    HelloWorld,
  },

  data(){
    return{
      isShows: [false, false, false, false],
      msgs: {
        header: "You did it!",
        main: "全てtrueにするとYou did it!が出るよ！",
      },
    }
  },
}
</script>

<template>
  <header v-if="isShows.every((isShow) => isShow)">
    <img alt="Vue logo" class="logo" src="/src/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg=msgs.header />
    </div>
  </header>

  <main>
    <h1>{{msgs.main}}</h1>

    <button @click="
      isShows[0] = !isShows[0];
      isShows[2] = !isShows[2]
    ">toggle</button>

    <button @click="
      isShows[0] = !isShows[0];
      isShows[1] = !isShows[1]
    ">toggle</button>

    <button @click="
      isShows[1] = !isShows[1];
      isShows[2] = !isShows[2]
    ">toggle</button>

    <button @click="
      isShows[0] = !isShows[0];
      isShows[1] = !isShows[1];
      isShows[2] = !isShows[2]
    ">toggle</button>

    <button @click="
      isShows[0] = !isShows[0];
      isShows[1] = !isShows[1];
      isShows[3] = !isShows[3]
    ">toggle</button>

    <ul>
      <li v-for="(flag, i) in isShows">
        {{i + 1}} : {{flag}}
      </li>
    </ul>
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
