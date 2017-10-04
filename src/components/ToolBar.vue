<template>
  <div class="level">
    <div class="level-left">
      <!-- key events: undo redo -->
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
      <!-- space -->
      <div class="level-item"></div>
      <!-- text font events: bold, italic ... -->
      <a
      @click="applyAction"
      :data-action="action.function"
      :key="`action-${index}`"
      v-for="(action, index) in fontEvents"
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
      <!-- divider -->
      <div class="level-item"></div>

      <!-- headers events: markdown headers -->
      <a
        :key="`header-${index}`"
        v-for="index in 6"
        :title="`Set a H${index} header`"
        :data-header="index"
        @click="addHeader"
        class="button is-dark is-outlined">
        <span
        :data-header="index"
        class="icon is-small">
          <i
          :data-header="index" 
          class="fa">H{{index}}</i>
        </span>
      </a>
      <!-- divider -->
      <div class="level-item"></div>

      <!-- list events: ordered, unerdored -->
      <a
      @click="addList"
      :data-action="action.trigger"
      :key="`action-${index}`"
      v-for="(action, index) in listEvents"
      :title="action.title"
      class="button is-dark is-outlined">
        <span
        :data-action="action.trigger" 
        class="icon is-small">
          <i
          :data-action="action.trigger" 
          :class="action.class"></i>
        </span>
      </a>
      <!-- divider -->
      <div class="level-item"></div>

      <!-- link events: url link, image link -->
      <a
      @click="addLink"
      :data-action="action.trigger"
      :key="`action-${index}`"
      v-for="(action, index) in linkEvents"
      :title="action.title"
      class="button is-dark is-outlined">
        <span
        :data-action="action.trigger" 
        class="icon is-small">
          <i
          :data-action="action.trigger" 
          :class="action.class"></i>
        </span>
      </a>
      <!-- divider -->
      <div class="level-item"></div>

      <!-- misc events: clear ... -->
      <a
      @click="clear"
      :data-action="action.trigger"
      :key="`action-${index}`"
      v-for="(action, index) in miscEvents"
      :title="action.title"
      class="button is-dark is-outlined">
        <span
        :data-action="action.trigger" 
        class="icon is-small">
          <i
          :data-action="action.trigger" 
          :class="action.class"></i>
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
      fontEvents: store.toolbar.fontEvents,
      keyEvents: store.toolbar.keyEvents,
      listEvents: store.toolbar.listEvents,
      linkEvents: store.toolbar.linkEvents,
      miscEvents: store.toolbar.miscEvents
    };
  },
  methods: {
    applyAction(e) {
      e.preventDefault();
      const action = e.target.getAttribute('data-action');
      this.$parent.$emit('update-selection', action);
    },
    addHeader(e) {
      const header = e.target.getAttribute('data-header');
      this.$parent.$emit('add-header', header)
    },
    toggleTheme() {
      this.$parent.$emit('toggle-theme');
    },
    addList(e) {
      const listType = e.target.getAttribute('data-action');
      this.$parent.$emit('add-list', listType);
    },
    addLink(e) {
      const linkType = e.target.getAttribute('data-action');
      this.$parent.$emit('prepare-link', linkType);
    },
    clear() {
      this.$parent.$emit('clear');
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
