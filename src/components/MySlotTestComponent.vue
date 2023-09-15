<template>
  <div>
    <slot></slot>
    <v-card title="SlotとVuetify" />
    <v-card title="Slot" :text="'slotを使うと、親要素から文字やコンポーネントを受け取ることができます。' + nyao" />

    <v-card title="Vuetify" text="おされでざいんのテンプレートみたいなライブラリなのだ！" />

    <v-card title="value" :text="name"></v-card>
    <v-list lines="one">
      <v-list-item
        v-for="item in name_arr"
        :title="item"
        @click="name = item"
      ></v-list-item>
    </v-list>
    <v-btn>HogeHoge (default)</v-btn>
    <v-btn style="text-transform: none">HogeHoge (text-tranform: none)</v-btn>
  </div>
</template>

<script>
export default{
  props: ['nyao'],
  data(){
    return{
      name: 'inu',
      name_arr: ['inu', 'neko', 'tori'],
    }
  },

  methods:{
  },
}
</script>

<style scoped>
</style>

