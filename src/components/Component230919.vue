<template>
  <h1>記事こんぽーねんと！</h1>
  <div id="input_box">
    
    <input @input="(e) => title = e.target.value">
    <input @input="(e) => atuhor = e.target.value">
    <textarea @input="(e) => text = e.target.value"></textarea>
    <button @click="NextArticle">Next</button>
  </div>
  <ArticleItem v-if="artobj.length" v-for="arr in artobj.reverse()" :article="arr">{{arr.text}}</ArticleItem>
</template>

<script>
import ArticleItem from './Sub230919.vue'

export default{
  components:{
    ArticleItem,
  },

  props:['article'],

  data(){
    return{
      artobj: [],
      id: 0,
      title: '',
      text: '',
      atuhor: ''
    }
  },

  methods:{
    NextArticle(){
      this.artobj.push({
        id: this.id,
        title: this.title,
        text: this.text,
        atuhor: this.atuhor
      });
      this.id++
    },
  },
}
</script>

<style scoped>
input, textarea{
  border: 2px black solid !important;
}

#input_box{
  display: flex;
  flex-direction: column;
}
</style>

