<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ mode | capitalize }}</p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <form>
          <div class="field">
            <label class="label">Title</label>
            <input
              autofocus
              required
              v-model="title"
              type="text" 
              class="input"
              :placeholder="mode + ' title'">
          </div>
          <div class="field">
            <label class="label">Url</label>
            <input
            v-model="url"
            required 
            type="url" 
            class="input"
            :placeholder="'http://example.com' + (mode === 'link' ? '' : '/image.png')">
          </div>
        </form>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="sendLink" :disabled="!title || !url">Save</button>
        <button class="button" @click="close">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-form',
  filters: {
    capitalize(string) {
      if(Boolean(string)) {
        return string[0].toUpperCase().concat(string.slice(1));
      }
      return '';
    }
  },
  data() {
    return {
      mode: '',
      title: '',
      url: ''
    };
  },
  methods: {
    sendLink() {
      let content;
      switch(this.mode) {
        case 'link':
          content = `[${this.title}](${this.url})`;
        break;
        case 'image':
          content = `![${this.title}](${this.url} "${this.title}")`;
        break;
      }
      this.$parent.$emit('add-link', content);
      this.reset();
    },
    reset() {
      this.url = this.title = '';
    },
    close() {
      this.$parent.$emit('close-modal');
    }
  },
  created() {
    this.$parent.$on('open-modal', linkType => {
      this.mode = linkType;
    });
  }
}
</script>

<style scoped>

</style>
