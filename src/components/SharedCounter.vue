<template>
  <p>SharedCounter.vue</p>
  <p>{{num}}</p>
  <button @click="SendNum">myEvent</button>
</template>

<script>
export default{
  props: ['num', 'p_num'],
  data(){
    return{
    }
  },

  methods:{
    SendNum(){
      this.$emit('myEvent', this.p_num + 1)
    },
  },
}
</script>

<style scoped>
</style>

