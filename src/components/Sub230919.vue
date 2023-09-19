<template>
  <div class="artdiv">
    <h2>{{article.title}}</h2>
    <p>id: {{article.id}}</p>
    <p>作者: {{article.atuhor}}</p>
    <hr>

    <h3>propsそのまま</h3>
    <p>{{article.text}}</p>
    <hr>

    <h3>props + v-html</h3>
    <p v-html="article.text"></p>
    <hr>

    <h3>Slot</h3>
    <slot></slot>
    <hr>

    <BreakLineText v-if="article.text" :txt="article.text" />
    <hr>
    <hr>
  </div>
</template>

<script>
import BreakLineText from './Sub230919_2.vue'

export default{
  components: {
    BreakLineText,
  },

  props:['article'],

  data(){
    return{
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
.artdiv{
  margin-bottom: 2em;
}
</style>

