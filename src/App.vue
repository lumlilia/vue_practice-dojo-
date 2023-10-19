<script>

export default{
  components:{
  },

  data(){
    return{
    }
  },
}
</script>

<template>
  <p><router-link to="/">Close</router-link></p>
  <p><router-link to="main">Main</router-link></p>
  <p><router-link to="misskey">Misskey</router-link></p>
  <p><router-link to="slotroot">Slot・Vuetify</router-link></p>
  <p><router-link to="articles">Artricles (2023/09/19)</router-link></p>
  <p><router-link to="calc">Calc (2023/10/19)</router-link></p>
  <router-view />
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

#counterbox{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 600px;
}
#counterbox p{
  text-align: center;
  font-size: 2em;
  font-weight: bold;
}
.btnbox{
  display: flex;
  width: 100%;
  height: 36px;
}
.btnbox button{
  width: 100%;
}
</style>
