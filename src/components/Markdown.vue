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
    },
    init() {
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
    },
    closeModal() {
      this.$parent.$emit('close-modal');
    }
  },
  mounted() {
    this.init();
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
    });
    this.$parent.$on('add-list', listType => {
      let selections = this.editor.getSelections()[0].split('\n');
      let line = this.editor.getCursor().line;
      switch(listType) {
        case 'ordered':
          selections = selections.map((sel, index) => {
            return (index + 1).toString() + '. ' + sel;
          });
          this.editor.replaceSelections([selections.join('\n')]);
        break;
        case 'unordered':
          selections.forEach((sel, index) => {
            sel = index + '1' + '. ' + sel; 
          });
          selections = selections.map((sel, index) => {
            return '* ' + sel;
          });
          this.editor.replaceSelections([selections.join('\n')]);
        break;
      }
    });
    this.$parent.$on('add-link', link => {
      // console.log(link);
      let line = this.editor.getCursor().line;
      let ch = this.editor.getCursor().ch;
      this.editor.replaceRange(link, {line, ch});
      this.closeModal();
    });
    this.$parent.$on('clear', () => {
      this.editor.setValue('');
    });
  }
}
</script>

<style scoped>
#markdown {
  width: 100%;
}

</style>
