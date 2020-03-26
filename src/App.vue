<template>
  <div id="app" :class="{ 'no-touchevents': touchable }">
    <div class="row align-center">
      <div class="small-12 column">
        <div id="logo" :style="{'background-image': 'url(' + require('./assets/logo.svg') + ')'}"></div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'app',
  computed: {
    touchable: function() {
      return !(('ontouchstart' in window) || window.DocumentTouch)
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  mounted: function () {
  },
  methods: {
  }
}
</script>

<style src="../public/css/app.css" lang="css"></style>
