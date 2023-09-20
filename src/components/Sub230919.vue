<template>
  <div class="artdiv">
    <v-card
      variant="text"
      :title="'#' + article.id + ' ' + article.title"
      :subtitle="article.atuhor"
    />

    <v-card
      variant="text"
      title="propsそのまま"
      subtitle="ArticleItem"
      :text="article.text"
    />

    <hr>

    <v-card
      variant="text"
      title="props + v-html"
      subtitle="ArticleItem"
    />
    <div class="text_div" v-html="article.text"></div>

    <hr>

    <v-card
      variant="text"
      title="Slot"
      subtitle="ArticleItem"
    />

    <div class="text_div">
      <slot></slot>
    </div>

    <hr>
  </div>
</template>

<script>
export default{
  components: {
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

.text_div{
  padding: 1em;
}

.artdiv{
  margin-bottom: 2em;
}
</style>

