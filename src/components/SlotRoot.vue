<template>
  <SlotTest nyao="<p>prorsではHTML要素を渡せません</p>">Slot!!<button style="border: 2px lime solid">ぼたんにゃ</button></SlotTest>
</template>

<script>
import SlotTest from './MySlotTestComponent.vue'

export default{
  components:{
    SlotTest,
  },

  data(){
    return{
    }
  },

  methods:{
  },
}
</script>

<style scoped>
</style>

