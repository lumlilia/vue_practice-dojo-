<template>
  <p>2023/09/12 こんぽーねんと！</p>
  <p>{{count}}</p>
  <div>
    <button @click="Plus">ぷらす</button>
  </div>
</template>

<script>
export default{
  data(){
    return{
      count: 0,
    }
  },

  methods:{
    Plus(){
      this.count++
    },
  },
}
</script>

<style scoped>
</style>

