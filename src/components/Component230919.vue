<template>
  <h1>記事こんぽーねんと！</h1>

  <hr>

  <div id="input_box">
    
    <v-text-field label="たいとる" variant="underlined" v-model="title" />
    <v-text-field label="あつほる" variant="underlined" v-model="atuhor" />
    <v-textarea label="てきすと" v-model="text" />
    <v-btn variant="outlined" @click="NextArticle">Next</v-btn>
  </div>
  <hr>

  <div v-for="(arr, i) in artobj">
    <v-btn variant="outlined" @click="RemoveArticle(i)">破壊！</v-btn>
    <ArticleItem :article="arr">
      <div v-html="arr.text"></div>
      <hr>
      <BreakLineText :txt="arr.text" headtxt="【Slot】" />
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

    RemoveArticle(n){
      this.artobj.splice(n, 1)
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

