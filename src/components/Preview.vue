<template>
  <div class="column is-half">
    <div
    id="preview" 
    class="markdown-body" 
    v-html="html"></div>
  </div>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js';

export default {
  name: 'preview',
  data() {
    return {
      html: null
    }
  },
  methods: {
    setMarked() {
      marked.setOptions({
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      });
    },
    renderMarkdown(markdown) {
      this.html = marked(markdown);
    }
  },
  created() {
    this.setMarked();
    this.$parent.$on('markdown', this.renderMarkdown);
  },
  updated() {
    document.querySelectorAll('pre code')
      .forEach(block => {
        hljs.highlightBlock(block);
      });
  }
}
</script>

<style scoped>
#preview {
  height: 600px;
  overflow: scroll;
}
</style>
