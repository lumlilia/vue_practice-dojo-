<template>
  <h1>記事こんぽーねんと！</h1>
  <div id="input_box">
    
    <input @input="(e) => title = e.target.value">
    <input @input="(e) => atuhor = e.target.value">
    <textarea @input="(e) => text = e.target.value"></textarea>
    <button @click="NextArticle">Next</button>
  </div>
  <hr>

  <div v-for="arr in artobj">
    <ArticleItem :article="arr">
      <div v-html="arr.text"></div>
    </ArticleItem>

    <BreakLineText :txt="arr.text" />
    <hr>
    <hr>
  </div>
</template>

<script>
import ArticleItem from './Sub230919.vue'
import BreakLineText from './Sub230919_2.vue'

export default{
  components:{
    ArticleItem,
    BreakLineText,
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

hr{
  margin: 1em 0;
}

#input_box{
  display: flex;
  flex-direction: column;
}
</style>

