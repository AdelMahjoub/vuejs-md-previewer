<template>
  <div class="column is-half">
    <div id="markdown"></div>
  </div>
</template>

<script type="text/javascript">
import CodeMirror from 'codemirror';

export default {
  name: 'markdown',
  data() {
    return {
      markdown: '',
      editor: null,
    }
  },
  methods: {
    handleChange() {
      this.$parent.$emit('markdown', this.markdown);
    },
    toggleTheme() {
      let theme = this.editor.getOption('theme');
      theme = theme === 'default' ? 'monokai' : 'default';
      this.editor.setOption('theme', theme);
    }
  },
  mounted() {
    this.editor = CodeMirror(document.querySelector('#markdown'), {
      mode: 'gfm',
      theme: 'monokai',
      autofocus: true,
      lineNumbers: true,
      tabSize: 2,
      showCursorWhenSelecting: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      lineWrapping: true
    });
    this.editor.setSize('100%', 600);
    this.editor.on('change', (instance, changeObj) => {
      this.markdown = this.editor.getValue();
      this.handleChange();
    });
    this.$parent.$on('update-selection', updated => {
      this.editor.replaceSelection(updated);
    });
    this.$parent.$on('undo', () => {
      this.editor.execCommand('undo');
    });
    this.$parent.$on('redo', () => {
      this.editor.execCommand('redo');
    });
    this.$parent.$on('toggle-theme', () => {
      this.toggleTheme();
    });
    this.$parent.$on('add-header', (header) => {
      let line = this.editor.getCursor().line;
      let content = '#'.repeat(header) + ' ';
      this.editor.replaceRange(content, {line, ch: 0});
    })
  }
}
</script>

<style scoped>
#markdown {
  width: 100%;
}
</style>
