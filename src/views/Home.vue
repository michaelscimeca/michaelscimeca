<template>
  <div id="home">
    <div id="headline">
      <div class="row">
        <div class="small-12 column">
          <h1 :class="{ activate: isActive }" v-html="wrapper(`<div>Hi, I'm Mikey,</div><div>A Web Developer</div><div>& Digital Designer</div><div>From Chicago.</div>`)"></h1>
          <p>I'm available for freelance work.</p>
          <p>Say <a href="mailto:hi@michaelscimeca.com">hi@michaelscimeca.com</a></p>
          <a href="https://www.linkedin.com/in/mikey-scimeca-4b7b54b5/" id="linkdin-container">
            <div class="linkdin-logo" :style="{'background-image': 'url(' + require('../assets/linkedin.svg') + ')'}"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'home',
  created() {
  },
  computed: {
  },
  components: {
  },
  data () {
    return {
      isActive: false
    }
  },
  mounted () {
    setTimeout(()=> {
      this.isActive = true;
    }, 100)
  },
  methods: {
    wrapper: function(content) {
      const result = content.replace(/(?![^<]*>)[^<]/g, c => `<span>${(c === ' ') ? '&nbsp' : c}</span>\n`);
      return result.replace(/\n/g, "");
    }
  },
}
</script>

<style src="../../public/css/app.css" lang="css"></style>
