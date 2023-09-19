<template>
  <h3>BreakLineTextそのまま</h3>
  <p>{{breakLineText}}</p>
  <hr>

  <h3>BreakLineText + v-html</h3>
  <p v-html="breakLineText"></p>
</template>

<script>
export default{
  props: ['txt'],

  data(){
    return{
      breakLineText: this.txt.replaceAll("\n", '<br>'),
    }
  },

  methods:{
  },
}
</script>

<style scoped>
hr{
  margin: 1em 0;
}
</style>

