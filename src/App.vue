<script>
import BlockNekoChan from './components/BlockNekoChan.vue'

export default{
  components:{
    BlockNekoChan,
  },

  data(){
    return{
      col: 'red',
    }
  },

  methods:{
  }
}
</script>

<template>
  <main>
    <button @click="col = 'yellow'">yellow</button>
    <BlockNekoChan :bgcolor="col" />
    <BlockNekoChan bgcolor="lime" />
    <BlockNekoChan bgcolor="blue" />
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

</style>
