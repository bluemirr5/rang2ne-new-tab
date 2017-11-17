<template>
  <div id="app">
    <clock></clock>
  </div>
</template>

<script>
import clock from './component/Clock.vue'

export default {
  name: 'app',
  components: {
      clock
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  body {
    position: relative;
    overflow: hidden;
    font-family: 'Roboto', 'Arial', 'Malgun Gothic', '맑은 고딕', sans-serif;
    --background: #f0efee;
    /* min-height: 635px; */
    user-select: none;
    background: url(https://whale-store.pstatic.net/20170919_104/15058224522968TW0x_JPEG/irene-coco-153263.jpg), url(https://whale-store.pstatic.net/20170919_104/15058224522968TW0x_JPEG/irene-coco-153263.jpg?type=a320) center;
  }

  body {

  }
</style>
