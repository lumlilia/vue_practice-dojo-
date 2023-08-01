<template>
  <div>
    <h3>{{title}}</h3>
    <p>{{msg}}</p>
    <br>
  </div>
</template>


<script>
  export default{
    props: ["msg", "title"],
  }
</script>


<style scoped>
</style>
