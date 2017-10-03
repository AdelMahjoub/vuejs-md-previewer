<template>
  <div class="level">
    <div class="level-left">
      <a
      @click="$parent.$emit(keyEvent.trigger)"
      :key="`keyEvent-${index}`"
      v-for="(keyEvent, index) in keyEvents"
      :title="keyEvent.title"
      class="button is-dark is-outlined">
        <span
        class="icon is-small">
          <i :class="keyEvent.class"></i>
        </span>
      </a>
      <a
      @click="applyAction"
      :data-action="action.function"
      :key="`action-${index}`"
      v-for="(action, index) in actions"
      :title="action.title"
      class="button is-dark is-outlined">
        <span
        :data-action="action.function" 
        class="icon is-small">
          <i
          :data-action="action.function" 
          :class="action.class" 
          v-html="action.textContent"></i>
        </span>
      </a>
    </div>
    <div class="level-right">
      <a
      @click="toggleTheme"
      class="button is-dark is-outlined">
        Toggle theme
      </a>
    </div>
  </div>
</template>

<script>
import store from '../store.js';

export default {
  name: 'tool-bar',
  data() {
    return {
      actions: store.toolbar.actions,
      keyEvents: store.toolbar.keyEvents
    };
  },
  methods: {
    applyAction(e) {
      e.preventDefault();
      const action = e.target.getAttribute('data-action');
      const selection = window.getSelection().toString();
      switch(action) {
        case 'titlecase':
          this.$parent.$emit('update-selection', selection.toUpperCase());
        break;
        case 'lowercase':
          this.$parent.$emit('update-selection', selection.toLowerCase());
        break;
        case 'capitalize':
          const capitalized = 
          selection.toLowerCase().split(' ').map(selection => selection[0].toUpperCase().concat(selection.slice(1))).join(' ');
          this.$parent.$emit('update-selection', capitalized);
        break;
        case 'bold':
          this.$parent.$emit('update-selection', '**'.concat(selection).concat('**'));
        break;
        case 'italic':
          this.$parent.$emit('update-selection', '*'.concat(selection).concat('*'));
        break;
        case 'strikethrough':
          this.$parent.$emit('update-selection', '~~'.concat(selection).concat('~~'));
        break;
      }
    },
    toggleTheme() {
      this.$parent.$emit('toggle-theme');
    }
  }
}
</script>

<style scoped>
.level {
  margin: 40px 0 20px 0;
}
a {
  margin-right: 4px;
}

</style>