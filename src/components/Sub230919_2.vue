<template>
  <v-card
    variant="text"
    :title="(headtxt ? headtxt : '') + 'BreakLineTextそのまま'"
    :subtitle="'BreakLineText' + (headtxt ? ' in Slot' : '')"
    :text="breakLineText"
  />

  <hr>

  <v-card
    variant="text"
    :title="(headtxt ? headtxt : '') + 'BreakLineText + v-html'"
    :subtitle="'BreakLineText' + (headtxt ? ' in Slot' : '')"
  />
  <div class="text_div" v-html="breakLineText"></div>
</template>

<script>
export default{
  props: ['txt', 'headtxt'],

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

.text_div{
  padding: 1em;
}
</style>

